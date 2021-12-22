import { createSlice } from '@reduxjs/toolkit';

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    country: '',
    countryCode: '',
    weather: 0,
    loaded: false,
  },
  reducers: {
    changeCountry: (state, action) => {
      state.country = action.payload.country;
      state.loaded = false;
    },
    countryLoaded: (state, action) => {
      state.weather = action.payload;
      state.loaded = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeCountry, countryLoaded } = weatherSlice.actions;

export default weatherSlice.reducer;
