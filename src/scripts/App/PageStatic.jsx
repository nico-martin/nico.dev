import {render, h, Component} from 'preact';
import {pages} from './../config.js';

function Content(props) {
	const page = props.page;
	if (page === 'privacy') {
		return (<p>Test Privacy</p>);
	} else if (page === 'legal') {
		return (<p>Test Legal</p>);
	}
	return <p>Test: none</p>;
}

class PageStatic extends Component {

	render() {
		const page = this.props.page;
		if (page in pages) {
			if (page === 'privacy') {
				return (
					<div className={this.props.className}>
						<h1>{pages[page]}</h1>
						<p>Test Privacy</p>
					</div>
				);
			} else if (page === 'legal') {
				return (
					<div className={this.props.className}>
						<h1>{pages[page]}</h1>
						<p>Test Privacy</p>
					</div>
				);
			}
		}

		return (
			<div className={this.props.className}>
				<h1>404 Error</h1>
				<p>The requested Page does not exist.</p>
			</div>
		);
	};
}

export default PageStatic;