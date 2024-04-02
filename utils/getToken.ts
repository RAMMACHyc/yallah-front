import AsyncStorage from '@react-native-async-storage/async-storage';

export const getToken = async (): Promise<string | null> => {
  try {
    const tokenStrg = await AsyncStorage.getItem('token');
    if (tokenStrg) {
      const token = JSON.parse(tokenStrg);
      return token;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error retrieving token:', error);
    return null;
  }
};