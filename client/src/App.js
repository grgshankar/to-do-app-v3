import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import AddInputGroup from "./components/AddInputGroup";
// import AlertMsg from "./components/Alert";
import ListTask from "./components/ListTask";
import Title from "./components/Title";
import Toaster from "./components/Toaster";
import "./css/style.css";
import Demo from "./Demo";
import Navbar from "./Navbar";
import { useThemeContext } from "./contexts/ThemeContext";
// import Demo from "./Demo";
import "./App.css";
function App() {
  const { theme } = useThemeContext();
  return (
    <div className={`App ${theme}`}>
      <Container className="main_container text-center">
        <Navbar />
        <Row>
          <Col md={12}>
            <Toaster />
            <Title title="TODO APP" />
            <AddInputGroup
              label="Add new Todo?"
              placeholderName="Eg: Do Laundry"
              buttonName="Add the task"
              variant="success"
            />

            <ListTask />
          </Col>
        </Row>
        {/* <Demo tasks="hello" /> */}
      </Container>
    </div>
  );
}

export default App;
