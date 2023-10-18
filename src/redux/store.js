import { configureStore } from '@reduxjs/toolkit';
import {
  contactReducer,
  nameReducer,
  numberReducer,
  filterReducer,
} from './reducer';
export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
    name: nameReducer,
    number: numberReducer,
  },
});
