import React, { useEffect, useState } from 'react';
import {
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from 'expo-location';
import { MeteoAPI } from '../../api/meteo';
import { useNavigation } from '@react-navigation/native';
import { getWeatherInterpretation } from '../../services/meteo-services';

import Container from '../../components/Container/Container';
import MeteoBasic from '../../components/MeteoBasic/MeteoBasic';
import SearchBar from '../../components/SearchBar/SearchBar';
import MeteoAdvanced from '../../components/MeteoAdvanced/MeteoAdvanced';

import { Weather } from '../../types/index';
import { Alert, View } from 'react-native';
import { s } from './Home.style';

export const Home = () => {
  const [coords, setCoords] = useState<{ lat: number; lng: number }>();
  const [weather, setWeather] = useState<Weather>();
  const currentWeather = weather?.current_weather;
  const [city, setCity] = useState('');
  const nav = useNavigation();

  useEffect(() => {
    getUserCoords();
  }, []);

  useEffect(() => {
    async function fetchWeather(coords: { lat: number; lng: number }) {
      const weatherResp = await MeteoAPI.fetchWeatherFromCoords(coords);
      setWeather(weatherResp);
    }
    async function fetchCity(coords: { lat: number; lng: number }) {
      const cityResp = await MeteoAPI.fetchCityFromCoords(coords);
      setCity(cityResp);
    }
    if (coords) {
      fetchCity(coords);
      fetchWeather(coords);
    }
  }, [coords]);

  async function getUserCoords() {
    let { status } = await requestForegroundPermissionsAsync();
    if (status === 'granted') {
      const location = await getCurrentPositionAsync();
      setCoords({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } else {
      setCoords({ lat: 48.85, lng: 2.35 });
    }
  }

  async function fetchCoordsByCity(city: string) {
    try {
      const coords = await MeteoAPI.fetchCoordsFromCity(city);
      setCoords(coords);
    } catch (e) {
      Alert.alert('Désoler', (e as Error).message);
    }
  }
  function goToForecastPage() {
    nav.navigate('Forecast', { city, ...weather!.daily });
  }
  return currentWeather ? (
    <Container>
      <View style={s.meteo_basic}>
        <MeteoBasic
          temperature={Math.round(currentWeather?.temperature)}
          city={city}
          interpretation={getWeatherInterpretation(currentWeather.weathercode)!}
          onPress={goToForecastPage}
        />
      </View>
      <View style={s.searchbar}>
        <SearchBar onSubmit={fetchCoordsByCity} />
      </View>
      <View style={s.meteo_advanced}>
        <MeteoAdvanced
          wind={currentWeather.windspeed}
          dusk={weather.daily.sunrise[0].split('T')[1]}
          dawn={weather.daily.sunset[0].split('T')[1]}
        />
      </View>
    </Container>
  ) : null;
};
