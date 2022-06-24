import React from 'react';
import {View, StyleSheet, Image, Text, Pressable} from 'react-native';
import {style} from '../../../src/variables/style';

const FilterPanel = () => {
  return (
    <View style={styles.filterPanel}>
      <View style={styles.filterPanelTypes}>
        <Pressable style={styles.filterPanelTypesItem}>
          <Text style={styles.filterPanelText}>Критерии</Text>
          <Text style={[styles.filterPanelCounter]}>19</Text>
        </Pressable>
        <Pressable style={styles.filterPanelTypesItem}>
          <Text style={styles.filterPanelText}>Фильтры</Text>
          <Text style={[styles.filterPanelCounter]}>16</Text>
        </Pressable>
        <Pressable style={styles.filterPanelTypesItem}>
          <Text style={styles.filterPanelText}>По мнению</Text>
          <Text style={[styles.filterPanelCounter]}>24</Text>
        </Pressable>
      </View>
      <View style={styles.filterPanelSorting}>
        <Pressable style={styles.filterPanelSortingItem}>
          <Image
            source={require('../../../src/assets/img/icon/sorting.png')}
            style={styles.filterPanelSortingImg}
          />
          <Text style={[styles.filterPanelSortingText]}>Рекомендуем</Text>
        </Pressable>
        <Pressable style={styles.filterPanelSortingItem}>
          <Image
            source={require('../../../src/assets/img/icon/main.png')}
            style={styles.filterPanelSortingMenu}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  filterPanel: {
    display: 'flex',
    flexDirection: 'column',
    margin: 20,
    backgroundColor: style.color.alabaster,
  },
  filterPanelTypes: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: style.color.gallery,
    borderBottomWidth: 1,
  },
  filterPanelTypesItem: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
  },
  filterPanelText: {
    fontWeight: '700',
    marginRight: 5,
  },
  filterPanelCounter: {
    color: style.color.tundora,
  },
  filterPanelSorting: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  filterPanelSortingItem: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
  },
  filterPanelSortingText: {
    color: style.color.doveGray,
  },
  filterPanelSortingImg: {
    marginRight: 5,
  },
  filterPanelSortingMenu: {
    width: 24,
    height: 24,
  },
  filterPanelSortingCounter: {},
});
export default FilterPanel;
