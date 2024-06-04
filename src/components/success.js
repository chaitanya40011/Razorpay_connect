import React from "react";
import { useLocation } from "react-router-dom";
import { Checkmark } from "react-checkmark";
import {
  Container,
  Title,
  Spacer,
  Title2,
  Title3,
  CardWrapper,
  CardImage,
  CardTextWrapper,
  CardTextTitle,
} from "./styled_css";

const Success = () => {
  const location = useLocation();
  // const { itemName, price, description } = location.state;

  const params = new URLSearchParams(location.search);
  const itemName = params.get("itemName");
  const price = params.get("price");
  const description = params.get("description");

  const store = [itemName, price, description];
  console.log(store);

  const paymentId = new URLSearchParams(location.search).get("payment_id");

  return (
    <div>
      <Container>
        <Title>Payment Successful!</Title>
        <Checkmark size="xLarge" />
        <Spacer />
        <Title2>Payment ID: {paymentId}</Title2>
        <Spacer />

        <CardWrapper>
          <CardImage />
          <CardTextWrapper>
            <CardTextTitle>Your Order Details</CardTextTitle>
            <Title3>Item Name: {itemName}</Title3>
            <Title3>Description: {description}</Title3>
            <Title3>Paid: Rs.{price}</Title3>
          </CardTextWrapper>
        </CardWrapper>
      </Container>
    </div>
  );
};

export default Success;
