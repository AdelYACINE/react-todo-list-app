import TodoListContext from "./ContextTodolist";
import React, { useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import Swal from "sweetalert2";

const ContextTodolistProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggletheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  ///////////////////////////////////////////////////////////////////////////
  const [inputValue, setInputValue] = useState("");
  const [inputSearchValue, setInputSearchValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef();
  const inputSearch = useRef();

  const addtask = (e) => {
    e.preventDefault();
    const task = {
      taskName: inputValue,
      id: uuid(),
      isComplete: false,
      isEditing: false,
    };
    inputRef.current.value.trim() && setTodoList([...todoList, task]);

    inputRef.current.value = "";
  };

  const deleteTask = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Todo has been deleted.", "success");
        setTodoList(todoList.filter((todo) => todo.id !== id));
      }
    });
  };

  const completed = (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  const showEditeur = (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTodo = (task, id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id && task.trim()
          ? {
              ...todo,
              taskName: task,
              isEditing: !todo.isEditing,
              isComplete: false,
            }
          : todo
      )
    );
  };
  //////////////////////////////////////////////////////////////////////////////////

  return (
    <TodoListContext.Provider
      value={{
        theme,
        toggletheme,
        addtask,
        deleteTask,
        completed,
        showEditeur,
        editTodo,
        setInputValue,
        inputSearchValue,
        setInputSearchValue,
        inputSearch,
        todoList,
        inputRef,
      }}
    >
      {children}
    </TodoListContext.Provider>
  );
};

export default ContextTodolistProvider;
