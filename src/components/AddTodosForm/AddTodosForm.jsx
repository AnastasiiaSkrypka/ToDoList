import { useRef, useState } from 'react';
import { connect } from 'react-redux';

import {
  addTodos,
  removeTodos,
  updateTodos,
} from '../../redux/todos/todosSlice';

import styles from './AddTodosForm.module.css';

const mapStateToProps = (state) => {
  return { todos: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
  };
};

const AddTodosForm = (props) => {
  const [todo, setTodo] = useState('');

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, event) => {
    if (event.which === 13) {
      props.updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  console.log(props);

  return (
    <>
      <title className={styles.formTitle}>To do list</title>
      {/* <form
        className={styles.form}
   
        // onSubmit={ }
      > */}
      <input
        type="text"
        placeholder="Please add a new task"
        name="todo"
        className={styles.formInput}
        onChange={(event) => {
          handleChange(event);
        }}
      />

      <button
        // type="submit"
        onClick={() => {
          props.addTodo({
            id: Math.floor(Math.random() * 1000),
            item: todo,
            date: new Date().toLocaleString(),
            completed: false,
          });
        }}
        className={styles.formAddBtn}
      >
        Add task
      </button>
      {/* </form> */}

      <ul>
        {props.todos.todos.todos.map((item) => (
          <li key={item.id}>
            <textarea
              ref={inputRef}
              disabled={inputRef}
              defaultValue={item.item}
              onKeyPress={(event) =>
                update(item.id, inputRef.current.value, event)
              }
            />

            <button onClick={() => changeFocus()}>Edit</button>
            <button onClick={() => props.removeTodo(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodosForm);
