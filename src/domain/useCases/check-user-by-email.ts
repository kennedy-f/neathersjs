export interface CheckUserByEmail {
  checkByEmail: (email: string) => Promise<CheckUserByEmail.Result>;
}
export namespace CheckUserByEmail {
  export type Result = boolean;
}
