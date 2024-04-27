import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import StyledText from '../StyledText/StyledText';
import { s } from './MeteoBasic.style';
import Clock from '../Clock/Clock';

type MeteoBasicProps = {
  temperature: number;
  city: string;
  interpretation: { codes: number[]; label: string; image: any; };
  onPress: () => void;
};
const MeteoBasic = ({ temperature, city, interpretation, onPress }:MeteoBasicProps) => {
  return (
    <>
      <View style={s.clock}>
        <Clock />
      </View>
      <StyledText>{city}</StyledText>
      <StyledText style={s.label}>Label</StyledText>
      <View style={s.temperature_box}>
        <TouchableOpacity onPress={onPress}>
          <StyledText style={s.temperature}>{temperature + '*'}</StyledText>
        </TouchableOpacity>
        <Image style={s.image} source={interpretation.image} />
      </View>
    </>
  );
};

export default MeteoBasic;
