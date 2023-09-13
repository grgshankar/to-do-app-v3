import React from "react";
import ViewTask from "./ViewTask";

const SubtaskDetail = ({ subtasks }) => {
  return (
    <>
      {subtasks &&
        subtasks.length > 0 &&
        subtasks.map((subtask, index) => {
          return (
            <ViewTask
              key={index}
              label={subtask?.title}
              status={subtask?.status}
            />
          );
        })}
    </>
  );
};

export default SubtaskDetail;
