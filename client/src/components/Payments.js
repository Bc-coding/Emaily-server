import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { Button } from "@carbon/react";
import { connect } from "react-redux";
import * as actions from "../actions";

function Payments(props) {
  return (
    <StripeCheckout
      name="Emaily"
      description="$5 for 5 email credits"
      amount={500} // amount in US cents
      token={(token) => props.handleToken(token)} // token sent back by Stripe
      stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
    >
      <Button>Pay with card</Button>
    </StripeCheckout>
  );
}

export default connect(null, actions)(Payments);
