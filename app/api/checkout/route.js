import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST() {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],

      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Sakinah Care Collective Gift Box",
            },
            unit_amount: 4500,
          },
          quantity: 1,
        },
      ],

      mode: "payment",

      shipping_address_collection: {
        allowed_countries: ["US"],
      },

      success_url:
        "https://sakinahcarecollective.com/success",

      cancel_url:
        "https://sakinahcarecollective.com/",
    });

    return Response.json({ url: session.url });

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}