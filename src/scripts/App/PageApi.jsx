import {render, h, Component} from 'preact';
import {api, idb} from './../config.js';

class PageApi extends Component {
	constructor(props) {
		super();

		this.state = {
			page: props.page,
			entries: {}
		}
	};

	fetchEntries(page) {

		this.setState({
			page,
			entries: {}
		});
		document.body.classList.add('loading--posts');

		idb.get(page.api).then(resp => {
			if (resp) {
				document.body.classList.remove('loading--posts');
				this.setState({
					entries: resp
				});
			}
		});

		if (this.state.page) {
			fetch(this.state.page.api)
				.then(result => {
					return result.json();
				})
				.then(entries => {
					document.body.classList.remove('loading--posts');
					idb.set(page.api, entries);
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
			return <p>Error: fetch failed</p>;
		}

		if (!this.state.entries.length) {
			return '';
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

export default PageApi;