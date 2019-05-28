import {render, h, Component} from 'preact';
import {Link} from 'preact-router/match';

class Home extends Component {
	render() {
		return (
			<div className={`${this.props.className} editor`}>
				<p className="big"><b>Hello, my name is Nico.</b><br/>I'm a frontend developer and founder of <a target="_blank" href="https://sayhello.ch">say hello</a>, a digital agency focused on web developement and WordPress.</p>
				<p>WordPress?! Yes, that's right. WordPress ist not only by far the biggest content management system in the world, but also a very handy foundation for modern web applications.<br/>
					I try to be an active part of the WordPress community by <a href="https://profiles.wordpress.org/nico_martin/#content-plugins" target="_blank">publishing and maintaining WordPress plugins</a> and speak on WordCamps and Meetups.</p>
				<p>Besides that I'm a huge fan of modern web applications and progressive web apps. Right now I'm torn back and forth between VueJS and (P)react. I think like them both.</p>
				<p>And yes, I like to <Link href="/talks/">speak in public</Link> about the subjects above ;).</p>
				<p>If I'm not in front of a computer I spend my days with my wife and our three kids, on a skateboard, on skis or waiting for the wind.</p>
			</div>
		);
	}
}

export default Home;