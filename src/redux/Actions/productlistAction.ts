// import {createAsyncThunk} from '@reduxjs/toolkit';
// import axios from 'axios';

// const FETCH_PRODUCT_LIST = 'fetchProduct';

// export const fetchProduct = createAsyncThunk(FETCH_PRODUCT_LIST, async () => {
//   let response = await axios.get('https://fakestoreapi.com/products');
//   return response;
// });

import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const FETCH_PRODUCT_LIST = 'fetchProductList';

export const fetchProductList = createAsyncThunk(
  FETCH_PRODUCT_LIST,
  async () => {
    try {
      let response = await axios.get('https://fakestoreapi.com/products');
      return response;
    } catch (err) {
      return err;
    }
    // dispatch(fleshme({te}, "message"))
  },
);
