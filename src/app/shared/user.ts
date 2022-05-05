export interface UserForRegister {
    fullName: string;
    id: number;
    mobile: number;
    email: string;
    password: string;
  }

  export interface UserForLogin {
    email: string;
    password: string;
  }