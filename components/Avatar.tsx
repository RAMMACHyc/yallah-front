import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";
import color from "../styles/color";
import React from "react";
import { Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { MaterialIcons } from "@expo/vector-icons";
import { useAppDispatch } from "@/store";
import { logout } from "@/features/auth/authThunks";

const Avatar = () => {
  const dispatch = useAppDispatch();
  const [show, setShow] = React.useState(false);
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Pressable
      style={{
        margin: 20,
        justifyContent: "center",
        alignItems: "center",
        width: 40,
        height: 40,
        zIndex: 10,
        position: "relative",
      }}
      onPress={() => setShow(!show)}
    >
      <Image
        source={{
          uri: "https://media.licdn.com/dms/image/D4E35AQGYxPCbrFWhCg/profile-framedphoto-shrink_400_400/0/1708424038495?e=1710777600&v=beta&t=3repJB8XqgWXKG6r7scysExArttDbqe898JTQREzqMM",
        }}
        style={styles.avatar}
      />
      <View
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 30,
          width: 12,
          height: 12,
          borderRadius: 5,
          backgroundColor: color.green,
          borderWidth: 1,
          borderColor: color.light,
        }}
      />

      {/* menu */}
      {show && (
        <View
          style={{
            width: 130,
            height: 120,
            backgroundColor: color.light,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            flexDirection: "column",
            gap: 13,
            padding: 23,
            position: "absolute",
            right: 0,
            top: 50,
            zIndex: 12,
            borderWidth: 1,
            borderColor: color.light,
            shadowColor: "gray",
            shadowOffset: {
              width: 2,
              height: 3,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        >
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Icon name="user" size={20} color="blue" />
            <Text style={{color:'blue'}}>Profile</Text>
          </View>
          <View
            style={{ width: "100%", height: 0.25, backgroundColor: "black" }}
          ></View>
          <TouchableOpacity onPress={handleLogout}>
            <View style={{ flexDirection: "row", gap: 5 }}>
              <MaterialIcons name="logout" size={20} color="red" />
              <Text style={{color:'red'}}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </Pressable>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
});
