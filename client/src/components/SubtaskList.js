import React from "react";
import AddInputGroup from "./AddInputGroup";
import AlertMsg from "./AlertMsg";
import SubtaskDetail from "./SubtaskDetail";

function SubtaskList({ subtasks }) {
  return (
    <>
      <div className="container subtask_list">
        {subtasks && subtasks.length > 0 ? (
          <>
            <SubtaskDetail subtasks={subtasks} />
          </>
        ) : (
          <>
            <AlertMsg variant="danger" msg="No subtask found" />
          </>
        )}
        <AddInputGroup
          label="Add new subtask"
          placeholderName="Eg: Gather Clothes"
          buttonName="Add subtask"
          variant="primary"
        />
      </div>
    </>
  );
}

export default SubtaskList;
