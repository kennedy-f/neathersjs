import { Controller } from '../../../presentation/protocols';
import { AddProfileController } from '../../../presentation/controllers';
import { makeCreateProfileController } from './create-profile-controller-factory';

export const makeCreateProfile = (): Controller => {
  const controller = new AddProfileController(makeCreateProfileController());
  return controller;
};
