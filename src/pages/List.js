import React from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardBody } from 'reactstrap';
import Item from './Item';
// import { toggleTodoState, deleteTodo } from '../redux/action-creators/index';

function List(props) {
	const { list } = props;
	console.log(list)
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
							{list.map((todo, index) => <Item key={index} todo={todo} />)}
						</ul>
					</CardBody>
				</Card>
			)}
		</div>
	);
}

const mapStateToProps = (state) => console.log(state) || ( {
	list: state.todos
});

// const mapDispatchToProps = (dispatch) => ({
// 	onToggle: (id) => dispatch(toggleTodoState(id)),
// 	onDelete: (id) => dispatch(deleteTodo(id))
// });

export default connect(mapStateToProps, null)(List);
