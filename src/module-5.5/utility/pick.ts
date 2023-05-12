// The 'Pick' method is used to create a new type by selecting one or more properties from an existing type.

interface Person {
  name: string;
  email: string;
  contactNo: number;
}

// Create a new type named EmailOnly that only includes the 'email' property from the Person interface
type EmailType = Pick<Person, "email">;

type Constact = Pick<Person, "email" | "contactNo">;

type Name = Omit<Person, "email" | "contactNo">;
