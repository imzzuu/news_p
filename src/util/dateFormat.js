export const dateFormat = (el) => {
  const date = new Date(el.date);
  const ap = date.getHours() < 12 ? "오전" : "오후";
  const hours = ap === "오전" ? date.getHours() : date.getHours() - 12;
  const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const seconds =
    date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
  return `${el.date.split("T")[0]}  ${ap} ${hours}:${minutes}:${seconds} `;
};
