import React, {FC} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {style} from '../../src/common/styles/variables/style';
type Props = {};

const HeaderChat: FC<Props> = props => {
  return (
    <View style={styles.headerChat}>
      <Image
        source={require('../../src/assets/img/chats/image20.jpg')}
        style={styles.headerChatImg}
      />
      <View style={styles.headerChatContent}>
        <Text style={styles.headerChatName}>Мария Иванова</Text>
        <Text style={styles.headerChatStatus}>была в сети 22.08.21</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerChat: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    paddingRight: 100,
  },
  headerChatImg: {},
  headerChatContent: {
    marginLeft: 10,
  },
  headerChatName: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    fontWeight: '500',
  },
  headerChatStatus: {
    fontSize: 12,
    fontFamily: 'Roboto-Regular',
    color: style.color.doveGrayAdd,
    paddingBottom: 20,
  },
});

export default HeaderChat;
