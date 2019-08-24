import React from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardBody } from 'reactstrap';
import Item from './Item';
import { toggleAction, deleteAction } from '../redux/action-creators/index';

class List extends React.Component {
	toggle = (item) => {
		const { list } = this.props;
		let data = list.map((it) => {
			if (it.id === item.id) {
				return {
					...it,
					completed: !it.completed
				};
			}
			return it;
		});
		this.props.onToggle(data);
	};

	delete = (id) => {
		const { list } = this.props;
		let data = list.filter((item) => {
			return item.id !== id;
		});
		this.props.onDelete(data);
		console.log(data);
	};

	render() {
		const { list } = this.props;
		return (
			<div>
				{list &&
				list.length > 0 && (
					<Card>
						<CardHeader>List</CardHeader>
						<CardBody>
							<ul>
								{list.map((todo, index) => (
									<Item key={index} todo={todo} onDelete={() => this.delete(todo.id)} />
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
		list: state.addTodoReducer
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onToggle: (data) => dispatch(toggleAction(data)),
		onDelete: (data) => dispatch(deleteAction(data))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
