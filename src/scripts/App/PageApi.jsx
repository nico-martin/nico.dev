import {render, h, Component} from 'preact';
import {fetchApi} from './../store';

class PageApi extends Component {
	constructor(props) {
		super();

		this.state = {
			pageSlug: props.page,
			entries: {}
		}
	};

	componentWillReceiveProps(nextProps) {
		const currentPage = this.props.page;
		const nextPage = nextProps.page;

		if (currentPage !== nextPage) {
			this.setState({
				pageSlug: nextPage,
				entries: {}
			});
			fetchApi(nextPage, resp => this.setState({
					entries: resp
				})
			);
		}
	};

	componentDidMount() {
		fetchApi(this.state.pageSlug, resp => this.setState({
				entries: resp
			})
		);
	};

	fortmatDate(date) {
		const parts = date.split('-');
		return `${parts[2]}.${parts[1]}.${parts[0]}`;
	}

	entry(key, entry) {
		if (key === 'talks') {
			const date = this.fortmatDate(entry.date);
			return (
				<div className="card">
					<span className="card__date">{date}</span>
					<h3 className="card__title">{entry.venue}</h3>
					<p className="card__subtitle">{entry.title}</p>
					<p className="card__links">
						{
							[entry.slides, entry.video].map((link, i) => {
								let text = 'Slides';
								if (i === 1) {
									text = 'Video';
								}
								if (link) {
									return <a href={link} target="_blank" className="card__link">{text}<i class="icon-arrow-right"></i></a>
								}
							})}
					</p>
				</div>
			);
		} else if (key === 'blog') {
			const date = this.fortmatDate(entry.date);
			return (
				<div className="card">
					<span className="card__date">{date} on {entry.publisher}</span>
					<h3 className="card__title">{entry.title}</h3>
					{entry.abstract &&
					<p className="card__subtitle">
						<i>German:</i><br/>
						<span>{entry.abstract}</span>
					</p>
					}
					<p className="card__links">
						<a href={entry.link} target="_blank" className="card__link">weiterlesen <i class="icon-arrow-right"></i></a>
					</p>
				</div>
			);
		} else if (key === 'code') {

			const languages = entry.language.split(', ');
			return (
				<div className="card">
					<h3 className="card__title">{entry.title}</h3>
					<span className="card__languages">
						{
							languages.map(language => {
								return <span className={`card__language card__language--${language.toLowerCase().replace(' ', '-')}`}>{language}</span>
							})
						}
					</span>
					<p className="card__subtitle">{entry.description}</p>
					<p className="card__links">
						{
							[entry.link, entry.demo].map((link, i) => {
								let text = entry.publisher;
								if (i === 1) {
									text = 'Demo';
								}
								if (link) {
									return <a href={link} target="_blank" className="card__link">{text}<i class="icon-arrow-right"></i></a>
								}
							})
						}
					</p>
				</div>
			);
		}

		return (
			<div className="card">
				<h3 className="card__title">{entry.title}</h3>
			</div>
		);
	}

	render() {
		if (!this.state.pageSlug) {
			return (
				<div className={this.props.className}>
					<p>Error: invalid page</p>
				</div>
			);
		}

		if (!this.state.entries) {
			return (
				<div className={this.props.className}>
					<p>Error: fetch failed</p>
				</div>
			);
		}

		if (!this.state.entries.length) {
			return '';
		}

		return (
			<div className={`${this.props.className} card-list`}>
				{
					Object.keys(this.state.entries).map(id => {
						const entry = this.state.entries[id];
						return this.entry(this.props.type, entry);
					})
				}
			</div>
		);
	};
}

export default PageApi;