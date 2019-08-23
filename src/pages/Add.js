import React from 'react';
import { connect } from 'react-redux';
import { Card, Button, CardHeader, CardBody, CardText } from 'reactstrap';
import { addTodoAction } from '../redux/action-creators/index';

class Add extends React.Component {
	render() {
		const { onAdd } = this.props;
		let initId = new Date().getTime();
		return (
			<div style={{ margin: '50px auto', textAlign: 'center', width: '500px' }}>
				<Card>
					<CardHeader>Write Note</CardHeader>
					<CardBody>
						<CardText>
							<input ref={(e) => (this.input = e)} />
						</CardText>
						<Button
							onClick={() => {
								onAdd(this.input.value, ++initId);
								this.input.value = '';
							}}
						>
							+ Add
						</Button>
					</CardBody>
				</Card>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		todos: state
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAdd: (text, id) => dispatch(addTodoAction(text, id))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Add);
