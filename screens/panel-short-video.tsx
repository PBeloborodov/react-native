import React, {FC} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  ImageSourcePropType,
} from 'react-native';
import {style} from '../src/common/styles/variables/style';
type Props = {};

const PanelShortPanel: FC<Props> = props => {
  const heightScreen = Dimensions.get('window').height + 100;

  return (
    <ScrollView style={[styles.panelVideo, {height: heightScreen}]}>
      <View style={styles.banner}>
        <Image
          source={require('../src/assets/img/img-video/image67p.jpg')}
          style={styles.bannerImg}
        />
        <View style={styles.titleVideo}>
          <Text style={styles.titleVideoText}>Самые лучшие фильмы</Text>
        </View>
      </View>
      <View style={styles.listCart}>
        <ItemCart
          source={require('../src/assets/img/img-video/image71-short.jpg')}
          title={'15 фильмов, которые можно пересматривать бесконечно'}
        />
        <ItemCart
          source={require('../src/assets/img/img-video/image72-short.jpg')}
          title={'10 полезных фильмов, чтобы укрепить отношения'}
        />
        <ItemCart
          source={require('../src/assets/img/img-video/image64-short.jpg')}
          title={'20 лучших фильмов 2015'}
        />
        <ItemCart
          source={require('../src/assets/img/img-video/image73-short.jpg')}
          title={'Самые лучшие фильмы'}
        />
      </View>
    </ScrollView>
  );
};
type CartType = {
  title: string;
  source: ImageSourcePropType;
};

const ItemCart: FC<CartType> = ({source, title}) => {
  return (
    <View style={styles.itemCart}>
      <Image source={source} style={styles.itemCartImg} />
      <View style={styles.itemCartTitle}>
        <Text style={styles.itemCartText} numberOfLines={3}>
          {title}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  panelVideo: {
    backgroundColor: style.color.white,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
  },
  titleVideo: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 24,
    borderRadius: 4,
    left: 0,
    height: 60,
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: style.color.opacity.black,
  },
  titleVideoText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: style.color.white,
  },
  bannerImg: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
  },
  banner: {
    position: 'relative',
    width: '100%',
    height: 244,
    paddingBottom: 24,
    overflow: 'hidden',
    borderBottomWidth: 1,
    borderBottomColor: style.color.gallery,
  },
  listCart: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingTop: 24,
    width: '100%',
  },
  itemCart: {
    position: 'relative',
    width: '48%',
    maxWidth: 177,
    marginBottom: 16,
  },
  itemCartImg: {
    width: '100%',
    height: 218,
    borderRadius: 4,
  },
  itemCartText: {
    color: style.color.white,
    fontFamily: 'Roboto-Regular',
    fontWeight: '500',
    flexShrink: 1,
    padding: 5,
  },
  itemCartTitle: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    backgroundColor: style.color.opacity.black,
    height: 60,
    width: '100%',
    borderRadius: 4,
  },
});

export default PanelShortPanel;
