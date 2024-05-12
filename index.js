require("dotenv").config();
const express=require('express')
const cors=require('cors')
const cookieParser=require('cookie-parser')
 const app=express()


 
 const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
console.log(process.env.STRIPE_SECRET_KEY)

 app.use(express.json())
 app.use(cors({origin:'*'})) 
 app.use(cookieParser())


 app.get('/',(req,res)=>{
    res.status(200).json("welcome")
 })

 app.post('/payment',async (req,res) => {
  try {
      const {Amount} = req.body;
      console.log(Amount)
      const paymentIntent = await stripe.paymentIntents.create({
          amount: Amount,
          currency: 'INR',
          payment_method_types:['card']
        });
        console.log(paymentIntent)
       const clientSecret = paymentIntent.client_secret;
       res.json({
          clientSecret,
       })

  }catch(e){
      console.log(e)
  }
})

 
 app.listen(8000,(error)=>{
if(error){
    console.log(error)
}
 })
