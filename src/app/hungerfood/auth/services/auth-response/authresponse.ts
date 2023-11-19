import { User } from "../../model/user/user";

export class AuthResponse {
  success: boolean; // Indicates whether the authentication was successful
  message: string;  // A message describing the result of the authentication
  user: User;       // User data, if available
  token: string;

  constructor(){
    this.success = false;
    this.message = '';
    this.user = {} as User;
    this.token = '';
  }
}
