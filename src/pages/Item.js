import React from 'react';
import { Button } from 'reactstrap';

class Item extends React.Component {
	render() {
		const { todo, onDelete } = this.props;
		return (
			<li>
				<h3 className="float-left">{todo.text}</h3>
				<Button className="float-right" onClick={() => onDelete(todo.id)} color="danger" size="sm">
					Delete
				</Button>
			</li>
		);
	}
}

export default Item;
