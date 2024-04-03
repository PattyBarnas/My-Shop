import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
// PUBLISHABLE KEY: pk_test_51MdcBKBuEeRvR0rvXmX46ydoMD4IJ6xqUKkXMyGw1BxM1WyQ3DbkO0mcHQwf2ode6FxPjspD1Xw52sDK3YAr9Xmy00EHZV376N
// SECRET KEY:sk_test_51MdcBKBuEeRvR0rvkVnjSCdxj5UjccuKsFjeKr5bOAbcAG5eR6A64hBMCSEY7VWh7TC1Vp69eaTRwrABrw70Ox1K00QMLVFFc4

const stripePromise = loadStripe(
  "pk_test_51MdcBKBuEeRvR0rvXmX46ydoMD4IJ6xqUKkXMyGw1BxM1WyQ3DbkO0mcHQwf2ode6FxPjspD1Xw52sDK3YAr9Xmy00EHZV376N"
);

const secret =
  "sk_test_51MdcBKBuEeRvR0rvkVnjSCdxj5UjccuKsFjeKr5bOAbcAG5eR6A64hBMCSEY7VWh7TC1Vp69eaTRwrABrw70Ox1K00QMLVFFc4";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState();
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:8080/payment/secret");

        const data = await response.json();
        setClientSecret(data.clientSecret);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  if (loading && !clientSecret) return;

  // Render the form using the clientSecret

  const options = {
    clientSecret: `${clientSecret}`,
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};

export default Checkout;
