import {render, h, Component} from 'preact';

class Home extends Component {
	render() {
		return (
			<div className={`${this.props.className} content`}>
				<p>Hello World</p>
			</div>
		);
	}
}

export default Home;