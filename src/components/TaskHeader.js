import AddTask from "./AddTask";
import Overlay from "./Overlay";
import { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";

const TaskHeader = () => {
  const [create,setCreate] = useState(false);
  const createHandler = () => {
    setCreate(true);
  }
  const closeHandler = () => {
    setCreate(false)
  }
  return (
    <div className="task-header">
      <h5>All Tasks</h5>
      <div className="task-header-left">
        <button className="btn create-btn" onClick={createHandler}>
          + Create Task
        </button>
        <button className="btn delete-btn">
          <RiDeleteBinLine size="0.7rem" color="red" />
        </button>
      </div>
        {create && <AddTask closeHandler={closeHandler}/>}
        {create && <Overlay />}
    </div>
  );
};

export default TaskHeader;
