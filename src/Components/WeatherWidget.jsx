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

  console.log(country);
  return (
    <div>
      <Select
        options={options}
        value={{ label: country, value: countryCode }}
        onChange={onCountryChange}
      />
      {loaded ? (
        <span>
          Country: {country} Weather: {weather}
        </span>
      ) : (
        <span>No country selected</span>
      )}
    </div>
  );
}
