import React, { Component } from 'react';
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./styles.css";

toast.configure();

function App() {
  const [product] = React.useState({
    name: "Vapay",
    price: 64998.67,
    description: "Ayim Valentine Logo"
  });

  async function handleToken(token, addresses) {
    const response = await axios.post(
      "https://ry7v05l6on.sse.codesandbox.io/checkout",
      { token, product }
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }

  return (
    <div className="container">
      <div className="product">
        <h1>{product.name}</h1>
        
      </div>
      <StripeCheckout
        
        stripeKey="pk_test_EYp9l8uaDoMdlUheypL7QUfa00uhHZdKUR"
        token={handleToken}
        amount={product.price * 100}
        name=""
        billingAddress
        shippingAddress
      />
     
    </div>
  );
}
 
export default App;
