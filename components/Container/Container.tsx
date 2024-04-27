import React from 'react';
import { ImageBackground } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { s } from './Container.style';
import fond from '../../assets/fond.jpg';

type ContainerProps = {
  children: React.ReactElement[];
};

const Container = ({ children }: ContainerProps) => {
  return (
    <ImageBackground source={fond} style={s.img_backgound} imageStyle={s.img}>
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>{children}</SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
};

export default Container;
