const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51JxULNSHh0F7a44UN0ZyMkYhIdhSYiKMAzFBLpBNe2GkRMhhPv8WhqyCwBfV1Q8SgODG3cQHKoGIvj5ImX1Tw0lw00eiKosh8P"
);
// - API

// - App config
const app = express();
// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API Routes
app.get("/", (request, response)=>response.status(200).send("hello world"));
app.post("/payments/create", async (request, response)=>{
  const total = request.query.total;
  console.log("Payments request recieved!!! for this amount >>>", total)
  const paymentIntent=await stripe.paymentIntents.create({
    amount:total, //subunits of the currency
    currency: 'usd',
  })

  //OK - Created
  response.status(201).send({
    clientSecret:paymentIntent.client_secret,
    
  })
})
// - Listen command
exports.api = functions.https.onRequest(app);
