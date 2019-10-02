import React from 'react';
import { Card, CardHeader, CardBody, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { deleteItem } from '../redux/action-creators/index';

const List = ({ list, onDelete }) => {
	return (
		<Card style={{ width: 500, margin: '100px auto', textAlign: 'center' }}>
			<CardHeader>
				<h2>Todo List</h2>
			</CardHeader>
			<CardBody>
				<h4>count: {list.length}</h4>
				<ul>
					{list.map((item, index) => {
						return (
							<li key={index} style={{margin: 10}}>
								{item.text}
								<span style={{ margin: '10px' }}>
									<Button color="danger" onClick={() => onDelete(item.id)}>
										- Delete
									</Button>
								</span>
							</li>
						);
					})}
				</ul>
			</CardBody>
		</Card>
	);
};

const mapStateToProps = (state) => ({
	list: state.todoReducer
});

const mapDispatchToProps = (dispatch) => ({
	onDelete: (id) => dispatch(deleteItem(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
