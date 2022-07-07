import React, {FC} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import SearchIcon from '../src/assets/img/icon/search-icon.svg';
import FilterIcon from '../src/assets/img/icon/filter-icon.svg';
import {style} from '../src/common/styles/variables/style';
import {LIST_FAVORITES} from './favorites';
type Props = {};

const SearchFavorites: FC<Props> = props => {
  const heightScreen = Dimensions.get('window').height + 100;

  return (
    <ScrollView
      style={{height: heightScreen, backgroundColor: style.color.white}}>
      <View style={styles.wrapSearch}>
        <View style={styles.search}>
          <SearchIcon />
          <TextInput placeholder="Поиск" style={styles.searchInput} />
        </View>
        <View style={styles.searchFilter}>
          <FilterIcon />
          <View style={styles.searchFilterCounter}>
            <Text style={styles.searchFilterCounterNumber}>1</Text>
          </View>
        </View>
      </View>
      <View style={styles.listFavorites}>
        {LIST_FAVORITES.map(item => (
          <View style={styles.favoritesItem}>
            <View style={styles.favoritesItemImgWrap}>
              <Image style={styles.favoritesItemImg} source={item.source} />
            </View>
            <Text style={styles.favoritesItemName} numberOfLines={3}>
              {item.name}
            </Text>
            <View
              style={[
                styles.favoritesItemCounterWrap,
                item.value ? styles.counterActive : null,
              ]}>
              <Text style={styles.favoritesItemCounter}>{item.value}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapSearch: {
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  search: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 4,
    backgroundColor: style.color.alabaster,
  },
  searchInput: {
    marginLeft: 10,
    marginRight: 0,
    marginBottom: 0,
    marginTop: 0,
    padding: 0,
  },
  searchFilter: {
    position: 'relative',
    marginLeft: 15,
    paddingRight: 18,
  },
  searchFilterCounter: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 50,
    backgroundColor: style.color.blue,
    width: 16,
    height: 16,
    right: 0,
    top: -10,
  },
  searchFilterCounterNumber: {
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
  favoritesItemImgWrap: {
    width: 64,
    height: 64,
    marginRight: 15,
  },
  favoritesItemImg: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
    flex: 1,
  },
  counterActive: {
    borderColor: style.color.blue,
    backgroundColor: style.color.blue,
  },
  favoritesItemCounterWrap: {
    width: 24,
    height: 24,
    borderRadius: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: style.color.alto,
    marginLeft: 15,
    borderWidth: 2,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  favoritesItemName: {
    flex: 1,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: style.color.mineShaft,
  },
  favoritesItemCounter: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '700',
    color: style.color.white,
  },
});

export default SearchFavorites;
