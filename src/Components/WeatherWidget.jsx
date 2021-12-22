import React from "react";
import { useSelector } from 'react-redux';

export default function WeatherWidget(props){
    const {weather, country, loaded} = useSelector((state) => state.weather);
    return (
        <div>
            {loaded ? <span>Country: {country} Weather: {weather}</span> : <span>No country selected</span>}
        </div>
    )
}