import React from "react";

function Footer(props) {
  return (
    <div>
      <footer className="footer">
        <span className="todo-count">
          <strong>2</strong>
          items left
        </span>
        <ul className="filters">
          <li>
            <a className="selected">All</a>
          </li>
          <li>
            <a>Active</a>
          </li>
          <li>
            <a>Completed</a>
          </li>
        </ul>
        <button className="clear-completed">Clear completed</button>
      </footer>
      <footer className="info">
        <p>Click to edit a todo</p>
        <p>
          Created by <a href="https://d12n.me/">Dmitry Sharabin</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
