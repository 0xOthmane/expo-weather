import React from 'react';
import { Text, useWindowDimensions, TextStyle  } from 'react-native';
import { s } from './StyledText.style';

type MeteoBasicProps = {
  children: string |string[];
  style?: TextStyle;
};
const StyledText = ({ children, style }: MeteoBasicProps) => {
  const { height } = useWindowDimensions();
  const fontSize = style?.fontSize || s.text.fontSize;
  const echelle = 1 / height;

  return (
    <Text style={[s.text, style, { fontSize: fontSize * echelle * height }]}>
      {children}
    </Text>
  );
};

export default StyledText;
