import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import './Pago.css';
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe("pk_test_51KrMkXIQ6ubFWesuR9VJAAYuUiMeIZkNDVaZ32oLoVcju0S09cOEdz3Dbb5gHH4CAKDtZ1TiAmxiwelTJQabFQH500ptnshmbA");
let amount = '';

function Pago(){
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:3001/stripe/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };
  if (localStorage.getItem('login')) {
        
  } else {
      return(
      <>
      <h3>No tienes acceso</h3>
      <p>Por favor logeate o registrate si todavia no lo has hecho.</p>
      <img src='https://i.etsystatic.com/20369550/r/il/744c62/1948711877/il_fullxfull.1948711877_sq79.jpg' alt='you shall not pass' class='accessDenied'/>
  </>
      )}
  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}


export default Pago;