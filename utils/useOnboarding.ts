import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "expo-router";
import { useEffect } from "react";

export const useOnBoarding = () => {
  const nav = useNavigation();

  useEffect(() => {
    checkfirstTime().then((value) => {
      if (!value) nav.navigate("OnBoarding");
    });
  }, []);
};

const checkfirstTime = async () => {
  const isNotFirstTime = await AsyncStorage.getItem("alreadyLaunched");

  if (!isNotFirstTime) {
    await AsyncStorage.setItem("alreadyLaunched", "true");
  }
  return !!isNotFirstTime;
};
