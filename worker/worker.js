onmessage = (event) => {
  const data = event.data;

  // 假设传入的是一个对象，我们对它的属性进行处理
  const result = {
    squared: data.number * data.number,
    doubled: data.number * 2,
  };

  // 返回结果给主线程
  postMessage(result);
};
