import axios from "axios";

let baseURL = "";
if (process.env.NODE_ENV === "development") {
  baseURL = "http://172.16.8.18:30516";
} else if (
  process.env.NODE_ENV === "production" &&
  process.env.VUE_APP_BUILD_TYPE !== "online"
) {
  baseURL = "http://172.16.8.18:30516";
} else if (
  process.env.NODE_ENV === "production" &&
  process.env.VUE_APP_BUILD_TYPE === "online"
) {
  baseURL = "https://boss.tongsuyun.com";
}

const service = axios.create({
  baseURL: baseURL,
  withCredentials: false // 允许携带cookie
});

// 添加请求拦截器
service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data;
    // 请求不正确
    if (res.code === 200) {
      return res;
    } else {
      return res;
    }
  },
  error => {
    return Promise.reject(error);
  }
);
export default service;
