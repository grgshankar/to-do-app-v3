import { Form } from "react-bootstrap";
import { useThemeContext } from "./contexts/ThemeContext";
function Navbar() {
  const { toggleTheme } = useThemeContext();
  return (
    <>
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        onClick={toggleTheme}
      />
    </>
  );
}

export default Navbar;
