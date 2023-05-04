const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data = "Resolve data";
    if (data) {
      resolve(data);
    } else {
      reject("Promise rejected");
    }
  });
};
