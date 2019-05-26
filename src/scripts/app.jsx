import {render, h, Component} from 'preact';
import {Router} from 'preact-router';
import {Link} from 'preact-router/match';
import {api} from './config.js';

import PageApi from './App/PageApi.jsx';
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
			<main className="main">
				<nav className="main__nav">
					{
						Object.keys(state.nav).map(link => {
							return <Link className="main__nav-element" activeClassName="main__nav-element--active" href={link}>{state.nav[link]}</Link>;
						})
					}
				</nav>
				<Router>
					<Home className="main__content" path="/"/>
					<PageApi className="main__content" path="/:page/"/>
				</Router>
			</main>
		);
	}
}

render(<App/>, document.querySelector('#main'));
