import { FlatList, StyleSheet, Text, View, Image } from "react-native";

import React, { useState } from "react";
import SearchInput from "@/components/SearchInput";
import Feather from "react-native-vector-icons/Feather";
import { useAppDispatch, useAppSelector } from "@/store";
import { getPosts } from "@/features/post/postThunks";
import Places from "@/components/Places";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import useUserData from "@/hook/useUserData";
import { BlurView } from "expo-blur";
import color from "@/styles/color";

const settings = () => {
  const posts = useAppSelector((state) => state.post.posts);
  const dispatch = useAppDispatch();
  const userData = useUserData();

  React.useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <View
      style={{
        backgroundColor: "white",
        position: "relative",
        marginTop: 25,
        height: "100%",
      }}
    >
      <BlurView
        intensity={200}
        style={{
          flex: 1,
          zIndex: 1,
          height: "90%",
          position: "absolute",
          width: "100%",
          top: 10,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0000ff24",
        }}
      >  
      <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:40,fontWeight:"700",color:"blue"}}>Y</Text>
      <Text style={{fontSize:10,fontWeight:"700",color:"black"}}>a</Text>
      <Text style={{fontSize:10,fontWeight:"700",color:"black"}}>L</Text>
      <Text style={{fontSize:40,fontWeight:"700",color:"black"}}>L</Text>
      <Text style={{fontSize:10,fontWeight:"700",color:"black"}}>a</Text>
      <Text style={{fontSize:40,fontWeight:"700",color:"gray"}}>H</Text>
      </View>

      <View style={{width:150,height:150,justifyContent:"center",alignItems:"center",borderRadius:100,backgroundColor:"white",shadowColor: "black", shadowOffset: { width: 2, height: 3, }}}>
       
        <Image
          style={{
            width: 100,
            height: 100,
            
          }}
          source={require("@/assets/images/3815081_2004111-removebg-preview.png")}
        />
        </View>
      </BlurView>
      <View style={[styles.container]}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            zIndex: 12,
          }}
        >
          {userData ? (
            <View>
              <Text style={{ fontSize: 30, fontWeight: "700", color: "blue" }}>
                Hi{" "}
                <Text
                  style={{ fontSize: 20, fontWeight: "600", color: "#545264" }}
                >
                  {userData?.user.username}
                </Text>
              </Text>
            </View>
          ) : (
            <Text>Loading user data...</Text>
          )}

          <View>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: "#9d9d9d8a",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 100,
              }}
            >
              <Feather name="bookmark" size={24} color="white" />
            </View>
          </View>
        </View>
        <View style={[styles.searchBar]}>
          <SearchInput />
        </View>
      </View>

      <FlatList
        data={posts}
        keyExtractor={(item, index) => item.id?.toString() ?? index.toString()}
        renderItem={({ item }) => <Places item={item} />}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />

      <Animated.View
        style={{
          width: 150,
          height: 40,
          backgroundColor: "blue",
          borderRadius: 20,
          position: "absolute",
          top: 670,
          left: 120,
          zIndex: 12,
        }}
        entering={FadeInUp.delay(200).duration(1000).springify()}
      >
        <Link href="/addPlace">
          <View
            style={{
              flexDirection: "row",
              gap: 20,
              justifyContent: "center",
              padding: 10,
            }}
          >
            <Text
              style={{ textAlign: "center", color: "white", fontWeight: "800" }}
            >
              Top Places
            </Text>
            <AntDesign name="doubleright" size={24} color="white" />
          </View>
        </Link>
      </Animated.View>
    </View>
  );
};

export default settings;

const styles = StyleSheet.create({
  searchBar: {
    marginTop: 20,
    zIndex: 12,
  },
  container: {
    position: "relative",
    padding: 20,
  },
  columnWrapper: {
    margin: 6,
  },
});
