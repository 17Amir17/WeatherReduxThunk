import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../Reducers/WeatherReducer';

function logger({ getState }) {
  return (next) => (action) => {
    console.log('will dispatch', action);

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action);

    console.log('state after dispatch', getState());

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue;
  };
}

const middleware = [];
if (process.env.NODE_ENV !== 'production') {
  //middleware.push(logger);
}

export default configureStore({
  reducer: {
    weather: weatherReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});
