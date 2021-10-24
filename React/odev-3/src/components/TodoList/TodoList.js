import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

function TodoList(props) {
  return (
    <div>
      <ul>
        {props.todos.map((todo) => {
          return (
            <li>
              <TodoItem
                {...todo}
                key={todo.id}
                deleteItem={() => props.deleteItem(todo.id)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
