import React from 'react';
import { connect } from 'react-redux';
import { Card, Button, CardHeader, CardBody, CardText } from 'reactstrap';
import { addTodo } from '../redux/action-creators/index';

function Add(props) {
	const [value, setValue] = React.useState('')
	const onSubmit = e => {
		e.preventDefault()
		props.dispatch(addTodo(value));
		setValue('');
	}
	// const onKeyDown = e => {
	// 	console.log(e.target.keyCode)
	// 	if (e.target.keyCode === 13) {
	// 		onSubmit()
	// 	}
	// }

	return (
		<form style={{ margin: '50px auto', textAlign: 'center', width: '500px' }}>
			<Card>
				<CardHeader>Write Note</CardHeader>
				<CardBody>
					<CardText>
						<input value={value} onChange={e => setValue(e.target.value)} />
					</CardText>
					<Button
						type="submit"
						onClick={onSubmit}
					>
						+ Add
					</Button>
				</CardBody>
			</Card>
		</form>
	);
}


const mapStateToProps = (state) => console.log(state) || ({
	
		todos: state.todos
	
});

export default connect(mapStateToProps)(Add);
