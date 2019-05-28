import {render, h, Component} from 'preact';
import {pages} from './../config.js';
import {Link} from 'preact-router/match';

function Content(props) {
	const page = props.page;
	if (page === 'privacy') {
		return (<p>Test Privacy</p>);
	} else if (page === 'legal') {
		return (<p>Test Legal</p>);
	}
	return <p>Test: none</p>;
}

class PageStatic extends Component {

	render() {
		const page = this.props.page;
		if (page in pages) {
			if (page === 'privacy') {
				return (
					<div className={`${this.props.className} editor`}>
						<p>Believe it or not: This website <b>does not collect any personal data</b> besides what is technically required.</p>
						<h2>Contact</h2>
						<p>Nicolas Martin<br/>General-Guisan Str. 47<br/>3700 Spiez</p>
						<p><a href="mailto:mail@nicomartin.ch">mail@nicomartin.ch</a></p>
						<h2>Server Log Files</h2>
						<p>This site is hosted by <a href="https://cyon.ch/" target="_blank">cyon GmbH</a> on servers in Basel (CH). Cyon automatically collects and stores information from your browser in so-called server log files. These are: IP address, date and time including time zone, browser request including origin of request (referer), operating system used including user interface and version, browser used including language and version, amount of data transmitted.</p>
					</div>
				);
			} else if (page === 'legal') {
				return (
					<div className={`${this.props.className} editor`}>
						<p>Responsible for the content of this website:</p>
						<p>Nicolas Martin<br/>General-Guisan Str. 47<br/>3700 Spiez</p>
						<p><a href="mailto:mail@nicomartin.ch">mail@nicomartin.ch</a></p>
						<h2>Disclaimer</h2>
						<p>The texts and contents of this site were created with great care. Nevertheless, I cannot give any guarantee with regard to the correctness, accuracy, up-to-dateness, reliability and completeness of the information.</p>
						<h2>Copyrights</h2>
						<p>The source code of this site is <Link href="/app/">open source</Link>.<br/>
							Portrait by <a href="https://www.pictura.ch/" target="_blank">Barbara Hess</a>.</p>
					</div>
				);
			} else if (page === 'app') {
				return (
					<div className={`${this.props.className} editor`}>
						<p>Responsible for the content of this website:</p>
					</div>
				);
			}
		}

		return (
			<div className={this.props.className}>
				<h1>404 Error</h1>
				<p>The requested Page does not exist.</p>
			</div>
		);
	};
}

export default PageStatic;