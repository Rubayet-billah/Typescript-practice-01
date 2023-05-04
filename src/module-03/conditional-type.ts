type Sheikh = {
  wife1: string;
  wife2: string;
};

type CheckProperty<T> = T extends keyof Sheikh ? true : false;

type checkWife1 = CheckProperty<Sheikh>;
