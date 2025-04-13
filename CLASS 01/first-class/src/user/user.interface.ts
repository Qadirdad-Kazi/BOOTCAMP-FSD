// This file defines the User interface for the user module in TypeScript.
// It includes properties for id, name, and email, which are common attributes for a user object.
// The interface can be used to ensure that any user object adheres to this structure, providing type safety and clarity in the codebase.
// The User interface is a TypeScript interface that defines the structure of a user object.
export interface User {
  id: number;
  name: string;
  email: string;
}