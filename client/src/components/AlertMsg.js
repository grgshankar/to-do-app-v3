import React from "react";
import { Alert } from "react-bootstrap";

function AlertMsg({ variant, msg }) {
  return (
    <>
      <Alert variant={variant || "primary"}>{msg}</Alert>
    </>
  );
}

export default AlertMsg;
