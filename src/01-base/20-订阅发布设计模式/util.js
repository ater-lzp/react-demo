// eslint-disable-next-line import/no-anonymous-default-export
export default {
  list: [],
  // 订阅
  subscribe(cb) {
    if (typeof cb !== 'function') {
      console.error('传入的订阅回调必须是一个函数');
      return;
    }
    // 添加至订阅列表
    console.log("订阅");
    this.push(cb);
    return (Math.random()).toString(16)
  },
  // 发布
  publish(content) {
    if (!Array.isArray(this.list) || this.list.length === 0) {
      console.log('当前没有订阅者');
      return;
    }
    // 遍历订阅列表，执行回调函数
    this.list.forEach((cb) => {
      try {
        cb(content);
      } catch (error) {
        console.error('执行订阅回调时发生错误:', error);
      }
    });
    console.log("发布");
  },
  push(cb) {
    this.list.push(cb);
  },
};
