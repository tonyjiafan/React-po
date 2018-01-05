/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 *
 */
let baseUrl;
let routerMode;

const mode = 'test';

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://cnodejs.org/api/v1';
  routerMode = 'hash';
} else if (mode === 'test') {
  baseUrl = 'http://cnodejs.org/api/v1';
  routerMode = 'hash';
} else if (mode === 'production') {
  baseUrl = 'http://cnodejs.org/api/v1';
  routerMode = 'hash';
}

export { baseUrl, routerMode };
