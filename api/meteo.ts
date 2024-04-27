import axios from 'axios';

export class MeteoAPI {
  static async fetchWeatherFromCoords(coords: { lat: number; lng: number }) {
    return (
      await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`
      )
    ).data;
  }

  static async fetchCityFromCoords(coords: { lat: number; lng: number }) {
    const {
      address: { city, village, town },
    } = (
      await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.lat}&lon=${coords.lng}`
      )
    ).data;
    return city || village || town;
  }

  static async fetchCoordsFromCity(city: string) {
    try {
      const { latitude: lat, longitude: lng } = (
        await axios.get(
          `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=fr&format=json`
        )
      ).data.results[0];
      return { lat, lng };
    } catch (e) {
      throw "La ville n'est pas trouvée";
    }
  }
}
