import React from 'react';

const Payment = () => {
  return (
    <div>
      <h1>Payment</h1>
      <form>
        <label for="amount">Amount:</label>
        <input type="number" id="amount" />
        <br />
        <label for="payment-method">Payment Method:</label>
        <select id="payment-method">
          <option value="online-banking">Online Banking</option>
          <option value="credit-card">Credit Card</option>
          <option value="debit-card">Debit Card</option>
        </select>
        <br />
        <button type="submit">Pay</button>
      </form>
    </div>
  );
};

export default Payment;