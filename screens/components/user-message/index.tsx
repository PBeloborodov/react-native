import React, {FC} from 'react';
import {StyleSheet, View, Image, Text, ImageSourcePropType} from 'react-native';
import Delivered from '../../../src/assets/img/icon/delivered.svg';
import DeliveredBlue from '../../../src/assets/img/icon/delivered-blue.svg';
import DeliveredSend from '../../../src/assets/img/icon/delivered-send.svg';
import {defaultStyle} from '../../../src/common/styles/default';
import {style} from '../../../src/common/styles/variables/style';
import GellaryMessage from './gellary-message';
import VideoMessage from '../video-message';
import QuoteMessage from '../quote-message';
type Props = {
  source?: ImageSourcePropType;
  text: string;
  date: string;
  statusDelived: boolean;
  gellary?: ImageSourcePropType[];
  video?: {time: string; screenShot: ImageSourcePropType};
  quote?: {
    nameUser: string;
    iconUser: ImageSourcePropType;
    screenShot: ImageSourcePropType;
    title: string;
  };
};

export const MessageUser: FC<Props> = ({
  source,
  text,
  date,
  statusDelived,
  gellary,
  video,
  quote,
}) => {
  return (
    <View style={styles.messageUser}>
      <View style={styles.messageUserWrapImg}>
        <Image source={source!} style={styles.messageUserImg} />
      </View>
      <View style={styles.messageUserContent}>
        <Text style={[defaultStyle.text, styles.messageUserText]}>{text}</Text>
        {gellary && <GellaryMessage source={gellary} />}
        {video && <VideoMessage {...video} />}
        {quote && <QuoteMessage {...quote} />}
        <View style={styles.messageUserInfo}>
          <Text style={styles.messageUserDate}>{date}</Text>
          {statusDelived ? <Delivered /> : <DeliveredSend />}
        </View>
      </View>
    </View>
  );
};

export const YourMessage: FC<Props> = ({text, date, statusDelived}) => {
  return (
    <View style={styles.messageYour}>
      <View
        style={[
          styles.messageUserContent,
          {backgroundColor: style.color.onaha},
        ]}>
        <Text style={[defaultStyle.text, styles.messageUserText]}>{text}</Text>
        <View style={styles.messageUserInfo}>
          <Text
            style={[
              defaultStyle.text,
              styles.messageUserDate,
              {color: style.color.azureRadiance},
            ]}>
            {date}
          </Text>
          {statusDelived ? <DeliveredBlue /> : <DeliveredBlue />}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  messageUser: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 24,
  },
  messageYour: {
    marginLeft: 'auto',
    marginBottom: 24,
  },
  messageUserWrapImg: {
    marginTop: 'auto',
    width: 32,
    height: 32,
    display: 'flex',
    borderRadius: 50,
    overflow: 'hidden',
  },
  messageUserImg: {
    height: '100%',
    width: '100%',
    borderRadius: 50,
  },
  messageUserContent: {
    width: '75%',
    marginLeft: 12,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: style.color.white,
    borderRadius: 4,
  },
  messageUserText: {
    color: style.color.mineShaft,
  },
  messageUserInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 10,
  },
  messageUserDate: {
    fontSize: 12,
    color: style.color.doveGrayAdd,
    marginRight: 5,
  },
});
