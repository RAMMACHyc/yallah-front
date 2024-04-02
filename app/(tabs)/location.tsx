import React, { useState } from "react";
import {
  View,
  Button,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import MapView, { Marker, LatLng } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import ListPlaces from "@/components/ListPlaces";
import { useAppSelector } from "@/store";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import { AntDesign } from "@expo/vector-icons";
import FilterByCategory from "@/components/FilterByCategory";
import { CategoryType } from "@/types/category";
import { CityType } from "@/types/city";

const location: React.FC = () => {
  const [coordinates, setCoordinates] = useState<LatLng | null>(null);
  const [selectedCity, setSelectedCity] = useState<CityType | null>(null);
  const [show, setShow] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(null);
  const [open, setOpen] = useState(false);
  const navigation = useNavigation();
  const handleMapPress = (event: LatLng) => {
    setCoordinates(event);
  };
  const categories = useAppSelector((state) => state.category.categories); 

  const saveCoordinates = () => {
    console.log("Coordinates saved to database:", coordinates);
  };
  const posts = useAppSelector((state) => state.post.posts);
  const handleGoBack = () => {
    navigation.goBack();
  };
    
  const handleCategorySelection = (selectedCategory: CategoryType) => {
  
    console.log('Selected Category:', selectedCategory);
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        onPress={(event) => handleMapPress(event.nativeEvent.coordinate)}
        initialRegion={{
          latitude: 31.7917,
          longitude: -7.0926,
          latitudeDelta: 10,
          longitudeDelta: 10,
        }}
      >
        {coordinates && <Marker coordinate={coordinates} />}
      </MapView>
      {/* {coordinates && (
        <View style={{ position: "absolute", bottom: 20, left: 20 }}>
          <Text>Latitude: {coordinates.latitude}</Text>
          <Text>Longitude: {coordinates.longitude}</Text>
          <Button title="Save Coordinates" onPress={saveCoordinates} />
        </View>
      )} */}
      <View style={{ position: "absolute", top: 60, left: 20 }}>
        <View style={{ flexDirection: "row", gap: 80 }}>
          <TouchableOpacity onPress={handleGoBack}>
            <Animated.View
              style={{
                height: 50,
                width: 50,
                borderRadius: 999,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                shadowColor: "#F02A4B",
                shadowOffset: { height: 10, width: 0 },
              }}
            >
              <Ionicons
                name="chevron-back-sharp"
                size={25}
                color="gray"
                style={{ padding: 10 }}
              />
            </Animated.View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 100,
              height: 35,
              borderRadius: 10,
              backgroundColor: "white",
              marginTop: 10,
            }}
          >
            <Text
              style={{ textAlign: "center", padding: 5, fontWeight: "900" }}
            >
              Location
            </Text>
          </TouchableOpacity>
          <View
            style={{
              height: 55,
              width: 55,
              borderRadius: 999,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              shadowColor: "#F02A4B",
              shadowOffset: { height: 10, width: 0 },
            }}
          >
            <Image
              source={require("@/assets/images/logo1.png")}
              style={{ height: 50, width: 50 }}
            />
          </View>
        </View>
        <View style={{ flexDirection: "column", gap: 5, marginTop: 20 }}>
          <View style={{flexDirection: "row", gap: 5}}>
          <TouchableOpacity onPress={() => setOpen(!open)}>
              <Animated.View
                style={{
                  height: 55,
                  width: 55,
                  borderRadius: 999,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#00000010",
                  shadowColor: "#F02A4B",
                  shadowOffset: { height: 10, width: 0 },
                }}
                
              >
                <AntDesign
                  name="filter"
                  size={25}
                  color="white"
                  style={{ padding: 10 }}
                />
                 
              </Animated.View>
           </TouchableOpacity>
           {open && (
            <FlatList
              data={categories}
              keyExtractor={(item, index) =>
              item._id?.toString() ?? index.toString()
              }
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => <FilterByCategory item={item} onCategorySelect={handleCategorySelection}   />}
            />
            )}
          </View>
          <TouchableOpacity onPress={() => setShow(!show)}>
            <Animated.View
              style={{
                height: 55,
                width: 55,
                borderRadius: 999,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#00000010",
                shadowColor: "#F02A4B",
                shadowOffset: { height: 10, width: 0 },
              }}
            >
              <AntDesign
                name="eye"
                size={25}
                color="white"
                style={{ padding: 10 }}
              />
            </Animated.View>
          </TouchableOpacity>
          <TouchableOpacity>
            <Animated.View
              style={{
                height: 55,
                width: 55,
                borderRadius: 999,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#00000010",
                shadowColor: "#F02A4B",
                shadowOffset: { height: 10, width: 0 },
              }}
            >
              <Ionicons
                name="gift"
                size={25}
                color="white"
                style={{ padding: 10 }}
              />
            </Animated.View>
          </TouchableOpacity>
        </View>
      </View>
      {show && (
        <Animated.View
          style={{ position: "absolute", top: 470 }}
          entering={FadeInUp.delay(200).duration(1000).springify()}
        >
          <FlatList
            data={posts}
            keyExtractor={(item, index) =>
              item.id?.toString() ?? index.toString()
            }
            renderItem={({ item }) => <ListPlaces item={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </Animated.View>
      )}
    </View>
  );
};

export default location;
