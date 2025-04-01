import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import YourStay from "../YourStay/YourStay";
import "./payment.css";

const Payment = () => {
  const [amount, setAmount] = useState(500); // Default amount
  const selectedPlan = useSelector((state) => state.booking.selectedPlan);

  // ✅ Load Razorpay script on component mount
  //   useEffect(() => {
  //     const script = document.createElement("script");
  //     script.src = "https://checkout.razorpay.com/v1/checkout.js";
  //     script.async = true;
  //     document.body.appendChild(script);
  //   }, []);

  //   const handlePayment = async () => {
  //     try {
  //       const { data } = await axios.post(
  //         "http://localhost:3000/payments/create-order",
  //         { amount, currency: "INR" }
  //       );

  //       const options = {
  //         key: "rzp_test_yb7RLsIfkH5SIq", // ✅ Replace with your Razorpay Key ID
  //         amount: data.amount,
  //         currency: data.currency,
  //         name: "Plumeria Resort",
  //         description: "Booking Payment",
  //         order_id: data.id,
  //         handler: async (response) => {
  //           const verifyRes = await axios.post(
  //             "http://localhost:3000/payments/verify-payment",
  //             {
  //               razorpay_order_id: response.razorpay_order_id,
  //               razorpay_payment_id: response.razorpay_payment_id,
  //               razorpay_signature: response.razorpay_signature,
  //             }
  //           );

  //           if (verifyRes.data.success) {
  //             alert("✅ Payment Successful!");
  //           } else {
  //             alert("❌ Payment Verification Failed!");
  //           }
  //         },
  //         prefill: {
  //           name: "Customer Name",
  //           email: "customer@example.com",
  //           contact: "9999999999",
  //         },
  //         theme: {
  //           color: "#A77A3A",
  //           // backdrop_color: "#f5f5f5", // Change the background color
  //           hide_topbar: false, // Hide the top bar (true/false)
  //         },
  //       };

  //       const razorpay = new window.Razorpay(options);
  //       razorpay.open();
  //     } catch (error) {
  //       console.error("Payment Error:", error);
  //       alert("❌ Error processing payment");
  //     }
  //   };

  return (
    <div className="your-stay-price">
      {/* <p>Amount: ₹{amount}</p>
      <button onClick={handlePayment}>Pay Now</button> */}
      <YourStay selectedPlan={selectedPlan} />
    </div>
  );
};

export default Payment;
