"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const stripe_1 = __importDefault(require("stripe"));
const typescript_rest_1 = require("typescript-rest");
const app = (0, express_1.default)();
require("dotenv").config();
/// Execute stripe paymentintents
const stripe = new stripe_1.default(`${process.env.STRIPE_SECRET_KEY}`, { apiVersion: "2020-08-27" });
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.post("/payment", async (req, res) => {
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
    }
    catch (error) {
        console.log("Error", error);
        res.json({
            message: "Payment failed",
            success: false,
        });
    }
});
typescript_rest_1.Server.buildServices(app);
let port = parseInt(process.env.PORT || "");
if (isNaN(port) || port === 0) {
    port = 4000;
}
app.listen(port, "0.0.0.0", () => {
    console.log(`🚀 Server Started at PORT: ${port}`);
});
