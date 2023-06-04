import { FcEmptyTrash, FcApproval } from "react-icons/fc";
import { FaRegEdit, FaCheck } from "react-icons/fa";

const Todo = ({ todo, deleteTask, showEditeur, completed, isComplete }) => {
  return (
    <>
      <div className="todo-container">
        <p>{todo.taskName}</p>
        <div className="icons-container">
          {isComplete ? (
            <FcApproval className="icon-complete icons"></FcApproval>
          ) : (
            <FaCheck
              className="icon-edit icons"
              onClick={() => completed(todo.id)}
            ></FaCheck>
          )}
          <FaRegEdit
            className="icon-edit icons"
            onClick={() => showEditeur(todo.id)}
          ></FaRegEdit>
          <FcEmptyTrash
            className="icon-trash icons"
            onClick={() => deleteTask(todo.id)}
          ></FcEmptyTrash>
        </div>
      </div>
    </>
  );
};

export default Todo;
