export interface LoadUserByIdRepository {
  loadById: (id: string) => Promise<LoadUserByIdRepository.Result>;
}

export namespace LoadUserByIdRepository {
  export type Result = boolean;
}
