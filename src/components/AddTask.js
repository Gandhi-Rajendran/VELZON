import { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";

function AddTask({ closeHandler }) {
  const [inputType, setInputType] = useState("");
  // const [y,setY] = useState("");
  const focusHandler = () => {
    setInputType("date");
  };
  const blurHandler = () => {
    setInputType("text");
  };
  return (
    <div className="add-task-container">
      <div className="add-task-header">
        <h5>Add Task</h5>
        <p className="close-icon" onClick={closeHandler}>
          <VscChromeClose />
        </p>
      </div>
      <form className="add-task-form">
        <div className="form-field">
          <label>Project Name</label>
          <input type="text" placeholder="Project name" />
        </div>
        <div className="form-field">
          <label>Title</label>
          <input type="text" placeholder="Title" />
        </div>
        <div className="form-field">
          <label>Client Name</label>
          <input type="text" placeholder="Client name" />
        </div>
        <div className="sub-field">
          <div className="sub-field-input">
            <label>Date</label>
            <input
              type={inputType}
              placeholder="Date"
              name="date"
              onFocus={focusHandler}
              onBlur={blurHandler}
              className="date-field"
            />
          </div>
          <div className="sub-field-input">
            <label>Status</label>
            <select>
              <option selected disabled >status</option>
              <option className="new" value="New">
                NEW
              </option>
              <option value="inprogress">INPROGRESS</option>
              <option value="pending">PENDING</option>
              <option value="complete">COMPLETE</option>
            </select>
          </div>
        </div>
        <div className="form-field">
          <label>Priority</label>
          <select>
            <option selected disabled>priority</option>
            <option value="low">LOW</option>
            <option value="medium">MEDIUM</option>
            <option value="high">HIGH</option>
          </select>
        </div>
        <div className="form-btn">
          <button className="btn close-btn" onClick={closeHandler}>
            Close
          </button>
          <button className="btn add-btn" onClick={closeHandler}>
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTask;
