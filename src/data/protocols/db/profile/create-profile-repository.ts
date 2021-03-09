export interface CreateProfileRepository {
  save: (
    profile: CreateProfileRepository.Params,
  ) => Promise<CreateProfileRepository.Result>;
}

export namespace CreateProfileRepository {
  export type Params = {
    user_id: string;
    company_id: string;
    role: string;
    company: string;
  };

  export type Result = boolean;
}
