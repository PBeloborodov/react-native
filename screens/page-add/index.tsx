import React, {FC} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  Image,
  Pressable,
} from 'react-native';
import {defaultStyle} from '../../src/common/styles/default';
import Copy from '../../src/assets/img/icon/copy.svg';
import {style} from '../../src/common/styles/variables/style';
type Props = {};

const AddPage: FC<Props> = props => {
  const heightScreen = Dimensions.get('window').height - 90;

  return (
    <ScrollView style={styles.addPage}>
      <View style={[styles.container, {height: heightScreen}]}>
        <TextInput
          style={[styles.input, {margin: 0}]}
          placeholder={'Добавьте описание'}
        />
        <View style={styles.wrapImg}>
          <Image
            source={require('../../src/assets/img/img-video/image72.jpg')}
            style={styles.img}
            resizeMode="cover"
          />
          <Pressable style={{position: 'absolute', right: -8, top: 8}}>
            <Copy />
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  addPage: {},
  container: {
    backgroundColor: style.color.white,
  },
  img: {
    marginLeft: 20,
    borderRadius: 4,
    width: 90,
    height: 90,
  },
  input: {
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 8,
    paddingBottom: 8,
    margin: 0,
  },
  wrapImg: {
    position: 'relative',
    width: 90,
    height: 90,
  },
});

export default AddPage;
