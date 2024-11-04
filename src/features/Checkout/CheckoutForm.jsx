import React from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 2rem;
  background-color: #e9ecef;
  width: 30%;
  height: 60rem;
  padding: 2.4rem;
  margin: 1.2rem auto;
  border-radius: 5px;
  box-shadow: 2px 16px 24px rgba(0, 0, 0, 0.2);
`;
const Button = styled.button`
  display: block;
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1.2rem 2.4rem;
  margin: 0 auto;
  font-weight: 500;
  border-radius: 10px;
  font-size: 1.4rem;
  text-transform: uppercase;
  cursor: pointer;
  /*  */

  border: 2px solid rgba(0, 0, 0, 0.4);
  color: #fff;

  background-color: #228be6;
  cursor: pointer;
  letter-spacing: 1.2px;
`;

const H4 = styled.h4`
  font-size: 2.8rem;
  letter-spacing: 1.2px;
  text-align: center;
  position: absolute;
  top: 10%;
  left: 50%;
  font-weight: 500;
  transform: translate(-50%, -50%);
`;

function CheckoutForm(props) {
  const stripe = useStripe();
  const elements = useElements();

  async function handleCheckoutSubmit(e) {
    e.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "https://example.com/order/123/complete",
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  }
  return (
    <Form onSubmit={handleCheckoutSubmit}>
      <H4>Complete your payment.</H4>
      <PaymentElement />
      <Button disabled={!stripe}>submit</Button>
    </Form>
  );
}

export default CheckoutForm;
