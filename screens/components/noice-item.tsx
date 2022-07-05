import React, {FC} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  ImageSourcePropType,
} from 'react-native';
import {style} from '../../src/common/styles/variables/style';

type Props = {
  source: ImageSourcePropType;
  userName: string;
  date: string;
  message: string;
  action: boolean;
};
const NoiceItem: FC<Props> = ({source, userName, date, message, action}) => {
  return (
    <View style={styles.noiceItem}>
      <View style={styles.noiceImgWrap}>
        <Image style={styles.noiceImg} source={source} />
      </View>
      <View style={styles.noiceContent}>
        <View style={styles.noiceContentHead}>
          <Text style={styles.noiceUser}>{userName}</Text>
          <Text style={styles.noiceDate}>{date} </Text>
        </View>
        <Text style={styles.noiceText}>{message}</Text>
        {action ? (
          <Pressable>
            <View style={styles.noiceActionBtn}>
              <Text style={styles.noiceActionBtnText}>Кнопка действия</Text>
            </View>
          </Pressable>
        ) : (
          <Pressable>
            <View style={styles.noiceSubscribe}>
              <Text style={styles.noiceSubscribeText}>Подписаться</Text>
            </View>
          </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  noiceItem: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: style.color.white,
    borderRadius: 4,
    padding: 16,
    marginTop: 0,
    marginBottom: 10,
    marginRight: 20,
    marginLeft: 20,
  },
  noiceImgWrap: {
    width: 48,
    height: 48,
    borderRadius: 50,
    overflow: 'hidden',
  },
  noiceImg: {
    width: '100%',
    height: '100%',
  },
  noiceContent: {
    display: 'flex',
    alignItems: 'flex-start',
    marginLeft: 8,
    flex: 1,
  },
  noiceContentHead: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 5,
  },
  noiceUser: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '500',
    fontSize: 14,
  },
  noiceDate: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    color: style.color.tundora,
  },
  noiceText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: style.color.mineShaft,
  },
  noiceActionBtn: {
    marginTop: 20,
    borderColor: style.color.blue,
    borderWidth: 1,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 4,
  },
  noiceActionBtnText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    fontWeight: '500',
    color: style.color.blue,
  },
  noiceSubscribe: {
    marginTop: 8,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: style.color.blue,
    borderRadius: 4,
  },
  noiceSubscribeText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    fontWeight: '500',
    color: style.color.white,
  },
});

export default NoiceItem;
