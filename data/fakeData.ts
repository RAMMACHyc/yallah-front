export type Data = {
    image: string; 
    id: string;
    color?: string;
    icon?: string;
    name?: string;
  };
  
  const fakedata: Data[] = [
    { id: '1', image: 'https://via.placeholder.com/150',color: '#6ecd83',icon: 'location-on',name:'location'},
    { id: '2', image: 'https://via.placeholder.com/150',color: '#6dc0fc',icon: 'light',name:'light'},
    { id: '3', image: 'https://via.placeholder.com/150',color: '#fcb26f',icon: 'hotel',name:'hotel'},
    { id: '4', image: 'https://via.placeholder.com/150',color: '#a986ff',icon: 'beach-access',name:'beach'},
  ];
  
  export default fakedata;
  