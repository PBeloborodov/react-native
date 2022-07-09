import React, {FC} from 'react';
import {StyleSheet, View, Text, Dimensions, Pressable} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {style} from '../../src/common/styles/variables/style';
import BtnsBlock from '../components/btns-block';
import SearchInput from '../components/search-input';
import UserItem from '../components/user-item';

const LIST_USER = [
  {
    source: require('../../src/assets/img/chats/image54.jpg'),
    name: 'Мария Иванова',
    info: '40',
  },
  {
    source: require('../../src/assets/img/chats/image55.jpg'),
    name: 'Максим Петров',
    info: '38',
  },
  {
    source: require('../../src/assets/img/chats/image56.jpg'),
    name: 'Светлана Сидорова',
    info: '14',
  },
];

type Props = {};

const NewChat: FC<Props> = props => {
  return (
    <ScrollView style={[styles.container, {backgroundColor: 'white'}]}>
      <View style={styles.filter}>
        <Pressable style={styles.filterItem}>
          <Text style={styles.filterItemText}>Все</Text>
        </Pressable>
        <Pressable style={styles.filterItem}>
          <Text style={styles.filterItemText}>Друзья</Text>
          <View style={styles.filterLine} />
        </Pressable>
        <Pressable style={styles.filterItem}>
          <Text style={styles.filterItemText}>Подписки</Text>
        </Pressable>
        <Pressable style={styles.filterItem}>
          <Text style={styles.filterItemText}>
            Выбранные <Text style={{color: style.color.opacity.blue}}>1 </Text>
          </Text>
        </Pressable>
      </View>
      <View style={styles.wrapSearch}>
        <SearchInput />
      </View>
      <View style={{height: '100%'}}>
        <ScrollView style={styles.listUser}>
          {LIST_USER.map(user => (
            <UserItem {...user} />
          ))}
        </ScrollView>
      </View>
      <BtnsBlock />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  filter: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
  filterItem: {
    paddingRight: 24,
  },
  filterItemText: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '500',
    color: style.color.blue,
    fontSize: 16,
  },
  filterLine: {
    width: 24,
    height: 2,
    marginTop: 5,
    backgroundColor: style.color.cornflowerBlue,
  },
  wrapSearch: {
    display: 'flex',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  listUser: {
    display: 'flex',
    width: '100%',
    height: '60%',
    flex: 1,
  },
});

export default NewChat;
