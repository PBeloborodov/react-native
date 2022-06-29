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
        customStyleBtn={[styles.btnsItem]}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  wrapBtns: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    marginTop: 'auto',
  },
  btnsItem: {
    width: 164,
    height: 40,
  },
});
export default BtnsBlock;
