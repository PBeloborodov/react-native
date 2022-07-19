import React, {FC} from 'react';
import {StyleSheet, View, ScrollView, Dimensions} from 'react-native';
import {style} from '../../src/common/styles/variables/style';
import FileItem from './item-file';
type Props = {};

const LIST_INFO_AUDIO = [
  {
    icon: require('../../src/assets/img/audio/default-audio.jpg'),
    name: 'Заголовок',
    format: 'MP3',
    size: '2,9 МБ',
    date: '1 июня 2022',
  },
  {
    icon: require('../../src/assets/img/audio/exem.jpg'),
    name: 'Заголовок',
    format: 'MP3',
    size: '2,9 МБ',
    date: '1 июня 2022',
  },
  {
    icon: require('../../src/assets/img/audio/default-pdf.jpg'),
    name: 'Заголовок',
    format: 'MP3',
    size: '2,9 МБ',
    date: '1 июня 2022',
  },
  {
    icon: require('../../src/assets/img/audio/defalut-video.jpg'),
    name: 'Заголовок',
    format: 'MP3',
    size: '2,9 МБ',
    date: '1 июня 2022',
  },
];

const ListFiles: FC<Props> = props => {
  const heightScreen = Dimensions.get('window').height - 90;

  return (
    <ScrollView style={styles.fileList}>
      <View style={[styles.container, {height: heightScreen}]}>
        {LIST_INFO_AUDIO.map(item => (
          <FileItem {...item} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: style.color.white,
    padding: 20,
  },
  fileList: {},
});

export default ListFiles;
