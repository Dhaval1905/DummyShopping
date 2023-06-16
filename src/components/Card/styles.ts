import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';

export const styles = StyleSheet.create({
  card: {
    // height: Dimensions.get('screen').height / 3.5,
    width: '47%',
    backgroundColor: colors.white,
    borderRadius: 20,
    shadowColor: colors.black,
    marginTop: 20,
    marginLeft: 5,
    marginRight: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  img: {
    height: 25,
    width: 25,
  },
  heartDiv: {
    position: 'absolute',
    right: '8%',
    top: '5%',
  },
  pDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '15%',
  },
  pImg: {height: 90, width: 50},
  hTxt: {
    marginTop: '5%',
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
  },
  dTxt: {marginTop: '3%', fontSize: 16, color: colors.grey},
  pTxt: {
    marginTop: '5%',
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
  },
});
