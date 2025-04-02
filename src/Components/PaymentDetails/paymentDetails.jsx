import { useSelector } from "react-redux";
import YourStay from "../YourStay/YourStay";
import "./payment.css";

const Payment = ({ offer }) => {
  const selectedPlan = useSelector((state) => state.booking.selectedPlan);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col md:flex-row gap-6 p-6 rounded-lg w-full max-w-4xl justify-center">
        <YourStay selectedPlan={selectedPlan} offer={offer} />

        {offer && (
          <div className="w-full md:w-1/3 flex flex-col gap-4 cancellation-checkin">
            {/* Cancellation Policy */}
            <div className="cancellation-policy border border-[#a77a3a] p-4 rounded-lg shadow-md">
              <h3 className="text-base font-bold text-gray-800 mb-2">
                Cancellation Policy
              </h3>
              <ul className="text-gray-600 text-sm list-disc pl-4">
                <li>
                  50% payment has to be made as an advance for the confirmation
                  of booking.
                </li>
                <li>Full payment is required at the time of check-in.</li>
                <li>
                  No refunds will be issued for no-shows or early check-out.
                </li>
                {/* <li>
                  Free cancellation by <strong>2PM - 1 day prior</strong> to
                  arrival to avoid a penalty of 1 night charge plus any
                  applicable taxes & fees.
                </li> */}
              </ul>
            </div>

            {/* Check-In & Check-Out Policy */}
            <div className="checkin-policy border border-[#a77a3a] p-4 rounded-lg shadow-md">
              <h3 className="text-base font-bold text-gray-800 mb-2">
                Check-In & Check-Out Policy
              </h3>
              <ul className="text-gray-600 text-sm list-disc pl-4">
                <li>
                  Check-in time is <strong>1 PM</strong> and check-out time is{" "}
                  <strong>11 AM</strong>.
                </li>
                <li>
                  Early check-in or late check-out is subject to availability
                  and may incur additional charges.
                </li>
                <li>
                  All extras to be cleared at the resort before departure.
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;
