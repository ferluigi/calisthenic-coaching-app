
import express, {Request, Response} from "express";
import bodyParser from "body-parser";
import cors from "cors";
import Stripe from 'stripe';

const app = express();

require("dotenv").config();

/// Execute stripe paymentintents

const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`, { apiVersion: "2020-08-27" });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.post("/payment", async (req: Request, res: Response) => {
  let { price, id } = req.body;

 const request = req.body.data;

  console.log(req.body);

  try {
    const payment = await stripe.paymentIntents.create({
      amount: price * 100,
      currency: "EUR",
      description: "Spatula company",
      payment_method: id,
      confirm: true,
    });
    console.log("Payment", payment);
    res.json({
      message: "Payment successful",
      success: true,
    });
  } catch (error) {
    console.log("Error", error);
    res.json({
      message: "Payment failed",
      success: false,
    });
  }
});

app.listen(process.env.PORT || 4000, () => {
  console.log("Sever is listening on port 4000");
});


