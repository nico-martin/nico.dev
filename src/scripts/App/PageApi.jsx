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
		document.body.classList.add('loading--posts');
		if (this.state.page) {
			fetch(this.state.page.api)
				.then(result => {
					return result.json();
				})
				.then(entries => {
					document.body.classList.remove('loading--posts');
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
			return <p>Error: invalid page</p>;
		}

		if (!this.state.entries) {
			return <p>Error: fetch failed</p>
		}

		if (!this.state.entries.length) {
			return <p>loading..</p>
		}

		return (
			<ul className={this.props.className}>
				{
					Object.keys(this.state.entries).map(id => {
						const entry = this.state.entries[id];
						return <li>{entry.title}</li>;
					})
				}
			</ul>
		);
	};
}

export default Page;