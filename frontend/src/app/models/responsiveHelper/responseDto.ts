export interface ResponseDto<T> {
  token: string;

  responseData?: T;
  messageToClient?: string;
}

