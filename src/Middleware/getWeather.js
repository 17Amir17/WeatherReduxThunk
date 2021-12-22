import { capitals } from './capitals';
import axios from 'axios';
import { countryLoaded } from '../Reducers/WeatherReducer';

async function getWeather(country) {
  const countryCapital = capitals.find(({ name }) => name === country);
  let capital;
  if (countryCapital) {
    capital = countryCapital.capital;
  } else return 0;
  const URL = `https://api.weatherapi.com/v1/current.json?key=971eafee25564e0aa44125106212212%20&q=${capital}&aqi=no`;
  try {
    const res = await axios.get(URL);
    return res.data;
  } catch (error) {
    console.log(error);
    return false;
  }
}

// //thunk action
// export function getWeatherAction(country) {
//   console.log('Hello there!');
//   //thunk function
//   return async function getWeatherThunk(dispatch, _getState) {
//     const weather = await getWeather(country);
//     console.log(weather);
//     if (weather) dispatch(countryLoaded(weather.current.temp_c));
//   };
// }

//thunk action arrow
export const getWeatherAction = (country) => async (dispatch) => {
  //thunk functio
  const weather = await getWeather(country);
  console.log(weather);
  if (weather) dispatch(countryLoaded(weather));
};
