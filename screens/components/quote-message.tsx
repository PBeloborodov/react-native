import React, {FC} from 'react';
import {ImageSourcePropType, StyleSheet, View, Image, Text} from 'react-native';
import {defaultStyle} from '../../src/common/styles/default';
import {style} from '../../src/common/styles/variables/style';
type Props = {
  nameUser: string;
  iconUser: ImageSourcePropType;
  screenShot: ImageSourcePropType;
  title: string;
};

const QuoteMessage: FC<Props> = ({nameUser, iconUser, screenShot, title}) => {
  return (
    <View style={styles.quota}>
      <View style={styles.quotaUser}>
        <Image
          style={styles.quotaUserImg}
          source={iconUser}
          resizeMode="cover"
        />
        <Text style={styles.quotaUserName}>{nameUser}</Text>
      </View>
      <View style={styles.quotaContent}>
        <Image
          style={styles.quotaContentImg}
          source={screenShot}
          resizeMode="cover"
        />
        <View style={styles.quotaContentWrapTitle}>
          <Text
            style={[defaultStyle.text, styles.quotaContentTitle]}
            numberOfLines={3}>
            {title}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  quota: {
    position: 'relative',
    paddingLeft: 22,
    borderLeftColor: style.color.opacity.blue,
    borderLeftWidth: 1,
    marginTop: 8,
  },
  quotaUser: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  quotaUserImg: {
    marginRight: 10,
    borderRadius: 50,
    width: 32,
    height: 32,
  },
  quotaUserName: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '500',
    fontSize: 14,
  },
  quotaContent: {
    position: 'relative',
    width: 178,
    height: 218,
  },
  quotaContentImg: {
    height: '100%',
    width: '100%',
    borderRadius: 4,
  },
  quotaContentWrapTitle: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    padding: 5,
    backgroundColor: style.color.opacity.black,
    borderRadius: 4,
  },
  quotaContentTitle: {
    width: '100%',
    color: style.color.white,
    fontWeight: '500',
  },
});

export default QuoteMessage;
