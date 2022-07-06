import React, {FC, useCallback} from 'react';
import {
  Pressable,
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
} from 'react-native';
import EditIcon from '../src/assets/img/icon/edit-icon.svg';
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
        <View style={styles.rangeItem}>
          <Text style={{}}>Название</Text>
        </View>
        <View style={{}}>
          <RangeSlider />
        </View>
      </View>
      <View style={styles.range}>
        <View style={styles.rangeItem}>
          <Text style={{}}>Название</Text>
        </View>
        <View style={{}}>
          <RangeSlider />
        </View>
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
  range: {},
  rangeItem: {
    marginBottom: 12,
  },
});

export default Inputs;
