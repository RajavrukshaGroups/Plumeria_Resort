import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BookingContext } from "./BookingContext";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setRoom, resetRooms } from "../../store/bookingSlice"; // Import your Redux actions

const NewBookingSection = ({ disableControls = false }) => {
  const navigate = useNavigate();
  const {
    checkInDate,
    checkOutDate,
    setCheckInDate,
    setCheckOutDate,
    roomsData,
    roomsList,
    setRoomsList,
    loading,
    setLoading,
    availabilityMessage,
    setAvailabilityMessage,
    isRoomsSelected,
    setIsRoomSelected,
    invalidRooms,
    setInvalidRooms,
  } = useContext(BookingContext);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [tempRoomsList, setTempRoomsList] = useState([...roomsList]);
  const selectedRooms = useSelector((state) => state.booking.rooms);
  const selectedPlan = useSelector((state) => state.booking.selectedPlan);

  console.log(selectedRooms, "this is selectedRoom in new booking form");
  //  console.log(tempRoomsList[0]?.selectedRoom.roomType,'this is the temp rooms list')

  const dispatch = useDispatch();
  const openModal = () => {
    setTempRoomsList([...roomsList]);
    setAvailabilityMessage("");
    setIsModalOpen(true);
  };

  const handleRoomChange = (id, event) => {
    const newRoomType = event.target.value;
    const newRoom = roomsData.find((room) => room.roomType === newRoomType);
    setTempRoomsList((prevRooms) =>
      prevRooms.map((room) =>
        room.id === id
          ? {
              ...room,
              selectedRoom: newRoom,
              persons: 1,
              adults: 0,
              children: 0,
            }
          : room
      )
    );
  };

  const updateGuestCount = (id, type, delta) => {
    setTempRoomsList((prevRooms) =>
      prevRooms.map((room) => {
        if (room.id !== id || !room.selectedRoom) return room;
        const maxPersons = room.selectedRoom.capacity?.maxPersons || 1;
        const maxAdults = room.selectedRoom.capacity?.maxAdults || 0;
        const maxChildren = room.selectedRoom.capacity?.maxChildren || 0;
        const updatedRoom = {
          ...room,
          [type]: Math.max(
            type === "persons" ? 1 : 0,
            Math.min(
              room[type] + delta,
              type === "persons"
                ? maxPersons
                : type === "adults"
                ? maxAdults
                : maxChildren
            )
          ),
        };
        return updatedRoom;
      })
    );
  };

  const addRoom = () => {
    if (tempRoomsList.length < 2) {
      setTempRoomsList((prevRooms) => [
        ...prevRooms,
        {
          id: prevRooms.length + 1,
          selectedRoom: null,
          persons: 1,
          adults: 0,
          children: 0,
        },
      ]);
    }
  };

  const removeRoom = (id) => {
    const updatedTempRoomsList = tempRoomsList
      .filter((room) => room.id !== id)
      .map((room, index) => ({
        ...room,
        id: index + 1,
      }));
    setTempRoomsList(updatedTempRoomsList);
    dispatch(resetRooms());
    // Reassign room IDs in Redux
    const updatedSelectedRooms = selectedRooms
      .filter((room) => room.roomId !== id) // Remove the deleted room
      .map((room, index) => ({
        ...room,
        roomId: index + 1, // Reassign room IDs sequentially
      }));
    updatedSelectedRooms.forEach((room) => dispatch(setRoom(room)));
  };

  const confirmSelection = async () => {
    setLoading(true);
    setAvailabilityMessage("");
    const unselectedRooms = tempRoomsList.filter((room) => !room.selectedRoom);
    if (unselectedRooms.length > 0) {
      setLoading(false);
      setInvalidRooms(unselectedRooms.map((room) => room.id));
      return;
    }

    setInvalidRooms([]);
    const currentPlanMap = selectedRooms.reduce((acc, room) => {
      acc[room.roomId] = room.roomType;
      return acc;
    }, {});

    const requestData = {
      checkInDate: checkInDate.toISOString().split("T")[0],
      checkOutDate: checkOutDate.toISOString().split("T")[0],
      totalRooms: tempRoomsList.length,
      rooms: tempRoomsList.map((room) => {
        const plan = selectedPlan[room.id];
        const previousRoomType = currentPlanMap[room.id] || null;
        let roomPrice = room.roomPrice;
        if (
          previousRoomType &&
          previousRoomType !== room.selectedRoom.roomType
        ) {
          roomPrice = 0;
        }
        let extraAdultPrice = 0;
        if (plan && room.adults > 0) {
          extraAdultPrice =
            room.adults * (plan.price?.extraAdult?.withGst || 0);
        }
        return {
          roomId: room.id,
          roomType: room.selectedRoom?.roomType,
          persons: room.persons,
          adults: room.adults,
          children: room.children,
          extraAdultPrice,
          roomPrice,
        };
      }),
    };
    requestData.rooms.forEach((room) => {
      const plan = selectedPlan[room.roomId];
      if (plan) {
        const extraAdultPrice =
          room.adults * (plan.price?.extraAdult?.withGst || 0);
        dispatch(
          setRoom({
            roomId: room.roomId,
            extraAdultPrice,
            adults: room.adults,
            roomType: room.roomType,
            roomPrice: room.roomPrice,
          })
        );
      }
    });

    try {
      const response = await axios.post(
        "http://localhost:3000/rooms/check-availability",
        requestData
      );
      setLoading(false);

      if (
        response.data.message === "Rooms are available for the selected dates."
      ) {
        setIsRoomSelected(true);
        setRoomsList(tempRoomsList);
        setIsModalOpen(false);

        const roomsQuery = tempRoomsList
          .map(
            (room) =>
              `${room.selectedRoom.roomType}-${room.persons}-${room.adults}-${room.children}`
          )
          .join(",");

        navigate(
          `/book-now?checkIn=${requestData.checkInDate}&checkOut=${
            requestData.checkOutDate
          }&rooms=${encodeURIComponent(roomsQuery)}`
        );
        return;
      }

      let message = "Some rooms are unavailable.\n";
      if (response.data.unavailableDates?.length > 0) {
        message += "❌ Unavailable Rooms:\n";
        response.data.unavailableDates.forEach((room) => {
          message += `- ${room.roomType} on ${room.date}\n`;
        });
      }

      if (response.data.availableRooms?.length > 0) {
        message += "\n✅ Available Alternatives:\n";
        response.data.availableRooms.forEach((room) => {
          message += `- ${room.roomType} (${
            room.availableRooms
          } available on ${new Date(room.date).toDateString()})\n`;
        });
      }

      setAvailabilityMessage(message);
    } catch (error) {
      setLoading(false);
      let message =
        error.response?.data?.error ||
        "Error checking availability. Please try again.";

      if (error.response?.data?.unavailableDates?.length > 0) {
        message += "\n❌ Unavailable Rooms:\n";
        error.response.data.unavailableDates.forEach((room) => {
          message += `- ${room.roomType} on ${room.date}\n`;
        });
      }

      if (error.response?.data?.availableRooms?.length > 0) {
        message += "\n✅ Available Alternatives:\n";
        error.response.data.availableRooms.forEach((room) => {
          message += `- ${room.roomType} (${
            room.availableRooms
          } available on ${new Date(room.date).toDateString()})\n`;
        });
      }
      setAvailabilityMessage(message);
    }
  };

  return (
    <div className="flex flex-col items-center mt-8 gap-4">
      {/* <div className="relative bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4 w-full max-w-6xl"> */}
      <div
        className={`relative bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4 w-full max-w-6xl ${
          disableControls ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        <div className="w-full md:w-1/4">
          <label className="block text-gray-700 text-sm font-semibold mb-1">
            Check-in
          </label>
          <DatePicker
            selected={checkInDate}
            // onChange={setCheckInDate}
            onChange={disableControls ? undefined : setCheckInDate}
            minDate={new Date()}
            dateFormat="dd MMMM yyyy"
            className="w-full border p-3 text-gray-700 text-sm rounded-md text-center"
            disabled={disableControls}
          />
        </div>

        <div className="w-full md:w-1/4">
          <label className="block text-gray-700 text-sm font-semibold mb-1">
            Check-out
          </label>
          <DatePicker
            selected={checkOutDate}
            // onChange={setCheckOutDate}
            onChange={disableControls ? undefined : setCheckOutDate}
            minDate={new Date(checkInDate.getTime() + 24 * 60 * 60 * 1000)}
            dateFormat="dd MMMM yyyy"
            className="w-full border p-3 text-gray-700 text-sm rounded-md text-center"
            disabled={disableControls}
          />
        </div>

        <div className="w-full md:w-1/4 flex flex-col">
          <label className="block text-gray-700 text-sm font-semibold mb-1">
            Guests & Rooms
          </label>
          {/* <button
            onClick={openModal}
            className="w-full border p-3 text-gray-700 text-sm rounded-md"
          > */}
          <button
            onClick={disableControls ? undefined : openModal}
            className={`w-full border p-3 text-gray-700 text-sm rounded-md ${
              disableControls ? "cursor-not-allowed bg-gray-100" : ""
            }`}
            disabled={disableControls}
          >
            {isRoomsSelected
              ? `${roomsList.length} Room(s), ${roomsList.reduce(
                  (total, room) =>
                    total + room.persons + room.adults + room.children,
                  0
                )} Guest(s)`
              : "Select Rooms & Guests"}
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white p-6 rounded-lg shadow-xl w-96 max-h-[80vh] overflow-y-auto relative">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 text-center">
              Select Rooms & Guests
            </h2>

            {tempRoomsList.map((room, index) => (
              <div
                key={room.id}
                className="mb-6 p-4 border rounded-lg shadow-sm"
              >
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  Room {index + 1}
                </h3>
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Room Type
                </label>
                <select
                  className={`w-full border p-3 text-gray-700 text-sm rounded-md mb-4 focus:ring-2 focus:outline-none
          ${
            invalidRooms.includes(room.id)
              ? "border-red-500"
              : "focus:ring-yellow-400"
          }`}
                  value={room.selectedRoom?.roomType || ""}
                  onChange={(event) => handleRoomChange(room.id, event)}
                >
                  <option value="">Select Room</option>
                  {roomsData.map((r) => (
                    <option key={r.roomType} value={r.roomType}>
                      {r.roomType}
                    </option>
                  ))}
                </select>
                {invalidRooms.includes(room.id) && (
                  <p
                    className="text-red-500"
                    style={{ marginTop: "-15px", fontSize: "15px" }}
                  >
                    Please select a room type
                  </p>
                )}

                {["persons", "adults", "children"].map((type, index) => (
                  <div
                    key={index}
                    className="mb-3 flex items-center justify-between"
                  >
                    <label className="text-gray-800 text-sm font-semibold">
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </label>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateGuestCount(room.id, type, -1)}
                        className="w-8 h-8 flex items-center justify-center bg-gray-300 hover:bg-gray-400 text-gray-900 rounded-md transition disabled:opacity-50"
                        disabled={room[type] <= (type === "persons" ? 1 : 0)}
                      >
                        −
                      </button>
                      <span className="text-lg font-medium text-gray-900">
                        {room[type]}
                      </span>
                      <button
                        onClick={() => updateGuestCount(room.id, type, 1)}
                        className="w-8 h-8 flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-white rounded-md transition"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}

                {tempRoomsList.length > 1 && (
                  <button
                    onClick={() => removeRoom(room.id)}
                    className="text-red-500 text-sm mt-2 underline hover:text-red-700 transition"
                  >
                    Remove Room
                  </button>
                )}
              </div>
            ))}

            <button
              onClick={addRoom}
              className={`w-full p-3 rounded-md mb-4 transition ${
                tempRoomsList.length >= 2
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
              disabled={tempRoomsList.length >= 2}
            >
              + Add Room
            </button>

            {tempRoomsList.length === 2 && (
              <p className="text-red-500 text-sm text-center mt-2">
                If you need more than 2 rooms, contact <br />
                📞 +91 63669 30172 <br />
                📧 plumeriaresort92@gmail.com
              </p>
            )}

            <div className="flex justify-between mt-4">
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setAvailabilityMessage(""); // Clear error/success message when closing the modal
                }}
                className="w-1/2 bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-md transition"
              >
                Close
              </button>

              <button
                onClick={confirmSelection}
                className="w-1/2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md transition ml-3"
              >
                {loading ? "Checking..." : "Confirm"}
              </button>
            </div>

            {availabilityMessage && (
              <div className="text-center text-red-500 mt-3 whitespace-pre-line">
                {availabilityMessage}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NewBookingSection;
