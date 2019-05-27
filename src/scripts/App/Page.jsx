import {render, h, Component} from 'preact';
import {api, pages} from './../config.js';

import PageApi from './PageApi.jsx';
import PageStatic from './PageStatic.jsx';

class Page extends Component {
	render() {
		if (this.props.page in api) {
			return <PageApi type={this.props.page} className={this.props.className} page={api[this.props.page]}/>
		}

		return <PageStatic className={this.props.className} page={this.props.page}/>
	};
}

export default Page;