

export interface PostType {
    id?: string;
    title?: string;
    city: CityType;
    file?: string;
    user?: string;
  }

  interface CityType {
    name: string;

  }


  export interface PostResponce {
    id?: string;
    title?: string;
    city: string;
    file?: string;
  }