export interface User {
    id?: string;
    image?: string;
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

  export interface UserData {
    token: string;
    user: {
      email: string;
      id: string;
      tele: string;
      username: string;
    };
  }