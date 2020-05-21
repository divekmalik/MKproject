
import React, { Component } from 'react';
import './App.css';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			dataSource: {}
		};
	}
	async componentDidMount() {
		try {
			const response = await fetch('https://u8ms5rcq1l.execute-api.us-east-1.amazonaws.com/test');
			let responseJson = await response.json();
			this.setState(
				{
					isLoading: false,
					dataSource: responseJson
				},
				function() {}
			);
		} catch (error) {
			console.error(error);
		}
	}

	render() {
		let { dataSource } = this.state;
		if (this.state.isLoading) {
			return <div>Loading...</div>;
		} else {
			return (
				<div>
					{dataSource.Items.map(item => (
						<div key={item.msg_nbr}>
							<h1>{item.Msg_txt}</h1>
							<li>{item.email}</li>
							<li>{item.first_name}</li>
                            <li>{item.last_name}</li>
						</div>
					))}
				</div>
			);
		}
	}
}
export default App;