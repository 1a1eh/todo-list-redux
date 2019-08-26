import React from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardBody } from 'reactstrap';
import Item from './Item';
import { toggleTodoState, deleteTodo } from '../redux/action-creators/index';

function List(props) {
	const { list, onToggle, onDelete } = props;
	return (
		<div>
			{list &&
			list.length > 0 && (
				<Card>
					<CardHeader>
						<h3>List</h3>
					</CardHeader>
					<CardBody>
						<ul style={{ listStyle: 'none' }}>
							{list.map((todo, index) => (
								<Item
									key={index}
									todo={todo}
									onToggle={() => onToggle(todo.id)}
									onDelete={() => onDelete(todo.id)}
								/>
							))}
						</ul>
					</CardBody>
				</Card>
			)}
		</div>
	);
}

const mapStateToProps = (state) => ({
	list: state.todos
});

const mapDispatchToProps = (dispatch) => ({
	onToggle: (id) => dispatch(toggleTodoState(id)),
	onDelete: (id) => dispatch(deleteTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
