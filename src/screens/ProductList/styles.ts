import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  subContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  img: {
    height: 25,
    width: 25,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    width: '85%',
  },
  headerTxt: {
    fontSize: 30,
    color: colors.black,
    fontWeight: '800',
  },
  subHeaderTxt: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.black,
    marginTop: 8,
  },
});
