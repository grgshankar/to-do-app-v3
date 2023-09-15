import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useApiContextHook } from "../contexts";
// import useApi from "../hooks/useApi";
import { URLS } from "../constants";
import Loading from "./Loading";

function AddInputGroup({ label, buttonName, placeholderName, variant }) {
  const [payload, setPayload] = useState({});
  const { error, create } = useApiContextHook();
  const handleSubmit = async () => {
    await create({ url: URLS.TODOS, payload });
  };
  if (error) return <>{JSON.stringify(error)}</>;
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text>{label || "Label"}</InputGroup.Text>
        <Form.Control
          placeholder={placeholderName || "placeholder"}
          onChange={(e) => {
            setPayload((payload) => {
              return { ...payload, title: e.target.value };
            });
          }}
        />
        <Button variant={variant} onClick={handleSubmit}>
          {buttonName || "Button Name"}
        </Button>
      </InputGroup>
    </>
  );
}

export default AddInputGroup;
