import {render, h, Component} from 'preact';
import {sources} from './../store';

import PageApi from './PageApi.jsx';
import PageStatic from './PageStatic.jsx';

class Page extends Component {
	render() {
		if (this.props.page in sources) {
			return <PageApi type={this.props.page} className={this.props.className} page={this.props.page}/>
		}

		return (
			<div className={this.props.className}>
				{typeof this.props.page === 'undefined' &&
				<div className="editor">
					<p className="big"><b>Hello, my name is Nico.</b><br/>I'm a frontend developer and founder of <a target="_blank" href="https://sayhello.ch">say hello</a>, a digital agency focused on modern web developement and WordPress.</p>
				</div>
				}
				<PageStatic page={this.props.page}/>
			</div>
		)
	};
}

export default Page;