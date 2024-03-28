export interface User {
    id?: string;
    file?: string;
    tele: string;
    username: string;
    email: string;
    password: string;  
  }


  export interface registerResponse {
    user: User;
    token: string;
  }


  export interface logintype{
    email: string;
    password: string;
  }