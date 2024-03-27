import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../store/store";
import AddPost from "./addPost";

export default function Layout() {
  return (
    <Provider store={store}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      ></Stack>
    </Provider>
  );
}
