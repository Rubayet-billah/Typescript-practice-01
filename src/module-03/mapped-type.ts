type AreaNumber = {
  height: number;
  width: number;
};

type A = AreaNumber["height"]; // looked up types

type AreaReadOnly = {
  readonly height: number;
  readonly width: number;
};

type Area<T> = {
  // [key in keyof AreaNumber]: AreaNumber[key];
  readonly [key in keyof T]: T[key];
};

const rectangularArea: AreaNumber = {
  height: 10,
  width: 12,
};

const area1: Area<{ height: number; width: string }> = {
  height: 10,
  width: "12",
};
