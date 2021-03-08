import { HttpResponse } from './http';
import { CustomHttpResponse } from '../protocols';

export interface Controller<T = any> {
  handle: (request: T) => Promise<CustomHttpResponse>;
}
