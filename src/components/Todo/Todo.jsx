import React from 'react';
// import styles form './Todo.module.css'

const Todo = ({ id, task, completed = false }) => {
  return (
    <li key={id}>
      <p
        style={{
          backgroundColor: completed ? 'green' : 'gray',
        }}
        className={styles.todo}
      >
        {task}{' '}
      </p>

      <button onClick={() => handleDeleteProfile(id)}>&times;</button>
    </li>
  );
};

export default Todo;
