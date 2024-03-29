import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import { Link, Redirect } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";
import { useForm, Controller } from "react-hook-form";
import { RootState } from "../store/store";
import { register } from "../features/auth/authThunks";
import { User } from "../types/user";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";
import axios from "axios";
import { useState } from "react";
import MaskInput, { Mask } from "react-native-mask-input";
import { API_URL } from "@/constants/API_URL"

export default function SignupScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state: RootState) => state.auth);
  const [data, setData] = useState({ file: ''});

  const onSubmit = (formData: User) => {
    const userData = {
      ...formData,
      file: data.file,
    };
    dispatch(register(userData));
  };

  const user = useAppSelector((state) => state.auth.user);
  console.log(user);
  if (user) {
    return <Redirect href="/" />;
  }

  const handleImagePicker = async () => {
    try {
      const response = await DocumentPicker.getDocumentAsync({
        type: "image/*",
        copyToCacheDirectory: true,
      });
      const formData = new FormData();
      const file = response.assets?.[0];

      if (file) {
        console.log("filee", file);
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

  const maskValue: Mask = ['0', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];

  return (
    <View style={{ backgroundColor: "white", height: "100%", width: "100%" }}>
      <StatusBar style="light" />
      <Image
        style={{ height: "100%", width: "100%", position: "absolute" }}
        source={require("@/assets/images/Group 2.png")}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          width: "100%",
          position: "absolute",
        }}
      >
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify()}
          style={{ height: 225, width: 90 }}
          source={require("@/assets/images/light.png")}
        />
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify()}
          style={{ height: 160, width: 65 }}
          source={require("@/assets/images/light.png")}
        />
      </View>

      <View
        style={{
          height: "100%",
          width: "100%",
          justifyContent: "space-around",
          paddingTop: 40,
          paddingBottom: 10,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Animated.Text
            entering={FadeInDown.duration(1000).springify()}
            style={{
              fontSize: 30,
              letterSpacing: 2,
              fontWeight: "bold",
              color: "white",
            }}
          >
            Sign Up
          </Animated.Text>
        </View>

        <View
          style={{
            alignItems: "center",
            marginHorizontal: 20,
            marginVertical: 20,
          }}
        >
          <TouchableOpacity onPress={handleImagePicker}>
            <View style={styles.avatar}>
              <AntDesign name="camerao" size={26} color="gray" />
              <Text style={{ color: "gray", fontSize: 10 }}>Add photo</Text>
            </View>
          </TouchableOpacity>

          <View style={{ flexDirection: "row", gap: 5 }}>
            <Animated.View
              entering={FadeInDown.duration(1000).springify()}
              style={[
                styles.inputCont,
                errors.username && styles.errorInputContainer,
              ]}
            >
              <Icon
                name="user"
                size={20}
                color={errors.username ? "red" : "gray"}
                style={{ marginRight: 10 }}
              />
              <Controller
                control={control}
                rules={{
                  required: true,
                  minLength: 3,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder="Username"
                    placeholderTextColor={"gray"}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    style={errors.username && styles.errorInput}
                  />
                )}
                name="username"
              />
            </Animated.View>
            {errors.username && (
              <Text style={{ color: "red", fontSize: 12, marginBottom: 10 }}>
                Username is required and must be at least 3 characters
              </Text>
            )}
            <Animated.View
              entering={FadeInDown.duration(1000).springify()}
              style={[
                styles.inputCont,
                errors.tele && styles.errorInputContainer,
              ]}
            >
              <MaterialIcons
                name="call"
                size={20}
                color={errors.tele ? "red" : "gray"}
                style={{ marginRight: 10 }}
              />
              <Controller
                control={control}
                rules={{
                  required: true,
                  minLength: 3,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <MaskInput
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    mask={maskValue} 
                    placeholder="0_ __ __ __ __ __"
                    placeholderTextColor={"gray"}
                    style={[errors.tele && styles.errorInput]}
                  />
                )}
                name="tele"
              />
            </Animated.View>

            {errors.tele && (
              <Text style={{ color: "red", fontSize: 12, marginBottom: 10 }}>
                number phone is required and must be at least 3 characters
              </Text>
            )}
          </View>
          <Animated.View
            entering={FadeInDown.duration(1000).springify()}
            style={[
              styles.inputContainer,
              errors.email && styles.errorInputContainer,
            ]}
          >
            <Icon
              name="envelope"
              size={20}
              color={errors.email ? "red" : "gray"}
              style={{ marginRight: 10 }}
            />
            <Controller
              control={control}
              rules={{
                required: true,
                pattern: /^\S+@\S+$/i,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Email"
                  placeholderTextColor={"gray"}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={errors.email && styles.errorInput}
                />
              )}
              name="email"
            />
          </Animated.View>
          {errors.email && (
            <Text style={{ color: "red", fontSize: 12, marginBottom: 10 }}>
              Invalid email address
            </Text>
          )}

          <Animated.View
            entering={FadeInDown.delay(200).duration(1000).springify()}
            style={[
              styles.inputContainer,
              errors.password && styles.errorInputContainer,
            ]}
          >
            <Icon
              name="lock"
              size={20}
              color={errors.password ? "red" : "gray"}
              style={{ marginRight: 10 }}
            />
            <Controller
              control={control}
              rules={{
                required: true,
                minLength: 6,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Password"
                  placeholderTextColor={"gray"}
                  secureTextEntry
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={errors.password && styles.errorInput}
                />
              )}
              name="password"
            />
          </Animated.View>
          {errors.password && (
            <Text style={{ color: "red", fontSize: 12, marginBottom: 10 }}>
              Password is required and must be at least 6 characters
            </Text>
          )}

          <Animated.View
            entering={FadeInDown.delay(400).duration(1000).springify()}
            style={{ width: "100%" }}
          >
            {isLoading ? (
              <TouchableOpacity
                style={{
                  width: "100%",
                  backgroundColor: "#0874d7",
                  padding: 10,
                  borderRadius: 10,
                  marginBottom: 10,
                }}
              >
                <ActivityIndicator size="small" color="white" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={{
                  width: "100%",
                  backgroundColor: "#0874d7",
                  padding: 10,
                  borderRadius: 10,
                  marginBottom: 10,
                }}
                onPress={handleSubmit(onSubmit)}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  SignUp
                </Text>
              </TouchableOpacity>
            )}
            {error && <Text style={styles.errorText}>{error}</Text>}
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(600).duration(1000).springify()}
            style={{ flexDirection: "row", justifyContent: "center" }}
          >
            <Text>Already have an account?</Text>
            <TouchableOpacity>
              <Link href="/login">
                <Text style={{ color: "#0874d7", fontWeight: "400" }}>
                  Login
                </Text>
              </Link>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  inputCont: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    padding: 15,
    borderRadius: 10,
    width: "50%",
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  errorInputContainer: {
    borderWidth: 1,
    borderColor: "red",
  },
  errorInput: {
    color: "red",
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginBottom: 10,
  },
  loadingText: {
    color: "gray",
    textAlign: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: "white",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "rgba(0, 0, 0, 0.05)",
    shadowColor: "rgba(0, 0, 0, 0.38)",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    shadowOpacity: 1,
  },
});
