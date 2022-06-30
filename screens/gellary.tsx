import React, {FC} from 'react';
import {ReactNode} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  ImageSourcePropType,
  Text,
  Pressable,
} from 'react-native';
import {style} from '../src/common/styles/variables/style';
type Props = {};

const Gellary: FC<Props> = props => {
  return (
    <ScrollView>
      <View style={styles.gellary}>
        <GellatyItem url={require('../src/assets/img/gellary/image67.jpg')} />
        <GellatyItem url={require('../src/assets/img/gellary/image63.jpg')} />
        <GellatyItem
          url={require('../src/assets/img/gellary/image64.jpg')}
          showCheck
        />
        <GellatyItem url={require('../src/assets/img/gellary/image68.jpg')} />
        <GellatyItem url={require('../src/assets/img/gellary/image69.jpg')} />
        <GellatyItem
          url={require('../src/assets/img/gellary/image70.jpg')}
          showCheck
          counter={1}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  gellary: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  gellatyItem: {
    position: 'relative',
    width: '33%',
    height: 134,
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 2,
  },
  gellatyImg: {
    width: '100%',
    height: '100%',
  },
  gellatyItemCheck: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    right: 10,
    top: 10,
    width: 32,
    height: 32,
    borderWidth: 2,
    borderColor: style.color.white,
    borderRadius: 50,
  },
  gellatyItemCounter: {
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    fontWeight: '700',
    color: style.color.white,
  },
});

export default Gellary;

type PropsItem = {
  url: ImageSourcePropType;
  showCheck?: boolean;
  counter?: number;
};

export const GellatyItem: FC<PropsItem> = ({url, showCheck, counter}) => {
  return (
    <View style={styles.gellatyItem}>
      <Image style={styles.gellatyImg} source={url} />
      {showCheck && (
        <Pressable
          style={[
            styles.gellatyItemCheck,
            counter ? {backgroundColor: style.color.blue} : null,
          ]}>
          <Text style={styles.gellatyItemCounter}>{counter}</Text>
        </Pressable>
      )}
    </View>
  );
};
