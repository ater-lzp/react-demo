import axios from "axios";
// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
const instance = axios.create({
  // baseURL: "https://m.maizuo.com",
  timeout: 5000,
  withCredentials: true,
  headers: {
    'x-client-info':'{"a":"3000","ch":"1002","v":"5.2.1","e":"17521164864351377396465665"}',
    'x-host':"mall.film-ticket.cinema.list"
  },
});

export const request = (url, method, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await instance({
        url,
        method,
        data
      });
      resolve(res.data);
    } catch (error) {
      reject(error);
    }
  });
};
