import { createSlice } from '@reduxjs/toolkit'

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    country: '',
    weather: 0,
    loaded: false,
  },
  reducers: {
    getWeather: (state, action) => {
        state.country = action.payload.country;
        state.weather = 30;
    }
  },
})

// Action creators are generated for each case reducer function
export const { getWeather } = weatherSlice.actions

export default weatherSlice.reducer