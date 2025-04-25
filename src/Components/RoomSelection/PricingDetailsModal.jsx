import React, { useState, useEffect } from "react";
import axios from "axios";

const PricingDetailsModal = ({ planName, onClose }) => {
  console.log(planName, "thissssssssssssssssss");

  const [roomsData, setRoomsData] = useState([]);
  const [showMenu, setShowMenu] = useState(false);

  console.log(roomsData, "this is rooms data in pricing modal");

  useEffect(() => {
    const fetchRoomsData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/rooms");
        // const response = await axios.get("https://server.plumeriaresort.in/rooms");
        setRoomsData(response.data.data);
      } catch (err) {
        console.error("Error fetching rooms data", err);
      }
    };
    fetchRoomsData();
  }, []);

  if (!roomsData.length) return null;

  // Get menu details for the selected plan
  // const menuDetails = roomsData
  //   .map((room) => room.plans[planName.toLowerCase()]?.menuDetails)
  //   .find((details) => details);
  const menuDetails = roomsData
    .map(
      (room) =>
        room.plans.find(
          (plan) => plan.name.toLowerCase() === planName.toLowerCase()
        )?.menuDetails
    )
    .find((details) => details);
  console.log(menuDetails, "this is menu details in pricing modal");

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[9999]">
      <div className="bg-white rounded-lg shadow-lg w-96 max-h-[80vh] overflow-y-auto">
        {/* Sticky Header with Plan Name */}
        <div className="sticky top-0 bg-white z-20 p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-bold text-[#a77a3a] capitalize">
            {planName} Plan Pricing
          </h2>
          <button onClick={onClose} className="text-red-500 text-lg font-bold">
            ✕
          </button>
        </div>

        {/* Pricing Table */}
        <div className="overflow-x-auto p-4">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-[#f8f1e3]">
                <th className="border p-2 text-left">Room Type</th>
                <th className="border p-2 text-left">2 Persons</th>
                <th className="border p-2 text-left">Extra Adult</th>
              </tr>
            </thead>
            <tbody>
              {/* {roomsData.map((room) => {
                const planData = room.plans[planName.toLowerCase()];
                console.log("plan data price", planData);
                if (!planData) return null;

                return (
                  <tr key={room._id}>
                    <td className="border p-2 font-bold">{room.roomType}</td>
                    <td className="border p-2">
                      ₹ {planData.price.twoGuests.withGst}
                    </td>
                    <td className="border p-2">
                      ₹ {planData.price.extraAdult.withGst}
                    </td>
                  </tr>
                );
              })} */}
              {roomsData.map((room) => {
                const planData = room.plans.find(
                  (plan) => plan.name.toLowerCase() === planName.toLowerCase()
                );
                if (!planData) return null;

                return (
                  <tr key={room._id}>
                    <td className="border p-2 font-bold">{room.roomType}</td>
                    <td className="border p-2">
                      ₹ {planData.price.twoGuests.withGst}
                    </td>
                    <td className="border p-2">
                      ₹ {planData.price.extraAdult.withGst}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <p className="text-red-500 text-center text-sm mt-2 p-2">
          * An extra adult is anyone above 5 years of age.
        </p>

        {/* Show View Menu Details Button if menuDetails exist */}
        {menuDetails && planName.toLowerCase() !== "lite" && (
          <div className="mt-4 text-center p-4">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="w-full bg-transparent text-[#a77a3a] border border-[#a77a3a] py-2 px-4 rounded text-xs hover:bg-[#a77a3a] hover:text-white transition-all duration-300"
            >
              {showMenu ? "Hide Menu Details" : "View Menu Details"}
            </button>
          </div>
        )}

        {/* Show Menu Details */}
        {showMenu && menuDetails && (
          <div className="mt-4 p-4 bg-[#f8f1e3] max-h-60 overflow-y-auto">
            <h3 className="text-lg font-semibold text-[#a77a3a] mb-2">
              Menu Details
            </h3>

            {menuDetails.welcomeDrinks && (
              <div className="mb-2">
                <h4 className="font-semibold text-gray-700">Welcome Drinks</h4>
                <ul className="list-disc ml-5 text-sm text-gray-600">
                  {menuDetails.welcomeDrinks.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {menuDetails.breakFast && (
              <div className="mb-2">
                <h4 className="font-semibold text-gray-700">Breakfast</h4>
                <ul className="list-disc ml-5 text-sm text-gray-600">
                  {menuDetails.breakFast.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {planName.toLowerCase() !== "plus" && menuDetails.dinner && (
              <div className="mb-2">
                <h4 className="font-semibold text-gray-700">Dinner</h4>
                <ul className="list-disc ml-5 text-sm text-gray-600">
                  {menuDetails.dinner.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {planName.toLowerCase() !== "plus" && menuDetails.snacks && (
              <div>
                <h4 className="font-semibold text-gray-700">Snacks</h4>
                <ul className="list-disc ml-5 text-sm text-gray-600">
                  {menuDetails.snacks.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingDetailsModal;
