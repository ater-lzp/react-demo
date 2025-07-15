// eslint-disable-next-line import/no-anonymous-default-export
export default {
  list: [],
  // 订阅
  subscribe(cb) {
    // 添加至订阅列表
    console.log("订阅");
    this.push(cb);
  },
  // 发布
  publish(content) {
    // 遍历订阅列表，执行回调函数
    this.list.forEach((cb) => cb(content));
    console.log("发布");
  },
  push( cb) {
    this.list.push(cb);
  },
};
