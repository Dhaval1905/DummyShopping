import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {
  IProductListReducerType,
  productListReducer,
} from './productListReducer';

interface IStore {
  productListReducer: IProductListReducerType;
}

const reducers = combineReducers({
  productListReducer: productListReducer,
});

export {reducers};
export type {IStore};
