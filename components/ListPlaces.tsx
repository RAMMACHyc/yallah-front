import { StyleSheet, View, Image,Text } from "react-native";
import React from "react";
import color from "../styles/color";
import { Feather } from '@expo/vector-icons';
import Icon from "react-native-vector-icons/MaterialIcons";
import { AntDesign } from '@expo/vector-icons';
import { PostResponce } from "@/types/post";
import { API_URL } from "@/constants/API_URL";


type Props = {
  item: any;
};

const ListPlaces = ({ item }: Props) => {
  
  return (
    <View style={{ flexDirection: "row" }}>
      <View
        style={{
          width: 250,
          height: 270,
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
           source={{ uri: `${API_URL}/uploads/${item.file}` }}
          style={{
            width: "100%",
            height: 150,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            position: "relative",
          }}
        />
        <View style={{position:'absolute',top:20,right:12}}>
          <View style={{flexDirection:'row',gap:145}}>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: color.red,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 100, 
            }}
          >
      <Image
        source={{
          uri: "https://media.licdn.com/dms/image/D4E35AQGYxPCbrFWhCg/profile-framedphoto-shrink_400_400/0/1708424038495?e=1710777600&v=beta&t=3repJB8XqgWXKG6r7scysExArttDbqe898JTQREzqMM",
        }}
        style={{width:30,height:30,borderRadius:50}}
      />
          </View>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: '#9d9d9d8a',
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
            }}
           >
           <Feather name="bookmark" size={24} color="white" />
          </View> 
          </View>
        </View>
        <View style={{flexDirection:'column',gap:16,padding:10}}>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View>
              <Text style={{fontSize:20,fontWeight:'bold'}}>{item.title}</Text>
            </View>
           
            <View style={{flexDirection:'row'}}>
              <Icon name="star" size={20} color={color.yellow} />
              <Text>4.5</Text>
            </View> 
           
          </View>
           <View style={{flexDirection:'row'}}>
           <AntDesign name="enviromento" size={30} color='red'/>
            <Text style={{fontSize:18,fontWeight:'400',color:'gray'}}>{item.city}</Text>
            </View>
          </View>
      </View>
    </View>
  );
};

export default ListPlaces;

const styles = StyleSheet.create({});
