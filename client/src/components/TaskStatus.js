import React from "react";

const TaskStatus = ({ total, completed }) => {
  return (
    <>
      <p className="me-5">
        {completed} of {total} completed
      </p>
    </>
  );
};

export default TaskStatus;
