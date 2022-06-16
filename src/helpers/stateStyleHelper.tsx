export const changeStateStyle = (stateName: string) => {
  if (stateName === "已出貨") return "state-shipped" as string;
  if (stateName === "已完成") return "state-completed" as string;
  if (stateName === "準備中") return "state-ready" as string;
  return "";
};
