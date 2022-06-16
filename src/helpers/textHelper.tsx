export const highlight = (origin: string, target: string) => {
  return origin
    .split(target)
    .join(`<span style="background-color:yellow;">${target}</span>`);
};
