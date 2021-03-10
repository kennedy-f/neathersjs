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
    company: string;
    level: string;
    createdAt: Date;
    updatedAt: Date;
  };

  export type Result = boolean;
}
