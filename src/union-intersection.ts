type NoobDeveoloper = {
  name: string;
};

type JuniorDeveloper = NoobDeveoloper & {
  // intersect type
  expertise: string;
  experience: number;
};

const employee: NoobDeveoloper | JuniorDeveloper = {
  name: "Boltu",
  expertise: "Javascript",
  experience: 3,
};
