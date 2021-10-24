import React, { useState } from "react";
import "./TodoItem.css";
import TrashIcon from "../../assets/delete.svg";
import CheckIcon from "../../assets/check.svg";

function Todo(props) {
  const { content, deleteItem } = props;
  const [isCompleted, setCompleted] = useState(false);
  //console.log(content);

  return (
    <div className={isCompleted ? "completed" : "disCompleted"}>
      {content}
      <div className="icons">
        <label className="container">
          <input
            type="checkbox"
            id="checkbox"
            onClick={() => setCompleted(!isCompleted)}
          />
          <span className="checkmark">
            <img src={CheckIcon} alt="" className="icon check" />
          </span>
        </label>
        <img
          src={TrashIcon}
          alt=""
          className="icon trash"
          onClick={deleteItem}
        />
      </div>
    </div>
  );
}

export default Todo;
