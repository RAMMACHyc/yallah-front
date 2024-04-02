import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from "expo-router";
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
    <View style={{ flexDirection: "row" }}>
     
      <View
        style={{
          width: 180,
          height: 280,
          backgroundColor: "white",
          borderRadius: 20,
          marginLeft: 16,
          shadowColor: color.shdaw,
          shadowOffset: {
            width: 2,
            height: 3,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        
        <Image
          source={{ uri: `${API_URL}/uploads/61388.jpg` }}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 20,
            position: "relative",
            objectFit: "cover",
          }}
        />

        <View style={{ position: "absolute", top: 220, right: 20 }}>
          <View style={{ flexDirection: "row", gap: 5 }}>
          
          <View
            style={{
              width: 90,
              height: 30,
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
            }}
          >
            <Text style={{ color: "black", fontWeight: "700" }}>
              Casablanca
            </Text>

          </View>
          <View
            style={{
              width: 50,
              height: 30,
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
            }}
          >
            <AntDesign
              name="eye"
              size={15}
              color="gray"
             
            />
          </View>
          </View>
        </View>
      </View>
   
      
    </View>
  );
};

export default Places;

const styles = StyleSheet.create({});
