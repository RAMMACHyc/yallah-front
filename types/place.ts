export interface PlaceType {
    id?: number;
    city: string;
    placeName: string;
    categoryId: number;
    category: {
        IconName: string;
        color: string;
        name: string;
    };
    latitude: number;
    longitude: number;
  }
  
 
  export interface LocationData  {
    category: {
        IconName: string;
        color: string;
        name: string;
    };
    city: string;
    placeName: string;
    latitude: number;
    longitude: number;
};
