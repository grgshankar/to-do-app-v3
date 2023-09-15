import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import Loading from "./components/Loading";
import AddInputGroup from "./components/AddInputGroup";
import ListTask from "./components/ListTask";
import Title from "./components/Title";
import Toaster from "./components/Toaster";
import "./css/style.css";
import Navbar from "./Navbar";
import { useThemeContext } from "./contexts/ThemeContext";
import { useApiContextHook } from "./contexts";
import { URLS } from "./constants";
import "./App.css";
// import useApi from "./hooks/useApi";
// console.log(URLS);
function App() {
  const { theme } = useThemeContext();
  const { data: tasks, error, list } = useApiContextHook();
  useEffect(() => {
    list(URLS.TODOS);
  }, [list]);
  if (error) return <>{JSON.stringify(error)}</>;

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

            <ListTask tasks={tasks} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
