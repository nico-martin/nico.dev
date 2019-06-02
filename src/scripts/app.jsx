import {render, h, Component} from 'preact';
import {Router} from 'preact-router';
import {Link} from 'preact-router/match';
import {sources} from './store';

import Page from './App/Page.jsx';

class App extends Component {
	constructor() {
		super();

		const nav = {
			'/': 'About'
		};

		Object.keys(sources).forEach(page => {
			if (typeof sources[page].title !== 'undefined') {
				nav[`/${page}/`] = sources[page].title;
			}
		});

		this.state = {
			nav
		}
	}

	componentDidMount() {
		document.body.classList.add('loaded--app');
	}

	render(props, state) {
		return (
			<main className="app">
				<nav className="app__nav nav nav--main">
					{
						Object.keys(state.nav).map(link => {
							return <Link className="nav__element" activeClassName="nav__element--active" href={link}>{state.nav[link]}</Link>;
						})
					}
				</nav>
				<Router>
					<Page className="app__content" path="/"/>
					<Page className="app__content" path="/:page/"/>
				</Router>
				<footer className="app__footer">
					<nav className="app__footer-nav nav nav--footer">
						{
							Object.keys(sources.pages.pages).map(link => {
								return <Link className={`nav__element nav__element--${link}`} activeClassName="nav__element--active" href={`/${link}/`}>{sources.pages.pages[link]}</Link>;
							})
						}
					</nav>
				</footer>
			</main>
		);
	}
}

render(<App/>, document.querySelector('#main'));
