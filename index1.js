require("dotenv").config();

const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());
app.get("/",(req,res)=>{
    res.send("hello wolrd")
})

app.post("/payment", async (req, res) => {
  try {
    console.log(req.body);
    // const { amount } = req.body;
    // console.log(amount, "backendd****");
    // const paymentIntent = await stripe.paymentIntents.create({
    //   amount: amount,
    //   currency: "INR",
    //   payment_method_types: ["card"],
    //   // receipt_email:req.body.email
    // });
    // const clientSecret = paymentIntent.clientSecret;
    // res.json({
    //   clientSecret,
    // });
  } catch (error) {
    // console.log(error);
    // res.status(500).json({ error: "couldn't create" });
  }
});

app.listen(port, () => {
  console.log("listening to port", port);
});
