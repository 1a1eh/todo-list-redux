import React from 'react';
import Add from './Add';
// import List from './List';

class Home extends React.Component {
	render() {
		return (
			<div style={{ margin: '100px', textAlign: 'center', width: '500px' }}>
				<Add />
				{/* <List /> */}
			</div>
		);
	}
}

export default Home;
