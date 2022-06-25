import {StyleSheet} from 'react-native';
import {style} from '../../variables/style';

export const defaultStyle = StyleSheet.create({
  titlePage: {
    fontSize: 18,
    color: style.color.tundora,
    fontWeight: '700',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  subTitlePage: {
    fontSize: 14,
    color: style.color.tundora,
    paddingLeft: 20,
    paddingRight: 20,
  },
  smallLine: {
    width: 28,
    height: 1,
    backgroundColor: style.color.doveGrayAdd,
    marginLeft: 20,
    marginTop: 10,
  },
  titleBlock: {
    fontSize: 16,
    padding: 20,
    fontWeight: '700',
  },
});
