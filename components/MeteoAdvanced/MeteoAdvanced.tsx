import React from 'react';
import { View } from 'react-native';
import StyledText from './../StyledText/StyledText';
import { s } from './MeteoAdvanced.style';

const MeteoAdvanced = ({ wind, dusk, dawn  }:{ wind: number; dusk: string; dawn: string; }) => {
  return (
    <View style={s.container}>
      <View style={{ alignItems: 'center' }}>
        <StyledText style={{ fontSize: 20 }}>{dusk}</StyledText>
        <StyledText style={{ fontSize: 15 }}>Aube</StyledText>
      </View>
      <View style={{ alignItems: 'center' }}>
        <StyledText style={{ fontSize: 20 }}>{dawn}</StyledText>
        <StyledText style={{ fontSize: 15 }}>Crépuscule</StyledText>
      </View>
      <View style={{ alignItems: 'center' }}>
        <StyledText style={{ fontSize: 20 }}>{wind+''}</StyledText>
        <StyledText style={{ fontSize: 15 }}>Vent</StyledText>
      </View>
    </View>
  );
};

export default MeteoAdvanced;
