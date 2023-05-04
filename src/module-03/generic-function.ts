type mandatoryTypes = {
  name: string;
  age: number;
  salary: number;
};

const addMeInMyCrushMind = <T extends mandatoryTypes>(myInfo: T) => {
  const crush = "Clara";
  const newData = { ...myInfo, crush };
  return newData;
};

const myInfo = {
  name: "Rubayet",
  age: 24,
  salary: 100000,
};

addMeInMyCrushMind(myInfo);
