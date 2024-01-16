import {ResponseDto} from "./responsiveHelper/responseDto";
export enum Role {
  User = 0,
  Admin = 1,
}

export interface User {
  username?: string;
  email?: string;
  password?: string;
  role?: Role;
  usernameOrEmail?: string;

}

export interface UserResponseDto extends ResponseDto<User> {

}
