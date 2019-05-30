import './app.jsx';

//if ("serviceWorker" in navigator) {
if ("serviceWorker" in navigator && (window.location.href.indexOf('.hello') === -1)) {
	navigator.serviceWorker.register("/service-worker.js");
}