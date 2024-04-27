import React from 'react';
import StyledText from '../../components/StyledText/StyledText';
import Container from '../../components/Container/Container';
import { useRoute, useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View } from 'react-native';
import { s } from './ForeCast.style';
import ForecastListItem from '../../components/ForecastListItem/ForecastListItem';
import { getWeatherInterpretation } from '../../services/meteo-services';
import { DAYS, dateToDDMM } from '../../services/data-service';


const ForeCast = () => {
  const { params } = useRoute();
  const nav = useNavigation();
  const backButton = (
    <TouchableOpacity style={s.back_btn} onPress={() => nav.goBack()}>
      <StyledText>&#60;</StyledText>
    </TouchableOpacity>
  );
  const header = (
    <View style={s.header}>
      {backButton}
      <View style={s.header_texts}>
        <StyledText>{params.city}</StyledText>
        <StyledText style={s.subtitle}>Prévision sur 7 jours</StyledText>
      </View>
    </View>
  );
  const forcastList = (
    <View>
      {params.time.map((time, index) => {
        const code = params.weathercode[index];
        const image = getWeatherInterpretation(code)!.image;
        const date = new Date(time);
        const day = DAYS[new Date(time).getDay()];
        const temperature = params.temperature_2m_max[index];
        return (
          <ForecastListItem
            image={image}
            day={day}
            key={time}
            date={dateToDDMM(date)}
            temperature={temperature.toFixed(0)}
          />
        );
      })}
    </View>
  );
  return (
    <Container>
      {header}
      <View style={{ marginTop: 50 }}>{forcastList}</View>
    </Container>
  );
};

export default ForeCast;
