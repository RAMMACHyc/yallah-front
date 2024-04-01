import { FlatList, StyleSheet, Text, View } from "react-native";

import React from "react";
import SearchInput from "@/components/SearchInput";
import Feather from "react-native-vector-icons/Feather";
import { useAppDispatch, useAppSelector } from "@/store";
import { getPosts } from "@/features/post/postThunks";
import Places from "@/components/Places";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";


const settings = () => {
  const posts = useAppSelector((state) => state.post.posts);
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <View style={{ backgroundColor:"white", position: "relative",marginTop:20,height:"100%" }}>
      <View style={[styles.container]}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <Text style={{ fontSize: 30, fontWeight: "700", color: "#545264" }}>
            Hi User
          </Text>
        </View>
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
       <View >
         <FlatList 
            data={posts}
            keyExtractor={(item, index) => item.id?.toString() ?? index.toString()}
            renderItem={({ item }) => <Places item={item} />}
            numColumns={2} 
            columnWrapperStyle={styles.columnWrapper}    
          />
        </View>
        <View style={{width:150,height:40,backgroundColor:'blue',borderRadius:20,position:'absolute',top:670,left:120}} >
          <Link href="/addPlace">
          <View style={{flexDirection:'row',gap:20,justifyContent:'center',padding:10}}>
          <Text style={{textAlign:'center',color:'white',fontWeight:'800'}}>Top Places</Text>
          <AntDesign name="doubleright" size={24} color="white" />
          </View>
          </Link>
        </View>
    </View>
  );
};

export default settings;

const styles = StyleSheet.create({
  searchBar: {
    marginTop: 20,
  },
  container: {
    position: "relative",
    padding: 20,
  },
  columnWrapper: {
    margin: 6, 
  },
});
