import React from 'react';
import {Dimensions, Image, SafeAreaView, Text, View} from 'react-native';
import {styles} from './styles';
import {colors} from '../../theme/colors';
import {Rating} from 'react-native-rating-element';

const ProductDetails = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 200,
          width: '100%',
          backgroundColor: colors.black,
          borderBottomLeftRadius: 300,
          borderBottomRightRadius: 300,
        }}>
        <Image
          source={{
            uri: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
          }}
          style={{
            height: 150,
            width: Dimensions.get('screen').width / 2,
            alignSelf: 'center',
            position: 'absolute',
            top: '55%',
          }}
        />
      </View>
      <View style={{marginTop: '25%', width: '90%', alignSelf: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 24, color: colors.black, fontWeight: 'bold'}}>
            Title
          </Text>
          <Text style={{fontSize: 24, color: colors.black, fontWeight: 'bold'}}>
            $30
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            color: colors.black,
            fontWeight: 'bold',
            marginTop: '3%',
          }}>
          Air Force 1 Shadow Beige Pale Ivory
        </Text>
        <View
          style={{borderWidth: 1, borderColor: '#D8D8DD', marginTop: '2%'}}
        />
        <Text
          style={{
            fontSize: 16,
            color: colors.grey,
            marginTop: '3%',
          }}>
          hdhd
        </Text>
        <View style={{borderWidth: 1, borderColor: '#D8D8DD'}} />
        <Text
          style={{
            fontSize: 16,
            color: colors.black,
            fontWeight: 'bold',
            marginTop: '3%',
          }}>
          Rating
        </Text>
        <Rating
          rated={3.7}
          totalCount={5}
          ratingColor="#f1c644"
          ratingBackgroundColor="#d4d4d4"
          size={24}
          readonly // by default is false
          icon="ios-star"
          direction="row" // anyOf["row" (default), "row-reverse", "column", "column-reverse"]
        />
      </View>
    </View>
  );
};

export default ProductDetails;
