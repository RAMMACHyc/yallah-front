import {
  Alert,
  PermissionsAndroid,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { InputField, InputWrapper } from "@/styles/AddPost";
import React, { useRef, useState } from "react";
import { Animated, Image } from "react-native";
import AntDesgin from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import color from "@/styles/color";
import * as DocumentPicker from "expo-document-picker";
import { useAppDispatch } from "@/store";
import { PostType } from "@/types/post";
import { createPost } from "@/features/post/postThunks";
import { Link, Stack, useNavigation } from "expo-router";
import { FontAwesome6 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { API_URL } from "@/constants/API_URL";
import { CityType } from "@/types/city";
import DropdownComponent from "@/components/Dropdown";
import useUserData from "@/hook/useUserData";


const AddPost = () => {
  const animation = useRef(new Animated.Value(0)).current;
  const [open, setOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState<CityType | null>(null);
  const userData = useUserData();
  const [postData, setData] = useState({
    title: "",
    file: null,
    city: selectedCity,
    user : userData?.user.id
  });
 
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  
 console.log("User Data", userData?.user.id);
  console.log("Post Data", selectedCity);

  const rotation = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "360deg"],
        }),
      },
    ],
  };

  const toggleMenu = () => {
    const toValue = open ? 0 : 1;
    Animated.spring(animation, {
      toValue,
      friction: 5,
      useNativeDriver: true,
    }).start();
    setOpen(!open);
  };

  const getAnimatedStyle = (translateY: string | number) => ({
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, Number(translateY)],
        }),
      },
    ],
  });

  const handleImagePicker = async () => {
    try {
      const response = await DocumentPicker.getDocumentAsync({
        type: "image/*",
        copyToCacheDirectory: true,
      });
      const formData = new FormData();
      const file = response.assets?.[0];

      if (file) {
        console.log("file", file);
        // @ts-ignore
        formData.append("image", {
          uri: file.uri,
          name: file.uri,
          type: file.mimeType,
        });
        console.log("formData", formData);

        const res = await axios.post(
          `${API_URL}/upload`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        setData((prev) => ({ ...prev, file: res.data.file.filename }));
      }

    } catch (error) {
      console.log("Error accessing image picker:");
      console.log(JSON.stringify((error as any).response));
    }
  };

  const onSubmit = (formData: PostType) => {
    dispatch(createPost(formData));
    navigation.goBack();
  };
 
  const handleSubmit = () => {
    if (selectedCity) {
      onSubmit({
        ...postData,
        city: selectedCity.name,
      });
    } else {
      console.log("Please select a city");
    }
  };

  const handleGoBack = () => {
    navigation.goBack();
  };
  const handleCitySelection = (city: CityType | null) => {
    setSelectedCity(city);
  };

  return (
    <View style={styles.container}>
      {/* <Stack.Screen  options={{headerShown:true}} /> */}
      <Image
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          opacity: 0.45,
        }}
        source={require("@/assets/images/8c98994518b575bfd8c949e91d20548b.jpg")}
      />
      <InputWrapper>
        <InputField
          placeholder="What's on your mind?"
          multiline
          numberOfLines={4}
          value={postData.title}
          onChangeText={(title) => setData((prev) => ({ ...prev, title }))}
        />
      </InputWrapper>
 
      <TouchableOpacity onPress={handleSubmit}>
        <Animated.View style={styles.done}>
          <FontAwesome name="send" size={25} color="white" />
        </Animated.View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleGoBack}>
        <Animated.View style={styles.back}>
          <Ionicons
            name="chevron-back-sharp"
            size={25}
            color="gray"
            style={{ padding: 10 }}
          />
        </Animated.View>
      </TouchableOpacity>
      <View style={styles.city}>
      <DropdownComponent onCitySelect={handleCitySelection} />
      </View>
   

      <View style={styles.bottonContainer}>
        <TouchableOpacity>
          <Animated.View
            style={[styles.botton, styles.secondary, getAnimatedStyle(-80)]}
          >
            <Link href="/LocationScreen">
              <FontAwesome6 name="map-location-dot" size={24} color="#FFF" />
            </Link>
          </Animated.View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleImagePicker}>
          <Animated.View
            style={[styles.botton, styles.secondary, getAnimatedStyle(-140)]}
          >
            <Entypo name="attachment" size={24} color="#FFF" />
          </Animated.View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Animated.View
            style={[styles.botton, styles.secondary, getAnimatedStyle(-200)]}
          >
            <FontAwesome name="camera" size={24} color="#FFF" />
          </Animated.View>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleMenu}>
          <Animated.View style={[styles.botton, styles.menu, rotation]}>
            <AntDesgin name="plus" size={24} color="#FFF" />
          </Animated.View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottonContainer: {
    flexDirection: "row",
  },
  botton: {
    position: "absolute",
    height: 60,
    width: 60,
    bottom: 27,
    left: 120,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#F02A4B",
    shadowOffset: {
      height: 10,
      width: 0,
    },
  },
  menu: {
    backgroundColor: "#F02A4B",
  },
  secondary: {
    height: 50,
    width: 50,
    marginHorizontal: 7,
    backgroundColor: color.red,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },
  done: {
    position: "absolute",
    height: 55,
    width: 55,
    bottom: 700,
    left: 125,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00000010",
    shadowColor: "#F02A4B",
    shadowOffset: {
      height: 10,
      width: 0,
    },
  },

  back: {
    position: "absolute",
    height: 55,
    width: 55,
    bottom: 700,
    right: 120,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00000010",
    shadowColor: "#F02A4B",
    shadowOffset: {
      height: 10,
      width: 0,
    },
  },

  city: {
    position: "absolute",
    bottom: 700,
    right: 120,
    shadowColor: "#F02A4B",
    shadowOffset: {
      height: 10,
      width: 0,
    },
  },
});
