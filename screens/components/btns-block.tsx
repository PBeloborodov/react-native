import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import Button from '../../src/common/components/button';

type Props = {};

const BtnsBlock: FC<Props> = props => {
  return (
    <View style={styles.wrapBtns}>
      <Button
        onClick={() => {}}
        title={'Отмена'}
        type="white"
        customStyleBtn={styles.btnsItem}
      />
      <Button
        onClick={() => {}}
        title={'Сохранить'}
        //   customStyleBtn={}
        customStyleBtn={[styles.btnsItem, {marginLeft: 10}]}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  wrapBtns: {
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
    marginTop: 55,
  },
  btnsItem: {
    width: 174,
    height: 40,
  },
});
export default BtnsBlock;
