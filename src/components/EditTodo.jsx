import { useState, useRef } from "react";

const EditTodo = ({ editTodo, task }) => {
  const [inputNewValue, setInputNewValue] = useState(task.taskName);
  const inputRef = useRef();

  const addNewtask = (e) => {
    e.preventDefault();
    console.log(inputNewValue);

    editTodo(inputNewValue, task.id);
  };

  return (
    <>
      <form className="formlist-edit" onSubmit={addNewtask}>
        <input
          ref={inputRef}
          className="form-control input-edit"
          id="readOnlyInput"
          type="text"
          placeholder="Update task"
          onChange={() => setInputNewValue(inputRef.current.value)}
          value={inputNewValue}
        />
        <button type="submit" className="btn btn-secondary btn-edit">
          Edit Task
        </button>
      </form>
    </>
  );
};

export default EditTodo;
