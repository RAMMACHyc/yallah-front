// components/AuthLayout.tsx
import React, { useEffect, useState } from 'react';
import { getToken } from '../utils/getToken';
import { useRouter } from 'expo-router';
import { ActivityIndicator, View } from 'react-native';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      const token = await getToken();
      if (token) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setIsLoading(false);
    };

    checkToken();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!isAuthenticated) {
    router.replace('/login');
    return null;
  }

  return <>{children}</>;
};

export default AuthLayout;