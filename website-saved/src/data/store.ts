import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import formSlice from './slices/form-slice';

const reducer = combineReducers({
    form: formSlice.reducer,
});

const store = configureStore({
    reducer,
})

export const formActions = formSlice.actions;
export default store;

/**
 * Infer the `RootState` and `AppDispatch` types from the store itself
 * https://redux.js.org/recipes/usage-with-typescript
 */
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// https://redux.js.org/recipes/usage-with-typescript
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;