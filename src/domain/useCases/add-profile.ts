export interface AddProfile {
  add: (user: AddProfile.Params) => Promise<AddProfile.Result>;
}

export namespace AddProfile {
  export type Params = {
    company: string;
    level: string;
    createdAt: Date; 
    updatedAt: Date;
  };

  export type Result = boolean;
}
