import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import color from "@/styles/color";
import { getPosts } from "@/features/post/postThunks";
import { useAppDispatch, useAppSelector } from "@/store";
import Post from "@/components/Post";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function profile() {
  const posts = useAppSelector((state) => state.post.posts);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <View style={{ alignSelf: "center" }}>
        <View style={styles.bg}>
          <Image
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              opacity: 0.45,
              zIndex: 0,
              borderBottomRightRadius: 80,
              borderBottomLeftRadius: 80,
            }}
            source={require("@/assets/images/8870370_4031277.jpg")}
          />
        </View>

        <View style={styles.profileImage}>
          <Image
            source={{
              uri: "https://media.licdn.com/dms/image/D4E35AQGYxPCbrFWhCg/profile-framedphoto-shrink_400_400/0/1708424038495?e=1710777600&v=beta&t=3repJB8XqgWXKG6r7scysExArttDbqe898JTQREzqMM",
            }}
            style={styles.image}
            resizeMode="center"
          ></Image>
        </View>
        <View style={styles.dm}>
          <MaterialIcons
            name="mode-of-travel"
            size={20}
            color="red"
          ></MaterialIcons>
        </View>
        <View style={styles.active}></View>
        <View style={styles.add}>
          <Link href="/addPost">
            <Ionicons name="add" size={37} color="#DFD8C8"></Ionicons>
          </Link>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <AntDesign name="pushpino" size={24} color="black" />
        <Text style={[styles.text, { fontWeight: "200", fontSize: 26 }]}>
          Sedik Rammach
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          gap: 10,
        }}
      >
        <Text style={{ color: "green", fontSize: 16 }}>WhatsApp</Text>
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 100,
            backgroundColor: "green",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link href="whatsapp://send?text=👋&phone=0645448595">
            <FontAwesome name="whatsapp" size={30} color="white" />
          </Link>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          padding: 20,
          justifyContent: "space-between",
          marginTop: 20,
          height: 65,
        }}
      >
        <Image
            style={{
              height: 65,
              width: 500,
              position: "absolute",
              top: 0,
              opacity: 0.45,
              zIndex: 0,
            }}
            source={require("@/assets/images/8870370_4031277.jpg")}
          />
          <View style={{flexDirection:'row',gap:10}}>
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: "#6dc0fc",
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons  color="white" name="postage-stamp" size={25} />
        </View> 
        <Text style={{ color: "black", fontSize: 18,fontWeight:'600' }}>Posts</Text>
        </View>
        <View
          style={{
            width: 95,
            height: 35,
            backgroundColor: "black",
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            gap: 4,
          }}
        >
          <Text style={{ fontSize: 16, padding: 5, color: "white" }}>Add</Text>
          <AntDesign style={styles.icon} color="white" name="right" size={18} />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          padding: 20,
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
        keyExtractor={(item, index) => item.id?.toString() ?? index.toString()}
        numColumns={2}
        // horizontal
        // showsHorizontalScrollIndicator={false}

        renderItem={({ item }) => <Post item={item} />}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  icon: {
    margin: 5,
  },
  text: {
    color: "#52575D",
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
    borderRadius: 100,
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16,
  },
  subText: {
    fontSize: 12,
    color: "#AEB5BC",
    textTransform: "uppercase",
    fontWeight: "500",
  },
  profileImage: {
    position: "absolute",
    top: 30,
    left: 130,
    right: 0,
    width: 140,
    height: 140,
    borderRadius: 999,
    borderWidth: 5,
    borderColor: "white",

    // overflow: "hidden",
  },
  dm: {
    backgroundColor: "white",
    position: "absolute",
    top: 28,
    left: 135,
    width: 30,
    height: 30,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  active: {
    backgroundColor: "#34FFB9",
    position: "absolute",
    top: 160,
    left: 10,
    padding: 4,
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  add: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: 170,
    right: 40,
    width: 50,
    height: 50,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",

    marginTop: 16,
  },

  mediaImageContainer: {
    width: 180,
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10,
  },
  mediaCount: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: "50%",
    marginTop: -50,
    marginLeft: 30,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.38)",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    shadowOpacity: 1,
  },
  recent: {
    marginLeft: 78,
    marginTop: 32,
    marginBottom: 6,
    fontSize: 10,
  },
  recentItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  activityIndicator: {
    backgroundColor: "#CABFAB",
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 20,
  },
  bg: {
    // position:'absolute',
    // top:0,
    // left:0,
    // right:80,
    height: 200,
    width: 400,
    // borderRadius: 100,
    borderBottomRightRadius: 80,
    borderBottomLeftRadius: 80,
    backgroundColor: color.red,
    zIndex: 0,
  },
  imageHorizontal: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
});
