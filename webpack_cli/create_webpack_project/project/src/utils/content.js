export const getContent = (str) => {
  const arr = Array.from('taotao1');
  if (arr.includes(str)) {
    return arr.join(' ');
  } else return arr.join(',');
};

export const test = () => {
  console.log('看看执行了没有');
};
