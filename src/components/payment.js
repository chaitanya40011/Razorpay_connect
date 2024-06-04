import React, { useState, useEffect } from "react";
import getDataFromSheet from "./fetchData";
import { useHistory } from "react-router-dom";
import {
  Contain,
  InputLabel,
  Input,
  CardWrapper,
  CardImage,
  CardTextWrapper,
  CardTextTitle,
  CardTextBody,
  CardStatWrapper,
  CardStats,
} from "./styled_css";
import toast, { Toaster } from "react-hot-toast";

const Payment = () => {
  const history = useHistory();

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const [sheetData, setSheetData] = useState([]);
  const [id, setId] = useState("");

  let data = "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        data = await getDataFromSheet();

        console.log("data");
        console.log(data[1].userEmail);
        setSheetData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handlePaymentSuccess = async (response, itemname, price, desc) => {
    try {
      history.push(
        `/success?payment_id=${response.razorpay_payment_id}&itemName=${itemname}&price=${price}&description=${desc}`
      );
    } catch (error) {
      console.log(error.response);
      history.push(`/failure?error_description=${response.error.description}`);
    }
  };

  const openPayModal = () => {
    const item = sheetData.find((item) => item.orderId === id);

    if (!item) {
      toast.error("Order ID not found");
      // alert("Order ID not found");
      return;
    }

    const options = {
      key: "rzp_test_CQZKB4tr17btlb",
      amount: item.price * 100, // amount in paise
      currency: "INR",
      description: `Payment for ${item.itemName}`,
      handler: function (response) {
        handlePaymentSuccess(response, item.itemName, item.price, item.desc);
      },
    };

    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  useEffect(() => {
    const res = loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      // alert("Razorpay SDK failed to load. Are you online?");
      toast.error("Razorpay SDK failed to load. Are you online?");
      return;
    }
  }, []);

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Contain>
        <CardWrapper>
          <CardImage />
          <CardTextWrapper>
            <CardTextTitle>Pay For Your ID</CardTextTitle>
            {/* <CardTextBody> */}
            {/* <ul> */}
            {/* {sheetData.map((item, index) => (
                  // <li key={index}>
                  //   <strong>Item Name:</strong> {item.itemName},{" "}
                  //   <strong>Price:</strong> {item.price},{" "}
                  //   <strong>Description:</strong> {item.desc},{" "}
                  //   <strong>User Email:</strong> {item.userEmail},{" "}
                  //   <strong>Order ID:</strong> {item.orderId},{" "}
                  // </li>
                ))} */}
            {/* </ul> */}
            {/* </CardTextBody> */}

            <Input value={id} onChange={(e) => setId(e.target.value)}></Input>
            <InputLabel>Enter ID</InputLabel>
          </CardTextWrapper>

          <CardStatWrapper>
            <CardStats onClick={() => openPayModal()}>Pay</CardStats>

            {/* <Button onClick={() => openPayModal()}>Pay</Button> */}
            {/* </CardStats> */}
          </CardStatWrapper>
        </CardWrapper>
      </Contain>
    </div>
  );
};
export default Payment;
