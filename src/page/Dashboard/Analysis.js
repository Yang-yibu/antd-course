import {Component} from "react";

export default class Analysis extends Component {
	componentDidMount() {
		console.log('didMount Analysis: 挂载后');
	}

	componentWillUnmount() {
		console.log('willUnmount Analysis: 卸载前');
	}

	render() {
		return (
			<h1>Analysis Page</h1>
		)
	}
}

