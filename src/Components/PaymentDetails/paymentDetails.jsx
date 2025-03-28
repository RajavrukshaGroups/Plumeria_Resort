import { useState, useEffect } from "react";
import axios from "axios";

const Payment = () => {
  const [amount, setAmount] = useState(500); // Default amount

  // ✅ Load Razorpay script on component mount
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/payments/create-order",
        { amount, currency: "INR" }
      );

      const options = {
        key: "rzp_test_yb7RLsIfkH5SIq", // ✅ Replace with your Razorpay Key ID
        amount: data.amount,
        currency: data.currency,
        name: "Plumeria Resort",
        description: "Booking Payment",
        order_id: data.id,
        handler: async (response) => {
          const verifyRes = await axios.post(
            "http://localhost:3000/payments/verify-payment",
            {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }
          );

          if (verifyRes.data.success) {
            alert("✅ Payment Successful!");
          } else {
            alert("❌ Payment Verification Failed!");
          }
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Payment Error:", error);
      alert("❌ Error processing payment");
    }
  };

  return (
    <div>
      <h2>Complete Your Payment</h2>
      <p>Amount: ₹{amount}</p>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default Payment;
