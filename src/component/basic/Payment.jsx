// src/Payment.jsx
import React from 'react';


const Payment = ({ bookingDetails }) => {
  const handlePayment = (e) => {
    e.preventDefault();
    alert('Payment Successful!');
  };

  return (
    <div className="payment-container">
      <h1>Payment</h1>
      <p>Room Type: {bookingDetails.roomType}</p>
      <p>Check-in: {bookingDetails.checkInDate}</p>
      <p>Check-out: {bookingDetails.checkOutDate}</p>
      <form onSubmit={handlePayment}>
        <label>
          Card Number:
          <input type="text" required />
        </label>
        <label>
          Expiry Date:
          <input type="text" required />
        </label>
        <label>
          CVV:
          <input type="text" required />
        </label>
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default Payment;