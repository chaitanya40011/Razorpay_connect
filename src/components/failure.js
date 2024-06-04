import React from "react";
import { useLocation } from "react-router-dom";

const Failure = () => {
  const location = useLocation();
  const error = new URLSearchParams(location.search).get("error_description");

  return (
    <div>
      <h1>Payment Failed</h1>
      <p>Oops! Your payment was unsuccessful.</p>
      <p>Error Description: {error}</p>
    </div>
  );
};

export default Failure;
