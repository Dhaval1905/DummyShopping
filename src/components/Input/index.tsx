import React from 'react';
import {Image, TextInput, View} from 'react-native';
import {colors} from '../../theme/colors';

interface IInput {
  value: string;
  onChage: Function;
  height: number;
  placeholder?: string;
  placeholderTextColor?: string;
}

const Input = ({
  value,
  onChage,
  height,
  placeholder,
  placeholderTextColor,
}: IInput) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 10,
        paddingLeft: 20,
        paddingRight: 20,
      }}>
      <Image
        source={require('../../assets/images/search.png')}
        style={{height: 23, width: 23}}
      />
      <TextInput
        value={value}
        onChangeText={() => onChage()}
        style={{
          height: height,
          width: '100%',
          fontSize: 16,
          marginLeft: 15,
        }}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
      />
    </View>
  );
};

export default Input;
