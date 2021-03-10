export type UserModel = {
  _id: string;
  name: string;
  email: string;
  active: boolean;
  cpf : string, 
  companies?: [];
  createdAt: Date;
  updatedAt: Date;
};

export type UserCreatedModel = {
  _id: string;
  name: string;
  email: string;
  active: boolean;
  cpf: string;
  companies?: [];
  createdAt: Date;
  updatedAt: Date;
};

