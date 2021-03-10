import { Controller } from '../../../presentation/protocols';
import { CheckUserByEmailController } from '../../../presentation/controllers';
import { makeCheckUserByEmailController } from './check-user-by-email-factory';
// import { makeLogControllerDecorator } from '../decorators/log-controller-decorator-factory'; fix bug 

export const makeCheckUser = (): Controller => {
  const controller = new CheckUserByEmailController(
    makeCheckUserByEmailController(),
  );
  return controller;
};
