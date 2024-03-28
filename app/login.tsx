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
import { login } from "../features/auth/authThunks";
import { logintype } from "../types/user";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export default function SignupScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<logintype>();
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state: RootState) => state.auth);

  const onSubmit = (data: logintype) => {
    dispatch(login(data));
  };


  const user = useAppSelector((state) => state.auth.user);
  if (user) {
    return <Redirect href="/" /> ;
  }


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
            Login
          </Animated.Text>
        </View>

        <View
          style={{
            alignItems: "center",
            marginHorizontal: 20,
            marginVertical: 20,
          }}
        >
      
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
                  Login
                </Text>
              </TouchableOpacity>
            )}
            {error && <Text style={styles.errorText}>{error}</Text>}
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(600).duration(1000).springify()}
            style={{ flexDirection: "row", justifyContent: "center" }}
          >
            <Text>Don't have an account?</Text>
            <TouchableOpacity>
              <Link href="/Signup">
                <Text style={{ color: "#0874d7", fontWeight: "400" }}>
                  Signup
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
});
