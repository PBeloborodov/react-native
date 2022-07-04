import React, {FC} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {style} from '../src/common/styles/variables/style';
import StarYellow from '../src/assets/img/icon/star-yellow.svg';
type Props = {};

const LIST_FAVORITES = [
  {
    source: require('../src/assets/img/favorites/image67.jpg'),
    name: 'Креветки AGAMA 35/45 камчатские варено-мороженые,',
    favoritesId: '1',
    rating: 4.5,
    counter: 45,
  },
  {
    source: require('../src/assets/img/favorites/image69.jpg'),
    name: 'Креветки AGAMA 35/45 камчатские варено-мороженые,',
    favoritesId: '10',
    rating: 4.5,
    counter: 45,
  },
  {
    source: require('../src/assets/img/favorites/image13.jpg'),
    name: 'Креветки AGAMA 35/45 камчатские варено-мороженые,',
    favoritesId: '11',
    rating: 4.5,
    counter: 45,
  },
];

const Favorites: FC<Props> = props => {
  const heightScreen = Dimensions.get('window').height + 100;
  return (
    <ScrollView
      style={[
        styles.favorites,
        {
          height: heightScreen,
          backgroundColor: style.color.white,
        },
      ]}>
      <View style={styles.filter}>
        <View style={styles.filterCategories}>
          <View style={styles.filterCategoriesItem}>
            <Text style={[styles.filterCategoriesName, styles.textActive]}>
              Критерии
            </Text>
            <Text style={styles.filterCategoriesCounter}> 19</Text>
          </View>
          <View style={styles.filterCategoriesItem}>
            <Text style={[styles.filterCategoriesName]}>Фильтры</Text>
            <Text style={styles.filterCategoriesCounter}> 16</Text>
          </View>
          <View style={styles.filterCategoriesItem}>
            <Text style={styles.filterCategoriesName}>По мнению</Text>
            <Text style={styles.filterCategoriesCounter}> 24</Text>
          </View>
        </View>
        <View style={styles.filterBtnsWrap}>
          <View style={styles.filterBtn}>
            <Text style={styles.filterBtnText}>надежность</Text>
          </View>
        </View>
      </View>
      <View style={styles.listFavorites}>
        {LIST_FAVORITES.map(item => (
          <FavoritesItem dataFavorite={item} />
        ))}
      </View>
    </ScrollView>
  );
};

type ItemFavorites = {
  dataFavorite: {
    name: string;
    source: ImageSourcePropType;
    favoritesId: string;
    rating: number;
    counter: number;
  };
};

const FavoritesItem: FC<ItemFavorites> = ({dataFavorite}) => {
  return (
    <View style={styles.favoritesItem}>
      <View style={styles.favoritesImgWrap}>
        <Image style={styles.favoritesImg} source={dataFavorite.source} />
      </View>

      <Text style={styles.favoritesId}>{dataFavorite.favoritesId}</Text>
      <View style={styles.favoritesContent}>
        <Text style={styles.favoritesName} numberOfLines={2}>
          Креветки AGAMA 35/45 камчатские варено-мороженые,
        </Text>
        <View style={styles.favoritesRating}>
          <StarYellow />
          <Text style={styles.favoritesRatingMain}>{dataFavorite.rating}</Text>
          <Text style={styles.favoritesRatingCounter}>&bull;</Text>
          <Text style={styles.favoritesRatingCounter}>
            {dataFavorite.counter} мнений
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  filter: {
    margin: 20,
    borderRadius: 4,
    backgroundColor: style.color.alabaster,
    padding: 16,
  },
  favorites: {},
  filterCategoriesName: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: style.color.midnight,
  },
  textActive: {
    fontWeight: '500',
  },
  filterCategoriesCounter: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: style.color.opacity.midnight,
  },
  filterCategories: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: style.color.galleryLight,
  },
  filterCategoriesItem: {
    display: 'flex',
    flexDirection: 'row',
  },
  filterBtnsWrap: {
    paddingTop: 16,
  },
  filterBtn: {
    display: 'flex',
    maxWidth: 112,

    borderRadius: 16,
    paddingBottom: 3,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 3,
    backgroundColor: style.color.kashmirBlue,
  },
  filterBtnText: {
    fontFamily: 'Roboto-Regular',
    color: style.color.white,
  },
  listFavorites: {},
  favoritesItem: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    paddingBottom: 13,
    paddingTop: 13,
    paddingLeft: 13,
    paddingRight: 13,
    borderTopColor: style.color.gallery,
    borderTopWidth: 1,
    borderBottomColor: style.color.gallery,
    borderBottomWidth: 1,
  },
  favoritesId: {
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    fontWeight: '500',
    color: style.color.tundora,
  },
  favoritesContent: {
    flex: 1,
  },
  favoritesName: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: style.color.mineShaft,
    marginBottom: 5,
  },
  favoritesRating: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '55%',
  },
  favoritesRatingMain: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '500',
    fontSize: 16,
  },
  favoritesRatingCounter: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    color: style.color.dustyGray,
  },
  favoritesImgWrap: {
    width: 64,
    height: 64,
  },
  favoritesImg: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
    flex: 1,
  },
});

export default Favorites;
