import ContextTodoList from "../context/ContextTodolist";
import { useContext } from "react";

const DarkLightMode = () => {
  const { toggletheme, theme } = useContext(ContextTodoList);

  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input switch-button"
        type="checkbox"
        id="flexSwitchCheckChecked"
        onChange={toggletheme}
      />
      <label
        className="form-check-label switch-icon"
        htmlFor="flexSwitchCheckChecked"
      >
        {theme === "light" ? <p>&#127774;</p> : <p>&#127770;</p>}
      </label>
    </div>
  );
};

export default DarkLightMode;
