import React from "react";
import { Form } from "react-bootstrap";
import { RiDeleteBin6Line } from "react-icons/ri";
import PopupAlert from "../utils/PopupAlert";

const ViewTask = ({ label, status }) => {
  const remove = () => {
    console.log("ready to remove");
    PopupAlert({});
  };
  return (
    <>
      <Form>
        <Form.Group className="mb-3 d-flex justify-content-between">
          <Form.Check
            type="checkbox"
            label={label || "Label placeholder"}
            defaultChecked={status === "completed" ? true : false}
          />
          <RiDeleteBin6Line color="red" onClick={() => remove()} />
        </Form.Group>
      </Form>
    </>
  );
};

export default ViewTask;
