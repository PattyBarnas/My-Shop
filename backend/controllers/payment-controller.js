const stripe = require("stripe")(
  "sk_test_51MdcBKBuEeRvR0rvkVnjSCdxj5UjccuKsFjeKr5bOAbcAG5eR6A64hBMCSEY7VWh7TC1Vp69eaTRwrABrw70Ox1K00QMLVFFc4"
);

const getPaymentIntent = async (req, res, next) => {
  try {
    const intent = await stripe.paymentIntents.create({
      amount: 100,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });
    res.json({ clientSecret: intent.client_secret });
  } catch (error) {
    console.error(error);
  }
};

exports.getPaymentIntent = getPaymentIntent;
