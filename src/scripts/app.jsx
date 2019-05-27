import {render, h, Component} from 'preact';
import {Router} from 'preact-router';
import {Link} from 'preact-router/match';
import {api, pages} from './config.js';

import Page from './App/Page.jsx';
import Home from './App/Home.jsx';

class App extends Component {
	constructor() {
		super();

		const nav = {
			'/': 'About'
		};

		Object.keys(api).forEach(page => {
			nav[`/${page}/`] = api[page].title;
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
					<Home className="app__content" path="/"/>
					<Page className="app__content" path="/:page/"/>
				</Router>
				<footer className="app__footer">
					<nav className="app__footer-nav nav nav--footer">
						{
							Object.keys(pages).map(link => {
								return <Link className="nav__element" activeClassName="nav__element--active" href={`/${link}/`}>{pages[link]}</Link>;
							})
						}
					</nav>
				</footer>
			</main>
		);
	}
}

render(<App/>, document.querySelector('#main'));
