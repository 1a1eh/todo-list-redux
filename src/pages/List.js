import React from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardBody } from 'reactstrap';
import Item from './Item';
import { toggleTodoState, deleteTodo } from '../redux/action-creators/index';

class List extends React.Component {
	render() {
		const { list, dispatch } = this.props;
		return (
			<div>
				{list &&
				list.length > 0 && (
					<Card>
						<CardHeader>List</CardHeader>
						<CardBody>
							<ul>
								{list.map((todo, index) => (
									<Item
										key={index}
										todo={todo}
										onToggle={() => dispatch(toggleTodoState(todo.id))}
										onDelete={() => dispatch(deleteTodo(todo.id))}
									/>
								))}
							</ul>
						</CardBody>
					</Card>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		list: state.todos
	};
};

export default connect(mapStateToProps)(List);
