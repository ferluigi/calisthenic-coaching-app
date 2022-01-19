
import express, {Request, Response} from "express";
import bodyParser from "body-parser";
import cors from "cors";
import Stripe from 'stripe';
import { Server } from "typescript-rest";


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

Server.buildServices(app);


let port = parseInt(process.env.PORT || "");
if (isNaN(port) || port === 0) {
  port = 4000;
}


app.listen(port, "0.0.0.0", () => {
  console.log(`🚀 Server Started at PORT: ${port}`);
});


