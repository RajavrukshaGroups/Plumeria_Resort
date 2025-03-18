import React, { useEffect } from "react";

const RoomModal = ({ rooms, setRooms, setIsModalOpen }) => {
  useEffect(() => {
    console.log("Updated Rooms:", rooms);
  }, [rooms]);

  const handleRoomTypeChange = (id, type) => {
    setRooms((prevRooms) =>
      prevRooms.map((room) =>
        room.id === id
          ? {
              ...room,
              type,
              adults:
                type === "Villa Room" ? Math.min(1, room.adults) : room.adults,
            } // Ensure max 1 adult for Villa
          : room
      )
    );
  };

  const handleChange = (id, field, operation) => {
    setRooms((prevRooms) => {
      const updatedRooms = prevRooms.map((room) => {
        if (room.id === id) {
          let newValue = room[field] + operation;
          const maxAdults = room.type === "Villa Room" ? 1 : 5; // Restrict Villa Room to max 1 adult

          if (field === "persons")
            newValue = Math.max(1, Math.min(2, newValue));
          if (field === "adults")
            newValue = Math.max(0, Math.min(maxAdults, newValue));
          if (field === "children")
            newValue = Math.max(0, Math.min(5, newValue));

          return { ...room, [field]: newValue };
        }
        return room;
      });

      return [...updatedRooms]; // Ensure a new reference
    });
  };

  const addRoom = () => {
    if (rooms.length < 3) {
      setRooms((prevRooms) => [
        ...prevRooms,
        {
          id: prevRooms.length + 1,
          persons: 1,
          adults: 0,
          children: 0,
          type: "Deluxe Room", // Default to Deluxe Room
        },
      ]);
    }
  };

  const removeRoom = (id) => {
    setRooms((prevRooms) =>
      prevRooms
        .filter((room) => room.id !== id)
        .map((room, index) => ({ ...room, id: index + 1 }))
    );
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md relative flex flex-col max-h-[80vh]">
        <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">
          Select Rooms & Guests
        </h3>

        <div
          className="overflow-y-auto flex-grow pr-2"
          style={{ maxHeight: "50vh" }}
        >
          {rooms.map((room) => (
            <div key={room.id} className="border-b pb-4 mb-4 relative">
              <h4 className="text-md font-semibold text-gray-800">
                Room {room.id}
              </h4>

              {rooms.length > 1 && (
                <button
                  onClick={() => removeRoom(room.id)}
                  className="absolute top-0 right-0 text-red-500 text-lg hover:text-red-700"
                >
                  ✖
                </button>
              )}

              {/* Room Type Dropdown */}
              <div className="mt-3">
                <label className="text-gray-700 font-medium">Room Type</label>
                <div className="relative w-full">
                  <select
                    className="w-full border border-gray-300 bg-white/80 backdrop-blur-lg py-3 px-4 
               rounded-lg text-gray-900 text-[16px] font-semibold appearance-none shadow-lg 
               focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 
               hover:border-yellow-500 transition-all duration-300 cursor-pointer 
               pr-12"
                    value={room.type}
                    onChange={(e) =>
                      handleRoomTypeChange(room.id, e.target.value)
                    }
                  >
                    <option value="Deluxe Room">Deluxe Room</option>
                    <option value="Villa Room">Villa Room</option>
                  </select>

                  {/* Custom dropdown arrow */}
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-600 transition-transform duration-300 transform"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Persons Selection */}
              <div className="flex justify-between items-center mt-3">
                <span className="text-gray-700">Persons</span>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleChange(room.id, "persons", -1)}
                    className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50"
                    disabled={room.persons === 1}
                  >
                    -
                  </button>
                  <span className="w-6 text-center font-semibold text-black">
                    {room.persons}
                  </span>
                  <button
                    onClick={() => handleChange(room.id, "persons", 1)}
                    className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50"
                    disabled={room.persons === 2}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Extra Adults Selection */}
              <div className="flex justify-between items-center mt-3">
                <span className="text-gray-700">Extra Adult (5+ years)</span>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleChange(room.id, "adults", -1)}
                    className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50"
                    disabled={room.adults === 0}
                  >
                    -
                  </button>
                  <span className="w-6 text-center font-semibold text-black">
                    {room.adults}
                  </span>
                  <button
                    onClick={() => handleChange(room.id, "adults", 1)}
                    className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50"
                    disabled={
                      room.adults >= (room.type === "Villa Room" ? 1 : 5)
                    }
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Children Selection */}
              <div className="flex justify-between items-center mt-3">
                <span className="text-gray-700">Children (0 - 5yrs)</span>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleChange(room.id, "children", -1)}
                    className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50"
                    disabled={room.children === 0}
                  >
                    -
                  </button>
                  <span className="w-6 text-center font-semibold text-black">
                    {room.children}
                  </span>
                  <button
                    onClick={() => handleChange(room.id, "children", 1)}
                    className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50"
                    disabled={room.children === 5}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}

          {rooms.length === 3 && (
            <p className="text-red-600 text-sm font-medium mt-2 border-t pt-2">
              Need 4 rooms or more? Contact{" "}
              <a
                href="mailto:plumeriaresort92@gmail.com"
                className="underline text-blue-600 hover:text-blue-500"
              >
                plumeriaresort92@gmail.com
              </a>
            </p>
          )}
        </div>

        <div className="mt-4">
          {rooms.length < 3 && (
            <button
              onClick={addRoom}
              className="text-sm font-semibold text-yellow-600 hover:text-yellow-500"
            >
              + ADD MORE ROOMS
            </button>
          )}

          <button
            onClick={() => setIsModalOpen(false)}
            className="w-full mt-4 bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-all"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomModal;
