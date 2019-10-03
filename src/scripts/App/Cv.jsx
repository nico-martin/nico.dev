import { render, h, Component } from 'preact';
import { sources } from './../store';

class Cv extends Component {
	render() {
		return (
			<div className={this.props.className}>
				<p>test</p>
			</div>
		)
	};
}

export default Cv;