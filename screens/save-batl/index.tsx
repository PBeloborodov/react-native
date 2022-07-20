import React, {FC} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Text,
  Image,
  Pressable,
} from 'react-native';
import Button from '../../src/common/components/button';
import {style} from '../../src/common/styles/variables/style';
import Swords from '../../src/assets/img/icon/swords.svg';
type Props = {};

const SaveBatl: FC<Props> = props => {
  const heightScreen = Dimensions.get('window').height - 90;
  return (
    <ScrollView style={styles.saveBatl}>
      <View style={[styles.container, {height: heightScreen}]}>
        <View style={styles.wrapCards}>
          <View style={styles.card}>
            <Image
              source={require('../../src/assets/img/batl/object1.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
            <Pressable style={{width: '100%'}}>
              <View style={styles.cardBtn}>
                <Text style={styles.cardBtnText}>Добавить</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.card}>
            <Image
              source={require('../../src/assets/img/batl/object2.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
            <Pressable style={{width: '100%'}}>
              <View style={styles.cardBtn}>
                <Text style={styles.cardBtnText}>Добавить</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.iconBatl}>
            <Swords />
          </View>
        </View>
        <View style={{marginTop: 'auto'}}>
          <Button
            onClick={() => {}}
            title={'Сохранить'}
            customStyleBtn={styles.btn}
            customStyleText={{fontWeight: '500', fontSize: 16}}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  saveBatl: {
    backgroundColor: style.color.white,
  },
  container: {
    padding: 20,
  },
  btn: {
    width: '100%',
    height: 48,
  },
  wrapCards: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: style.color.blueLight,
    borderRadius: 4,
    width: '48%',
    maxWidth: 180,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 12,
  },
  cardImg: {
    width: '100%',
    maxWidth: 148,
    height: 100,
    borderRadius: 4,
  },
  cardBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingTop: 8,
    paddingBottom: 8,
    borderColor: style.color.malibu,
    borderWidth: 1,
    backgroundColor: style.color.white,
    borderRadius: 4,
    marginTop: 20,
  },
  cardBtnText: {
    fontFamily: 'Roboto-regular',
    fontSize: 14,
    fontWeight: '500',
    color: style.color.blue,
  },
  iconBatl: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 64,
    height: 64,
    marginLeft: -32,
    marginTop: -62,
    backgroundColor: style.color.white,
    borderRadius: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SaveBatl;
