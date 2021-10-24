import React from "react";
import "./Form.css";

const Form = ({ userInput, onInputChange, addItem }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" value={userInput} onChange={onInputChange} />
      <button onClick={addItem} className="addButton">
        Add
      </button>
    </form>
  );
};

export default Form;
