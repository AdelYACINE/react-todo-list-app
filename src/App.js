import ContextTodolistProvider from "./context/ContextTodolistProvider";
import Container from "./components/Container";

function App() {
  return (
    <ContextTodolistProvider>
      <Container />
    </ContextTodolistProvider>
  );
}

export default App;
