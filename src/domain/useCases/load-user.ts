export interface LoadUserById {
  checkByEmail: (id: string) => Promise<LoadUserById.Result>;
}
export namespace LoadUserById {
  export type Result = boolean;
}
