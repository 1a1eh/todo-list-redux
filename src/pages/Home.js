import React from 'react';
import Add from './Add';
import List from './List';

class Home extends React.Component {
	toggle = () => {
		return <div />;
	};
	render() {
		return (
			<div style={{ margin: '70px auto', textAlign: 'center', width: '500px' }}>
				<h1>Todo List</h1>
				<Add />
				<List />
			</div>
		);
	}
}

export default Home;
