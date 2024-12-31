export type User = {
  id: string;
  role: "cashier" | "admin";
};

const admin: User = {
  id: "2",
  role: "admin",
};

export async function getUser() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return admin;
}

export async function login() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return admin;
}
