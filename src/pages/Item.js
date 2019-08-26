import React from "react";
import { Button } from "reactstrap";

function Item(props) {

    return (
      <li
        onClick={props.onToggle}
        style={{ textDecoration: props.todo.completed ? "line-through" : "none" }}
      >
        {props.todo.text}
        <Button onClick={props.onDelete} color="danger" size="sm">
			Delete
		</Button>
      </li>
    );
  }

export default Item;
