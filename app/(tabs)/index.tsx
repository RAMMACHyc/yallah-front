import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native";
import ListHeader from "../../components/ListHeader";
import Categorys from "../../components/Category";
import ListPlaces from "../../components/ListPlaces";
import color from "../../styles/color";
import DropdownComponent from "../../components/Dropdown";
import { useOnBoarding } from "../../utils/useOnboarding";
import { useAppDispatch, useAppSelector } from "@/store";
import { getCategories } from "@/features/category/categoryThunks";
import { getPosts } from "@/features/post/postThunks";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function HomeScreen(props: any) {
  const categories = useAppSelector((state) => state.category.categories);
  const posts = useAppSelector((state) => state.post.posts);
  

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getPosts());
  }, [dispatch]);

  useOnBoarding();
  return (
    <SafeAreaView style={[styles.container]}>
      <ListHeader />
      <View
        style={{
          height: 100,
          marginTop: 10,
        }}
        >
        <FlatList
          data={categories}
          keyExtractor={(item, index) =>
            item._id?.toString() ?? index.toString()
          }
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <Categorys item={item} />}
        />
      </View>

      <View
        style={{
          backgroundColor: color.gray,
          borderTopEndRadius: 30,
          borderTopStartRadius: 30,
          width: "100%",
          height: 450,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            margin: 25,
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", padding: 7 }}>
            Popular Places
          </Text>
          <AntDesign style={styles.icon} color="#41444B" name="find" size={30} /> 
        </View>
        <FlatList
          data={posts}
          keyExtractor={(item, index) =>
            item.id?.toString() ?? index.toString()
          }
          renderItem={({ item }) => <ListPlaces item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      {/* <Link href="/location">Settings</Link> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "white",
  },
  icon: {
    margin: 5,
  },
});
