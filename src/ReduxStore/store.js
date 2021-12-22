import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from '../Reducers/WeatherReducer'

export default configureStore({
  reducer: {
      weather: weatherReducer
  },
})