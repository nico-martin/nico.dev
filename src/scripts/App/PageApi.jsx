import {render, h, Component} from 'preact';
import {api} from './../config.js';

class Page extends Component {
	constructor(props) {
		super();

		const page = (props.page in api ? api[props.page] : false);

		this.state = {
			page,
			entries: {}
		}
	};

	fetchEntries(page) {
		// Todo: indexedDB first
		this.setState({
			page: (page in api ? api[page] : false),
			entries: {}
		});
		if (this.state.page) {
			fetch(this.state.page.api)
				.then(result => {
					return result.json();
				})
				.then(entries => {
					this.setState({
						entries
					});
				});
		}
	};

	componentWillReceiveProps(nextProps) {
		const currentPage = this.props.page;
		const nextPage = nextProps.page;

		if (currentPage !== nextPage) {
			this.fetchEntries(nextPage);
		}
	};

	componentDidMount() {
		this.fetchEntries(this.props.page);
	};

	render() {
		if (!this.state.page) {
			return <p>Error</p>;
		}

		if (!this.state.entries.length) {
			return <p>no entries</p>
		}

		console.log(this.state.entries);

		return (
			<div className={this.props.className}>Page: {api[this.props.page].api}</div>
		);
	};
}

export default Page;