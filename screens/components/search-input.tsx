import React, {FC} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import SearchIcon from '../../src/assets/img/icon/search-icon.svg';
import {style} from '../../src/common/styles/variables/style';

type Props = {};

const SearchInput: FC<Props> = props => {
  return (
    <View style={styles.search}>
      <SearchIcon />
      <TextInput placeholder="Поиск" style={styles.searchInput} />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
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
});
