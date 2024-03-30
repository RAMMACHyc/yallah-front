import React, { useState } from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { CategoryType } from "@/types/category";

type Props = {
  item: CategoryType;
};

const Categorys = ({ item }: Props) => {
  const iconName = item.IconName || "";
  return (
    <>
      <TeamItemBox>
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            borderRadius: 20,
            backgroundColor: item.color,
          }}
        ></View>
        <Icon name={iconName} size={30} color="white" /> 
          <Text style={{position:'absolute',top:60 }}>{item.name}</Text>
      </TeamItemBox>
   
    </>
  );
};

const TeamItemBox = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 70px;
  margin: 15px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

export default Categorys;
