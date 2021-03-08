export type UserModel = {
  id: number;
  name: string;
  type: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
};

export type UserCreatedModel = {
  name: string;
  type: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
};
