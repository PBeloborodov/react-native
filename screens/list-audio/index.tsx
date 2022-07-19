import React, {FC} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Pressable,
  Text,
} from 'react-native';

import {style} from '../../src/common/styles/variables/style';
import CrossBlue from '../../src/assets/img/icon/cross-blue-player.svg';
import Pause from '../../src/assets/img/icon/pause.svg';
import AudioItem from './audio-item';
import {defaultStyle} from '../../src/common/styles/default';
type Props = {};
const LIST_INFO_AUDIO = [
  {
    icon: require('../../src/assets/img/audio/default.jpg'),
    name: 'Gerry & The Pacemakers',
    time: '2:30',
    description: `You'll Never Walk Alone`,
    reting: '4.2',
  },
  {
    icon: require('../../src/assets/img/audio/audio-logo.jpg'),
    name: 'Gerry & The Pacemakers',
    time: '2:30',
    description: `You'll Never Walk Alone`,
    reting: '4.0',
  },
  {
    icon: require('../../src/assets/img/audio/audio-logo.jpg'),
    name: 'Gerry & The Pacemakers',
    time: '2:30',
    description: `You'll Never Walk Alone`,
    reting: '4.1',
  },
];

const ListAudio: FC<Props> = props => {
  const heightScreen = Dimensions.get('window').height - 90;

  return (
    <ScrollView style={styles.audioList}>
      <View style={[styles.container, {height: heightScreen}]}>
        {LIST_INFO_AUDIO.map(item => (
          <AudioItem {...item} />
        ))}
        <View style={styles.audioPlayer}>
          <Pressable>
            <Pause />
          </Pressable>
          <View style={styles.audioPlayerInfo}>
            <Text style={[defaultStyle.text, styles.audioPlayerName]}>
              Gerry & The Pacemakers
            </Text>
            <View style={styles.audioPlayerLine}>
              <View
                style={[styles.audioPlayerLineActive, {width: '75%'}]}></View>
            </View>
          </View>
          <CrossBlue />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: style.color.white,
    padding: 20,
  },
  audioList: {},
  audioPlayer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginLeft: 20,
    position: 'absolute',
    bottom: 40,
    backgroundColor: style.color.blueLight,
    borderRadius: 4,
    paddingBottom: 15,
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
  },
  audioPlayerInfo: {
    flex: 1,
    paddingLeft: 12,
    paddingRight: 19,
  },
  audioPlayerName: {
    color: style.color.blue,
  },
  audioPlayerLine: {
    position: 'relative',
    width: '100%',
    height: 2,
    backgroundColor: style.color.bluePlayer,
    marginTop: 10,
    borderRadius: 2,
  },
  audioPlayerLineActive: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    height: 2,
    backgroundColor: '#1282FF',
    marginTop: 10,
    borderRadius: 2,
  },
});

export default ListAudio;
