import { StyleSheet, Text, View, Image, Alert } from "react-native";
import { Link, useNavigation, useRouter } from "expo-router";
import React, { useEffect } from "react";
import color from "@/styles/color";
import { API_URL } from "@/constants/API_URL";
import AntDesign from "react-native-vector-icons/AntDesign";
import { PostType } from "@/types/post";
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { useAppDispatch } from "@/store";
import { deletePost } from "@/features/post/postThunks";
type Props = {
    item: any;
  };


const Places = ({ item }: Props) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const DeletePost = () => {
    Alert.alert(
      "Delete Post",
      "Are you sure you want to delete this post?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",  
          onPress: () =>
            {
            dispatch(deletePost(item._id)) 
              .then(() => {
                navigation.goBack();
              })
              .catch((error) => {
                console.error("Error deleting post:", error); 
              });
          },
          style: "destructive",
        },
      ],
      { cancelable: false }
    );
  };

   
  return (

     
      <View
        style={{
          width: "90%",
          height: 90,
          backgroundColor: "white",
          borderRadius: 20,
          marginLeft: 16,
          flexDirection: "row",marginTop:10,
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
            width: 80,
            height: 80,
            margin: 3,
            borderRadius: 20,
            position: "relative",
            objectFit: "cover",
          }}
        />
          <View style={{flexDirection:'column',justifyContent:'center',gap:4,width:90}}>
              <Text style={{margin:10,fontWeight:"800"}}>{item.title}</Text>
            <View style={{flexDirection:'row',gap:5}}>
               <AntDesign name="enviromento" size={15} color='red'/>
               <Text style={{fontWeight:"500",fontSize:10}}>{item.city}</Text>
            </View>
          </View>
       <View style={{width:200,justifyContent:'center',alignItems:'center'}}>
        <View style={{flexDirection:'row',gap:10}} >
         <TouchableOpacity style={{width:50,height:50,backgroundColor:'#ff5f5fb0',borderRadius:30,justifyContent:'center',alignItems:'center'}} onPress={DeletePost}>
           <MaterialIcons name="delete-outline" size={24} color="white" />
         </TouchableOpacity>
         <View style={{width:50,height:50,backgroundColor:'#615fffb0',borderRadius:30,justifyContent:'center',alignItems:'center'}}>
          <AntDesign name="edit" size={24} color="white" />
         </View>
   
       </View>
        </View>
      </View>
      
   
      
 
  );
};

export default Places;

const styles = StyleSheet.create({});
