import React from 'react';
import { Link } from 'expo-router';
import useUserData from '@/hook/useUserData';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const WhatsAppLink: React.FC = () => {
  const userData = useUserData();

  if (!userData) {
    return null; 
  }

  const whatsappLink = `whatsapp://send?text=👋&phone=${userData.user.tele}`;

  return(
       <Link href={whatsappLink}><FontAwesome name="whatsapp" size={30} color="white" /></Link>
       ) ;
};

export default WhatsAppLink;