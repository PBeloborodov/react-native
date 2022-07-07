import React, {FC} from 'react';
import {Dimensions, StyleSheet, View, Image} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {style} from '../../src/common/styles/variables/style';
import ChatItem from '../components/chat-item';
import SearchInput from '../components/search-input';
const LIST_CHATS = [
  {
    source: require('../../src/assets/img/chats/default-user.jpg'),
    name: 'Маша Иванова',
    date: '4.05.2022',
    massage: 'Привет, я Маруся! Ваш умный голосовой помощник. Я могу',
    valueMessage: 0,
  },
  {
    source: require('../../src/assets/img/chats/image20.jpg'),
    name: 'Светлана Петрова',
    date: '4.05.2022',
    massage: 'Привет, я Маруся! Ваш умный голосовой помощник. Я могу',
    valueMessage: 0,
  },
  {
    source: require('../../src/assets/img/chats/image21.jpg'),
    name: 'Оля Сидорова',
    date: '4.05.2022',
    massage: 'Привет, я Маруся! Ваш умный голосовой помощник. Я могу',
    valueMessage: 12,
  },
];

type Props = {};

const Chats: FC<Props> = props => {
  const heightScreen = Dimensions.get('window').height + 100;

  return (
    <View style={{height: heightScreen, backgroundColor: style.color.white}}>
      <View style={styles.wrapSearch}>
        <SearchInput />
      </View>
      <ScrollView style={styles.listChats}>
        {LIST_CHATS.map(chat => (
          <ChatItem {...chat} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapSearch: {
    display: 'flex',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  listChats: {},
});

export default Chats;
