import React from "react";
import success from "../../images/giphy.gif";

const PlaceOrder = () => {
  return (
    <div>
      <img src={success} alt="" />
      <h2 style={{ textAlign: "center" }}>Order placed successfully</h2>
    </div>
  );
};

export default PlaceOrder;
