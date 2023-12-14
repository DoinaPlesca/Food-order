import {ResponseDto} from "./responsiveHelper/responseDto";
export interface User{

  username?: string,
  email?: string,
  password?: string;
  role?: string;

  usernameOrEmail?: string;
}

export type UserResponseDto = ResponseDto<User>;
