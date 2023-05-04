function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
  return obj[key];
}

const property = getProperty({ name: "Rubayet", age: 24 }, "name");
