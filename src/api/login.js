import request from '@/utils/axios';

// 用户接口
export default {
    // 注册
  login: (data) => {
    return request({
      url: 'user/login',
      method: 'POST',
      params: data,
    });
  },
  userInfo: (data) => {
    return request({
      url: 'user/userInfo',
      method: 'GET',
      params: data,
    });
  },
}