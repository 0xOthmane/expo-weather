import React from "react";
import { Image, View } from "react-native";
import StyledText from "../StyledText/StyledText";
import { s } from "./ForecastListItem.style";

const ForecastListItem = ({ image, day, date, temperature }) => {
  return (
    <View style={s.container}>
      <Image style={s.image} source={image} />
      <StyledText style={s.day}>{day}</StyledText>
      <StyledText style={s.date}>{date}</StyledText>
      <StyledText>{temperature}&deg;</StyledText>
    </View>
  );
};

export default ForecastListItem;
