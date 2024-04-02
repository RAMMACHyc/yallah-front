import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import color from "@/styles/color";
import { API_URL } from "@/constants/API_URL";
import AntDesign from "react-native-vector-icons/AntDesign";
import { PostType } from "@/types/post";

type Props = {
  item: PostType;
};

const Places = ({ item }: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://imgs.search.brave.com/ChC3tU4Z1p8hBXrp6m8dJylFHvgmPALhqI5bPRNnKYY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9naXNn/ZW9ncmFwaHkuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIw/LzA2L1Nhbi1EaWVn/by1Sb2FkLU1hcC0x/MjY1eDE2MzcuanBn" }}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <View style={styles.locationContainer}>
          <View style={styles.locationTextContainer}>
            <Text style={styles.locationText}>Casablanca</Text>
          </View>
          <View style={styles.eyeIconContainer}>
            <AntDesign name="eye" size={15} color="gray" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Places;

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 280,
    backgroundColor: "white",
    borderRadius: 20,
    marginHorizontal: 6,
    shadowColor: color.shdaw,
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    position: "relative",
    objectFit: "cover",
  },
  infoContainer: {
    position: "absolute",
    top: 220,
    right: 20,
  },
  locationContainer: {
    flexDirection: "row",
    gap: 5,
  },
  locationTextContainer: {
    width: 90,
    height: 30,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  locationText: {
    color: "black",
    fontWeight: "700",
  },
  eyeIconContainer: {
    width: 50,
    height: 30,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});