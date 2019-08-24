import React from 'react';
import { Button } from 'reactstrap';

class Item extends React.Component {
	render() {
		const { todo, onDelete } = this.props;
		return (
			<li>
				<span className="float-left">{todo.text}</span>
				<Button onClick={() => onDelete(todo.id)} color="danger" size="sm">
					Delete
				</Button>
			</li>
		);
	}
}

export default Item;
