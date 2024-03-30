import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { Link } from "expo-router";

interface DotProps {
  selected: boolean;
}

const Dots: React.FC<DotProps> = ({ selected }) => {
  let backgroundColor = selected ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.3)";

  return (
    <View
      style={{
        width: 6,
        height: 6,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const Skip: React.FC<any> = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 12 }} {...props}>
    <Link href="/login" {...props}>
      <Text style={{ fontSize: 16 }}>Skip</Text>
    </Link>
  </TouchableOpacity>
);

const Next: React.FC<any> = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 12 }} {...props}>
    <Text style={{ fontSize: 16 }}>Next</Text>
  </TouchableOpacity>
);

const Done: React.FC<any> = ({ ...props }) => (
  <Link href="/login" {...props}>
    <Text style={{ fontSize: 16 }}>Done</Text>
  </Link>
);

const OnboardingScreen: React.FC = () => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      pages={[
        {
          backgroundColor: "#a6e4d0",
          image: <Image source={require("../assets/Group 1.png")}  />,
          title: "Connect to the World",
          subtitle: "A New Way To Connect With The World",
        },
        {
          backgroundColor: "#fdeb93",
          image: <Image source={require("../assets/onboarding-img2.png")} />,
          title: "Share Your Favorites",
          subtitle: "Share Your Thoughts With Similar Kind of People",
        },
        {
          backgroundColor: "#e9bcbe",
          image: <Image source={require("../assets/onboarding-img3.png")} />,
          title: "Become The Star",
          subtitle: "Let The Spot Light Capture You",
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
