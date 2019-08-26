import React from "react";
import { Button } from "reactstrap";

function Item(props) {

    return (
      <li
        onClick={props.onToggle}
        style={{ textDecoration: props.todo.completed ? "line-through" : "none", marginBottom: "15px" }}
      >
        {props.todo.text}
        <Button style={{marginLeft: "20px"}} onClick={props.onDelete} color="danger" size="sm">
			Delete
		</Button>
      </li>
    );
  }

export default Item;
