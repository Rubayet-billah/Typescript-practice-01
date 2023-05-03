type User = {
  name: string;
  age: number;
};

interface IUser {
  name: string;
  age: number;
}

// interface is used for object

interface IExtendedUser extends IUser {
  role: unknown;
}

const user: IExtendedUser = {
  name: "Rubayet",
  age: 24,
  role: "dev",
};
