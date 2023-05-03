// Generic Interface
interface CrushInterface<T> {
  name: string;
  husband: T;
}

const crush1: CrushInterface<boolean> = {
  name: "Clara Ema",
  husband: true,
};

const crush2: CrushInterface<string> = {
  name: "Clara Ema",
  husband: "Rubayet",
};
