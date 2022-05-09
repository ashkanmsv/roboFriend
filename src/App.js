import React from 'react';
import CardList from './CardList.js';
import SearchBox from './SearchBox.js';
import Scroll from './Scroll'
import ErrorBoundry from './ErrorBoundry'


class App extends React.Component{
	constructor(){
		super();
		this.state = {
			robots : [],
			SearchField : ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({robots:users}))
	}

	onSearchChange = (event) => {
		this.setState({SearchField : event.target.value});
	}

	render(){
		const filteredRobot = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.SearchField.toLowerCase())
		})
		if (this.state.robots.length === 0) {
			return <h1>loading</h1>
		}else{
			return(
				<div className='tc'>
					<h1 className='f1'>Robo Friends</h1>
					<SearchBox searchChange = {this.onSearchChange} />
					<Scroll>
						<ErrorBoundry>
							<CardList robots={filteredRobot}/>
						</ErrorBoundry>
					</Scroll>
				</div>
			);
		}
	}
}

export default App;