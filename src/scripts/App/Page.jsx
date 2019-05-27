import {render, h, Component} from 'preact';
import {api, pages} from './../config.js';

import PageApi from './PageApi.jsx';
import PageStatic from './PageStatic.jsx';

class Page extends Component {
	render() {
		if (this.props.page in api) {
			return <PageApi page={api[this.props.page]}/>
		}

		return <PageStatic page={this.props.page}/>
	};
}

export default Page;