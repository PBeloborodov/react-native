import React, {FC, useCallback} from 'react';
import {
  Pressable,
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  TextInput,
} from 'react-native';
import EditIcon from '../src/assets/img/icon/edit-icon.svg';
import Send from '../src/assets/img/icon/send.svg';
import {style} from '../src/common/styles/variables/style';
import RangeSlider from '../screens/components/range/range-slider';
type Props = {};

const Inputs: FC<Props> = props => {
  const heightScreen = Dimensions.get('window').height + 100;

  return (
    <View style={{height: heightScreen, backgroundColor: style.color.white}}>
      <Pressable style={styles.blockBtn}>
        <View style={styles.blockBtnImgWrap}>
          <Image
            style={styles.blockBtnImg}
            source={require('../src/assets/img/img-video/image67-small.jpg')}
          />
        </View>
        <Text style={styles.blockBtnText}>
          Креветки AGAMA 35/45 камчатские варено-мороженые, 800 г
        </Text>
        <EditIcon />
      </Pressable>
      <View style={styles.line} />
      <View style={styles.range}>
        <View style={styles.rangeItemLabel}>
          <Text style={{}}>Название</Text>
          <Text style={{}}>4.5</Text>
        </View>
        <View style={{}}>
          <RangeSlider />
        </View>
      </View>
      <View style={styles.line} />
      <View style={styles.inputSendWrap}>
        <TextInput
          placeholder="Аргумент"
          style={{padding: 0, margin: 0, color: style.color.tundora}}
        />
        <Pressable>
          <Send />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  blockBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    padding: 16,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: style.color.malibu,
    backgroundColor: style.color.aliceBlue,
  },
  blockBtnImgWrap: {
    width: 46,
    height: 48,
    marginRight: 16,
    borderRadius: 4,
    overflow: 'hidden',
  },
  blockBtnImg: {
    height: '100%',
    width: '100%',
  },
  blockBtnText: {
    flex: 1,
    color: style.color.blue,
    marginRight: 5,
  },
  line: {
    backgroundColor: style.color.gallery,
    height: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  range: {
    padding: 20,
  },
  rangeItem: {
    marginBottom: 12,
  },
  rangeItemLabel: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  inputSendWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: style.color.alabaster,
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 8,
    borderRadius: 4,
  },
});

export default Inputs;
