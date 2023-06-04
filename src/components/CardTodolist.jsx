import EditTodo from "./EditTodo";
import Todo from "./Todo";
import ContextTodoList from "../context/ContextTodolist";
import { useContext } from "react";
import FormTodolist from "./FormTodolist";

const CardTodolist = () => {
  const {
    editTodo,
    inputSearchValue,
    todoList,
    deleteTask,
    showEditeur,
    completed,
  } = useContext(ContextTodoList);

  return (
    <>
      <FormTodolist />

      {todoList.length !== 0 ? (
        <div className="todos-container">
          {todoList
            .filter((todo) => {
              if (inputSearchValue === "") {
                return todo;
              } else {
                return todo.taskName
                  .toLowerCase()
                  .includes(inputSearchValue.toLowerCase());
              }
            })
            .map((todo) => {
              return todo.isEditing ? (
                <EditTodo key={todo.id} task={todo} editTodo={editTodo} />
              ) : (
                <Todo
                  key={todo.id}
                  todo={todo}
                  deleteTask={deleteTask}
                  showEditeur={showEditeur}
                  completed={completed}
                  isComplete={todo.isComplete}
                />
              );
            })}
        </div>
      ) : (
        <h2 className="heading-empty">Empty todolist</h2>
      )}
    </>
  );
};

export default CardTodolist;
