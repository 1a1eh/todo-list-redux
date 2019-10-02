import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Button, Input, CardFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { addTodo } from '../redux/action-creators/index';

const Home = (props) => {
	const [ value, setValue ] = useState('');
	return (
		<Card style={{ width: 500, margin: '100px auto', textAlign: 'center' }}>
			<CardHeader><h2>Add</h2></CardHeader>
			<CardBody>
				<Input value={value} onChange={(e) => setValue(e.target.value)} />
			</CardBody>
			<CardFooter>
				<Button
					onClick={() => {
						props.add(value);
						props.history.push('/list');
					}}
				>
					+ Add Todo
				</Button>
			</CardFooter>
		</Card>
	);
};

const mapDispatchToProps = (dispatch) => ({
	add: (text) => dispatch(addTodo(text))
});

export default connect(null, mapDispatchToProps)(Home);
