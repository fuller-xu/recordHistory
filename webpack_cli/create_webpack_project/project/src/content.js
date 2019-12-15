export const getContent = str => {
  const arr = Array.from("taotao");
  if (arr.includes(str)) {
    return arr.join(" ");
  } else return arr.join(",");
};
