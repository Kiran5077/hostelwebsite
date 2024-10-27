import React, { useState } from 'react';
import './Payment.css';
import { toast } from 'react-toastify';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleCardDetailsChange = (event) => {
    const { name, value } = event.target;
    setCardDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = () => 
    toast.success("payment successfully");

  

  return (
    <div className="payment-page">
      <h2>Complete Your Payment</h2>
      <form  className="payment-form">
        <label>
          Payment Method:
          <select value={paymentMethod} onChange={handlePaymentMethodChange}>
            <option value="cash">Cash</option>
            <option value="debitCard">Debit Card</option>
          </select>
        </label>

        {paymentMethod === 'debitCard' && (
          <div className="card-details">
            <label>
              Card Number:
              <input
                type="text"
                name="cardNumber"
                value={cardDetails.cardNumber}
                onChange={handleCardDetailsChange}
                maxLength="16"
                placeholder="1234 5678 9012 3456"
                required
              />
            </label>
            <label>
              Expiry Date:
              <input
                type="text"
                name="expiry"
                value={cardDetails.expiry}
                onChange={handleCardDetailsChange}
                placeholder="MM/YY"
                required
              />
            </label>
            <label>
              CVV:
              <input
                type="password"
                name="cvv"
                value={cardDetails.cvv}
                onChange={handleCardDetailsChange}
                maxLength="3"
                placeholder="123"
                required
              />
            </label>
          </div>
        )}

        <button type="submit" className="pay-button" onClick={handleSubmit}>
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Payment;