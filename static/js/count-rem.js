// 手机端页面自适应，rem布局,将屏幕宽度分为32份，一个宽度为1rem，设计时按此比例转换定尺寸，
// 如：屏幕320像素，1rem=10px;屏幕640像素,1rem=20px;好处，在不同屏幕下网页布局一样。
// 注意:一行多个单位时用百分比更合适,或者各单位宽总和小于总宽,以免出现0.5个像素四舍五入为1像素情况

(function (doc, win) {
  var docEl = doc.documentElement,
	resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	recalc = function () {
		var clientWidth = docEl.clientWidth;
		console.log(clientWidth)
	  if (!clientWidth) return;
	  docEl.style.fontSize = 20 * (clientWidth / 720) + 'px';
	};
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);