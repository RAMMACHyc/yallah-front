import React, { useEffect, useState } from "react";
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
import { useAppDispatch, useAppSelector } from "@/store";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import DropdownComponent from "@/components/Dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
import FilterByCategory from "@/components/FilterByCategory";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { CategoryType } from "@/types/category";
import { CityType } from "@/types/city";
import { createPlace } from "@/features/place/placeThunks";
import { TextInput } from "react-native";

const addPlace: React.FC = () => {
  const [coordinates, setCoordinates] = useState<LatLng | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(
    null
  );
  const [placeName, setPlaceName] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<CityType | null>(null);
  const [open, setOpen] = useState(false);
  const navigation = useNavigation();

  const handleMapPress = (event: LatLng) => {
    setCoordinates(event);
  };
  const categories = useAppSelector((state) => state.category.categories);
  const dispatch = useAppDispatch();
  const handleGoBack = () => {
    navigation.goBack();
  };
  const handleCitySelection = (city: CityType | null) => {
    setSelectedCity(city);
  };

  const handleCategorySelection = (selectedCategory: CategoryType) => {
    setSelectedCategory(selectedCategory);
  };
  const onSubmit = () => {
    if (selectedCategory && coordinates && selectedCity && placeName) {
      const data = {
        categoryId: selectedCategory._id,
        location: coordinates,
        city: selectedCity.name,
        placeName: placeName,
      };
      dispatch(createPlace(data));
    }
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
      {coordinates && (
        <Animated.View
          style={{ position: "absolute", bottom: 80, left: 120 }}
          entering={FadeInUp.delay(200).duration(1000).springify()}
        >
          <TextInput
            style={{
              width: 150,
              height: 40,
              borderWidth: 1,
              borderColor: "gray",
              borderRadius: 20,
              padding: 10,
              marginBottom: 10,
            }}
            placeholder="Place Name"
            value={placeName}
            onChangeText={(text) => setPlaceName(text)}
          />
          <TouchableOpacity
            style={{
              width: 150,
              height: 45,
              backgroundColor: "blue",
              borderRadius: 20,
            }}
            onPress={onSubmit}
          >
            <Animated.View
              style={{
                flexDirection: "row",
                gap: 20,
                justifyContent: "center",
                padding: 10,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "800",
                }}
              >
                Share Place
              </Text>
              <MaterialIcons name="share-location" size={24} color="white" />
            </Animated.View>
          </TouchableOpacity>
        </Animated.View>
      )}
      <View style={{ position: "absolute", top: 60, left: 20 }}>
        <View style={{ flexDirection: "row", gap: 80 }}>
          <TouchableOpacity onPress={handleGoBack}>
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
                name="chevron-back-sharp"
                size={25}
                color="white"
                style={{ padding: 10 }}
              />
            </Animated.View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 100,
              height: 35,
              borderRadius: 10,
              marginTop: 10,
            }}
          >
            <DropdownComponent onCitySelect={handleCitySelection} />
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
        <View
          style={{ flexDirection: "column", gap: 5, marginTop: 20, width: 70 }}
        >
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
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <FilterByCategory
                  item={item}
                  onCategorySelect={handleCategorySelection}
                />
              )}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default addPlace;
