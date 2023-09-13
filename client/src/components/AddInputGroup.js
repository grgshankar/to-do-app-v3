import { Button, Form, InputGroup } from "react-bootstrap";

function AddInputGroup({ label, buttonName, placeholderName, variant }) {
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text>{label || "Label"}</InputGroup.Text>
        <Form.Control placeholder={placeholderName || "placeholder"} />
        <Button variant={variant}>{buttonName || "Button Name"}</Button>
      </InputGroup>
    </>
  );
}

export default AddInputGroup;
