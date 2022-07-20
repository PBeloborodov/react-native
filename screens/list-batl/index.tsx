import React, {FC} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Image,
  Text,
  Pressable,
} from 'react-native';
import {defaultStyle} from '../../src/common/styles/default';
import Swords from '../../src/assets/img/icon/swords.svg';
import Star from '../../src/assets/img/icon/star-yellow.svg';
import {style} from '../../src/common/styles/variables/style';
import CardBatl from '../components/crad-batl';
type Props = {};

const ListBatl: FC<Props> = props => {
  const heightScreen = Dimensions.get('window').height - 90;

  return (
    <ScrollView style={styles.listBatl}>
      <View style={[styles.container, {height: heightScreen}]}>
        <View style={styles.listBatlItem}>
          <View style={styles.listBatlRow}>
            <View style={styles.listBatlRowLeft}>
              <Star />
              <Text style={styles.listBatlRowText}>4.85</Text>
              <View style={[styles.listBatlLine, {width: '40%', right: 0}]} />
            </View>
            <View style={styles.listBatlRowRight}>
              <Text style={styles.listBatlRowText}>4.25</Text>
              <Star />
              <View style={[styles.listBatlLine, {width: '35%', left: 0}]} />
            </View>
            <View style={styles.iconBatl}>
              <Swords width={24} hight={24} />
            </View>
          </View>
          <View style={styles.wrapCard}>
            <CardBatl
              imgSrc={require('../../src/assets/img/img-video/image72.jpg')}
              label={'Креветки AGAMA 35/45 камчатские варено-мороженые,'}
              smallPlace={1}
            />
            <CardBatl
              imgSrc={require('../../src/assets/img/img-video/image72.jpg')}
              label={'Креветки AGAMA 35/45 камчатские варено-мороженые,'}
              smallPlace={2}
              placeTwo
            />
          </View>
          <Text style={styles.opinion}>30 мнений</Text>
          <Pressable style={styles.wrapBtn}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Заголовок</Text>
            </View>
          </Pressable>
        </View>

        <View style={styles.listBatlItem}>
          <View style={styles.listBatlRow}>
            <View style={styles.listBatlRowLeft}>
              <Star />
              <Text style={styles.listBatlRowText}>4.85</Text>
              <View style={[styles.listBatlLine, {width: '40%', right: 0}]} />
            </View>
            <View style={styles.listBatlRowRight}>
              <Text style={styles.listBatlRowText}>4.25</Text>
              <Star />
              <View style={[styles.listBatlLine, {width: '35%', left: 0}]} />
            </View>
            <View style={styles.iconBatl}>
              <Swords width={24} hight={24} />
            </View>
          </View>
          <View style={styles.wrapCard}>
            <CardBatl
              imgSrc={require('../../src/assets/img/img-video/image72.jpg')}
              label={'Креветки AGAMA 35/45 камчатские варено-мороженые,'}
              smallPlace={1}
            />
            <CardBatl
              imgSrc={require('../../src/assets/img/img-video/image72.jpg')}
              label={'Креветки AGAMA 35/45 камчатские варено-мороженые,'}
              smallPlace={2}
              placeTwo
            />
          </View>
          <Text style={styles.opinion}>30 мнений</Text>
          <Pressable style={styles.wrapBtn}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Заголовок</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLift: 20,
    paddingRight: 20,
    padding: 20,
    backgroundColor: style.color.white,
  },
  listBatl: {},
  listBatlItem: {
    paddingBottom: 22,
    paddingTop: 20,
    borderBottomColor: style.color.malibuLightShow,
    borderBottomWidth: 3,
  },
  wrapCard: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 0,
  },
  iconBatl: {
    position: 'absolute',
    left: '50%',
    width: 48,
    height: 48,
    marginLeft: -24,
    bottom: -20,
    backgroundColor: style.color.white,
    borderRadius: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  listBatlRow: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listBatlRowText: {
    fontFamily: 'Roboto-regular',
    fontWeight: '500',
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 10,
  },
  listBatlRowLeft: {
    width: '48%',
    paddingBottom: 11,
    paddingRight: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  listBatlRowRight: {
    width: '48%',
    paddingBottom: 11,
    paddingLeft: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  listBatlLine: {
    position: 'absolute',
    backgroundColor: style.color.blue,
    height: 2,
    marginBottom: -1,
    bottom: 0,
  },
  opinion: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 12,
    fontFamily: 'Roboto-Regular',
    color: style.color.dustyGray,
  },
  wrapBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 36,
    paddingRight: 36,
    borderColor: style.color.malibu,
    borderWidth: 1,
    backgroundColor: style.color.white,
    borderRadius: 4,
  },
  btnText: {
    fontFamily: 'Roboto-regular',
    fontSize: 14,
    fontWeight: '500',
    color: style.color.blue,
  },
});

export default ListBatl;
