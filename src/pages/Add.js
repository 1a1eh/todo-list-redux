import React from 'react';
import { connect } from 'react-redux';
import { Card, Button, CardHeader, CardBody, CardFooter } from 'reactstrap';
import { addList } from '../redux/action-creators/index';

function Add(props) {
	const [ value, setValue ] = React.useState('');
	const onSubmit = (e) => {
		e.preventDefault();
		props.add(value);
		setValue('');
	};
	return (
		<form>
			<Card>
				<CardHeader>Add Note</CardHeader>
				<CardBody>
					<input value={value} onChange={(e) => setValue(e.target.value)} />
				</CardBody>
				<CardFooter>
					<Button type="submit" onClick={onSubmit}>
						+ Add
					</Button>
				</CardFooter>
			</Card>
		</form>
	);
};

const mapDispatchToProps = (dispatch) => ({
	add: (text) => dispatch(addList(text))
});

export default connect(null, mapDispatchToProps)(Add);
