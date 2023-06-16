import React from 'react';

import {
  Dimensions,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {colors} from '../../theme/colors';
import {styles} from './styles';

interface IProduct {
  productImage: string;
  productTitle: string;
  productDesc: string;
  price: string;
}

const Card = ({productImage, productTitle, productDesc, price}: IProduct) => {
  return (
    <View style={styles.card}>
      <View style={styles.heartDiv}>
        <Image
          source={require('../../assets/images/heart.png')}
          style={styles.img}
          resizeMode="contain"
        />
      </View>
      <View style={styles.pDiv}>
        <Image
          source={{
            uri: productImage,
          }}
          style={styles.pImg}
        />
      </View>
      <View style={{padding: 15}}>
        <Text style={styles.hTxt}>{productTitle}</Text>
        <Text numberOfLines={2} style={styles.dTxt}>
          {productDesc}
        </Text>
        <Text style={styles.pTxt}>$ {price}</Text>
      </View>
    </View>
  );
};

export default Card;
