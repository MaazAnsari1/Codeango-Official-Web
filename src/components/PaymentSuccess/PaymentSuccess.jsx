import React from "react";
import { useSearchParams } from "react-router-dom";
import "./paymentsuccess.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const PaymentSuccess = () => {
  const search = useSearchParams()[0];
  const refernce_id = search.get("reference");
  return (
    <div className="payment_success">
      <div className="success_icon">
        <CheckCircleIcon sx={{ fontSize: "60px", color: "green" }} />
      </div>
      <h1>PAYMENT SUCCESSFULL</h1>
      <h4> Refernce no : {refernce_id} </h4>
    </div>
  );
};

export default PaymentSuccess;
