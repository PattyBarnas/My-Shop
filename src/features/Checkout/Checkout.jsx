import React from "react";
// import { Elements, PaymentElement } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";

// const stripePromise = loadStripe(
//   `pk_test_51MdcBKBuEeRvR0rvXmX46ydoMD4IJ6xqUKkXMyGw1BxM1WyQ3DbkO0mcHQwf2ode6FxPjspD1Xw52sDK3YAr9Xmy00EHZV376N`
// );

// console.log(stripePromise);

const Checkout = () => {
  // const options = {
  //   clientSecret: `{{sk_test_51MdcBKBuEeRvR0rvkVnjSCdxj5UjccuKsFjeKr5bOAbcAG5eR6A64hBMCSEY7VWh7TC1Vp69eaTRwrABrw70Ox1K00QMLVFFc4}}`,
  // };
  return (
    // <Elements stripe={stripePromise} options={options}>
    <form>
      {/* <PaymentElement /> */}
      <button>submit</button>
    </form>
    // </Elements>
  );
};

export default Checkout;
