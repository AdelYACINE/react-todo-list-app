import ContextTodoList from "../context/ContextTodolist";
import { useContext } from "react";

const FormTodolist = () => {
  const { inputRef, setInputValue, addtask, inputSearch, setInputSearchValue } =
    useContext(ContextTodoList);
  return (
    <>
      <h1 className="title">Get things done!</h1>
      <input
        ref={inputSearch}
        className="form-control input-search"
        id="readOnlyInput"
        type="search"
        placeholder=" &#128269; Search Todo ..."
        onChange={() => setInputSearchValue(inputSearch.current.value)}
      />
      <form className="formlist" onSubmit={addtask}>
        <input
          ref={inputRef}
          className="form-control input-todo"
          id="readOnlyInput"
          type="text"
          placeholder="what's the tasks for today ?"
          onChange={() => setInputValue(inputRef.current.value)}
        />
        <button type="submit" className="btn btn-primary btn-todo">
          Add Task
        </button>
      </form>
    </>
  );
};

export default FormTodolist;
