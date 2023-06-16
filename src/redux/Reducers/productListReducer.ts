import {createSlice} from '@reduxjs/toolkit';
import {fetchProductList} from '../Actions/productlistAction';

const PRODUCTLIST_SLICE_NAME = 'productList';
export interface IProductListReducerType {
  productList: any;
  isLoading: boolean;
}
const productListInitialState: IProductListReducerType = {
  productList: [],
  isLoading: true,
};

const productListSlice = createSlice({
  name: PRODUCTLIST_SLICE_NAME,
  initialState: productListInitialState,
  reducers: {
    onEndReached(state, action) {
      console.log('#######', state.productList);
      console.log('Action is', action.payload);
      state.productList = action.payload;
      return state;
    },
  },
  extraReducers: builder => {
    //@ts-ignore
    builder
      .addCase(fetchProductList.pending, (state: IProductListReducerType) => {
        state.isLoading = true;
        return state;
      })
      .addCase(
        fetchProductList.fulfilled,
        (state: IProductListReducerType, action) => {
          state.productList = action?.payload;
          state.isLoading = false;
          return state;
        },
      )
      .addCase(fetchProductList.rejected, (state: IProductListReducerType) => {
        state.isLoading = false;
        return state;
      });
  },
});
export const {onEndReached} = productListSlice.actions;
export const productListReducer = productListSlice.reducer;
