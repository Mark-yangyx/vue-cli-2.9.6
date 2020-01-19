import axios from 'axios';
import Toast from 'vant/lib/toast';
import 'vant/lib/toast/style';
import store from '../store';
import qs from 'qs';

// 申请一个新的http实例
const instance = axios.create({
  baseURL: CONTEXT_PATH,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  timeout: 60000, // 设置超时时间为1分钟
  validateStatus(status) {
    return status >= 200 && status < 300 || status === 304;
  },
  toastDuration: 3000
});


// 添加请求拦截器
instance.interceptors.request.use((options) => {
	// 简化类型设置
  const headers = options.headers = options.headers || {};
  if (options.json) {
    headers['Content-Type'] = 'application/json; charset=UTF-8';
    delete options.json;
	}
	
	// 遮罩，默认不显示菊花
  if (options.mask) {
    // 这里写菊花转
    store.commit('showLoading', true);
    delete options.mask;
	}
	
	// 校验post数据格式
  const contentType = headers['Content-Type'];
  if (typeof options.data === 'object' && contentType && contentType.indexOf('application/x-www-form-urlencoded') > -1) {
    options.data = qs.stringify(options.data);
	}
	
	return options
}, function(error) {
	store.commit('showLoading', false);
	return Promise.reject(error);
});

// 响应拦截器
instance.interceptors.response.use((response) => {
	// 成功了要把菊花停下来
  gloading.stop();
  return response;
}, function(error) {
	gloading.stop();
	if (error.response) {
		// 进行一系列错误处理
	}
	return Promise.reject(error);
})

Toast('sdfad');
