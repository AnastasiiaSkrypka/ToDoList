import AddTodosForm from './components/AddTodosForm/AddTodosForm';
import { addTodos, removeTodos } from './redux/todos/todosSlice';

const App = () => {
  return (
    <>
      <AddTodosForm />
    </>
  );
};
export default App;
