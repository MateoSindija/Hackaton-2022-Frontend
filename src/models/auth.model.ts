export interface IRegister {
  userFirstName: string | null;
  userLastName: string | null;
  userEmail: string | null;
  userPassword: string | null;
}

export interface IRegisterResult {
  token: string;
  type: string;
  id: string;
}

export interface ILogin {
  email: string | null;
  password: string | null;
}

export interface ILoginResult {
  id: string;
  token: string;
  type: string;
}
