import React, {FC} from 'react';
import {StyleSheet, View, Image, ImageSourcePropType, Text} from 'react-native';
import {defaultStyle} from '../../src/common/styles/default';
import {style} from '../../src/common/styles/variables/style';
import CounterBlue from './counter-blue';
type Props = {
  source: ImageSourcePropType;
  name: string;
  date: string;
  massage: string;
  valueMessage: number;
};

const ChatItem: FC<Props> = ({source, name, date, valueMessage, massage}) => {
  return (
    <View style={styles.chatItem}>
      <View style={styles.chatItemImgWrap}>
        <Image source={source} style={styles.chatItemImg} />
      </View>
      <View style={styles.chatItemInfo}>
        <View style={styles.chatItemHead}>
          <Text style={[defaultStyle.text, styles.chatItemName]}>{name}</Text>
          <Text style={[defaultStyle.text, styles.chatItemDate]}>{date}</Text>
        </View>
        <View style={styles.chatItemContent}>
          <Text
            style={[defaultStyle.text, styles.chatItemTextMessage]}
            numberOfLines={3}>
            {massage}
          </Text>
          <View style={styles.chatItemValueMessage}>
            {valueMessage ? <CounterBlue valueMessage={valueMessage} /> : null}
          </View>
        </View>
      </View>
    </View>
  );
};
export default ChatItem;

const styles = StyleSheet.create({
  chatItem: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 18,
    paddingBottom: 18,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomColor: style.color.gallery,
    borderTopColor: style.color.gallery,
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  chatItemImgWrap: {
    position: 'relative',
    height: 40,
    width: 40,
    borderRadius: 50,
    overflow: 'hidden',
  },
  chatItemImg: {
    height: '100%',
    width: '100%',
    borderRadius: 50,
  },
  chatItemInfo: {
    marginLeft: 10,
    flex: 1,
  },
  chatItemHead: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  chatItemName: {
    fontWeight: '500',
  },
  chatItemDate: {
    fontSize: 12,
    color: style.color.dustyGray,
  },
  chatItemContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chatItemValueMessage: {
    marginLeft: 10,
  },
  chatItemTextMessage: {
    flex: 1,
    color: style.color.doveGrayAdd,
  },
});
