import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import { changeCountry } from '../Reducers/WeatherReducer';
import { getWeatherAction } from '../Middleware/getWeather';

export default function WeatherWidget(props) {
  const { weather, country, countryCode, loaded } = useSelector(
    (state) => state.weather
  );
  const dispatch = useDispatch();
  const options = React.useMemo(() => countryList().getData(), []);

  const onCountryChange = (country) => {
    const { label, value } = country;
    dispatch(changeCountry({ country: label, countryCode: value }));
    dispatch(getWeatherAction(label));
  };

  console.log(weather);
  return (
    <div className="widget">
      <Select
        options={options}
        value={{ label: country, value: countryCode }}
        onChange={onCountryChange}
      />
      {loaded ? (
        <>
          <p className="country">
            {weather.location.name}, {weather.location.country}
          </p>
          <p className="condition">
            {weather.current.condition.text}{' '}
            <img src={weather.current.condition.icon}></img>
          </p>
          <p className="temp">{weather.current.temp_c}°C</p>
          <p className="feels-like">
            Feels Like: {weather.current.feelslike_c}°C
          </p>
        </>
      ) : (
        <span>No country selected or invalid country</span>
      )}
    </div>
  );
}
