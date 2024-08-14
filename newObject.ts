type User = {
  name: string;
  email: string;
  isActive: boolean;
};
// like this Example we can define any objects type for specific key word
function createUser(user: User): User {
  return { name: "", email: "", isActive: true };
}

createUser({ name: "", email: "", isActive: true });

export {};
