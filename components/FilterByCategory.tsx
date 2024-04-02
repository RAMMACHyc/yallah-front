import React, { useState } from "react";
import {  Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { CategoryType } from "@/types/category";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import { useAppDispatch } from "@/store";


type Props = {
  item: CategoryType;
  onCategorySelect: (category: CategoryType) => void;


};

const FilterByCategory = ({ item,onCategorySelect }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(null);
    const iconName = item.IconName || "";
    const isSelected = selectedCategory?._id === item._id;
    const dispatch = useAppDispatch();


    const handleCategory = () => {
      setSelectedCategory(item);
      onCategorySelect(item);
      console.log("selectedCategory",selectedCategory?._id)
  
    




    };

    // const data = {
    //   categoryId: selectedCategory?._id,
    //   location: coordinates,
    //   city: selectCity?.name
    // }
 
  
  return (
    <>
       <TouchableOpacity style={{marginLeft:0,marginTop:4}} onPress={handleCategory}>
              <Animated.View
                style={{
                  height: 55,
                  width: 55,
                  borderRadius: 999,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: isSelected ? item.color : '#00000050',
                  shadowColor: "#F02A4B",
                  shadowOffset: { height: 10, width: 0 },
                }}
                entering={FadeInUp.delay(200).duration(1000).springify()}
              >
                 <Icon name={iconName} 
                  size={25}
                  color="white"
                //   style={{ padding: 10 }}
                />
                
              </Animated.View>
              
       </TouchableOpacity>

       
       </>
  );
};


export default FilterByCategory;
