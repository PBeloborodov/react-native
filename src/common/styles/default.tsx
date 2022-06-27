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
  input: {
    width: 150,
    height: 32,
    backgroundColor: style.color.alabaster,
    paddingLeft: 10,
  },
  select: {
    width: 150,
    height: 32,
    backgroundColor: style.color.alabaster,
    paddingLeft: 10,
    display: 'flex',
    justifyContent: 'center',
  },
  MT_30: {
    marginTop: 30,
  },
  filtterBlock: {
    paddingLeft: 20,
    paddingRight: 20,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  filtterBlockBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 12,
    borderRadius: 50,
    marginRight: 12,
    marginBottom: 12,
    borderColor: style.color.blue,
    borderWidth: 1,
  },
  filtterBlockAdd: {
    width: '100%',
  },
  filtterBlockCross: {
    marginLeft: 10,
  },
  filtterBlockBtnText: {
    fontSize: 16,
    color: style.color.blue,
  },
});
