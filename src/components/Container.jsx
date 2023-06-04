import ContextTodoList from "../context/ContextTodolist";
import { useContext } from "react";
import DarkLightMode from "./DarkLightMode";
import CardTodolist from "./CardTodolist";

const Container = () => {
  const { theme } = useContext(ContextTodoList);
  return (
    <div className="container" id={theme}>
      <DarkLightMode />

      <div className="container-todolist">
        <CardTodolist />
      </div>
    </div>
  );
};

export default Container;
