import { CustomHttpResponse } from '../protocols'; 
import { ServerError } from '../errors'; 

export const badRequest = (error: Error): CustomHttpResponse => ({
  statusCode: 400,
  body: error
}); 

export const forbidden = (error: Error): CustomHttpResponse => ({
  statusCode: 403,
  body: error
});

export const unauthorized = (error: Error): CustomHttpResponse => ({
  statusCode: 401,
  body: error
});

export const serverError = (error: Error): CustomHttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack)
})

export const ok = (data: any): CustomHttpResponse => ({
  statusCode: 200,
  body: data
})

export const noContent = (): CustomHttpResponse => ({
  statusCode: 204,
  body: null
})
