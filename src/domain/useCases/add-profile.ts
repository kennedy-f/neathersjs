export interface AddProfile {
  add: (profile: AddProfile.Params) => Promise<AddProfile.Result>;
}

/**
 * Create Profile Use Case
 */
export namespace AddProfile {
  /**
   * Create Profile use case - params
   */
  export type Params = {
    user_id: string;
    company_id: string;
    role: string;
  };

  export type Result = boolean;
}
