/*
* auther: mark
*/
const loadJs = (url, callback) => {
	let script = document.createElement('script');
	let header = document.getElementsByTagName('head')[0];
	script.src = url;

	if (typeof(callback) == 'function') {
		script.onload = function () {
			callback();
		}
	}
	header.appendChild(script);
}

export default loadJs;
