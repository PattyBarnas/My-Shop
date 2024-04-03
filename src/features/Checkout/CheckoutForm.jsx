import React from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

function CheckoutForm(props) {
  return (
    <form>
      <PaymentElement />
      <button>submit</button>
    </form>
  );
}

export default CheckoutForm;
