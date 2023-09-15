import { Form } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import AlertMsg from "./AlertMsg";
import SubtaskList from "./SubtaskList";
import TaskStatus from "./TaskStatus";

function ListTask({ tasks }) {
  console.log("tas", tasks);
  return (
    <Accordion defaultActiveKey={["0"]}>
      {tasks && tasks.length > 0 ? (
        tasks.map((task, index) => (
          <Accordion.Item
            className="accordion_wrapper mb-3"
            key={task._id}
            eventKey={index}
          >
            <Accordion.Header>
              <Form className="todo_title_wrapper">
                <Form.Group className="d-flex justify-content-between">
                  <span className="d-flex">
                    <Form.Check aria-label="Checkbox for following text input" />
                    <span className="mx-3">{task?.title || "Task Title"}</span>
                  </span>
                  <TaskStatus
                    total={task && task?.subtasks.length}
                    completed="2"
                  />
                </Form.Group>
              </Form>
            </Accordion.Header>
            <Accordion.Body>
              {/* {task?.subtask[0]?.title || "No any subtask"} */}
              <SubtaskList subtasks={task?.subtask} />
            </Accordion.Body>
          </Accordion.Item>
        ))
      ) : (
        <>
          <AlertMsg
            variant="danger"
            msg="No task found. Add task to get started..."
          />
        </>
      )}
    </Accordion>
  );
}

export default ListTask;
