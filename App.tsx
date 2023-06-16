import React from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import ProductList from './src/screens/ProductList';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from '@reduxjs/toolkit';
import {reducers} from './src/redux/Reducers';
import thunk from 'redux-thunk';
import ProductDetails from './src/screens/ProductDetails';

const App = () => {
  const store = createStore(reducers, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <ProductDetails />
    </Provider>
  );
};

export default App;
