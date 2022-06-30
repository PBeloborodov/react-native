import React, {FC} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  ImageSourcePropType,
  Pressable,
  Dimensions,
} from 'react-native';
import VerticalDotted from '../src/assets/img/icon/vertical-dotted.svg';
import {style} from '../src/common/styles/variables/style';
type Props = {};

const DATA_BASE_VIDE: VideoType[] = [
  {
    src: require('../src/assets/img/img-video/image67.jpg'),
    time: '04:30',
    title:
      'Зафиксированная на каком-либо материальном носителе человеческая мысль',
    categories: 'Отели',
    date: '26 мая 2022 г.',
  },
  {
    src: require('../src/assets/img/img-video/image64.jpg'),
    time: '04:30',
    title: 'Заголовок видеозаписи',
    categories: 'Автомобили',
    date: '26 мая 2022 г.',
  },
  {
    src: require('../src/assets/img/img-video/image69.jpg'),
    time: '04:30',
    title: 'Зафиксированная на каком-либо материальнsом носителе',
    categories: 'Фильмы',
    date: '26 мая 2022 г.',
  },
];

const ListVideo: FC<Props> = props => {
  const heightScreen = Dimensions.get('window').height - 100;

  return (
    <ScrollView>
      <View style={[styles.listVideo, {height: heightScreen}]}>
        {DATA_BASE_VIDE.map(video => (
          <VideoItem dataVideo={video} />
        ))}
      </View>
    </ScrollView>
  );
};
export default ListVideo;

type PropsItem = {
  dataVideo: VideoType;
};

export type VideoType = {
  src: ImageSourcePropType;
  time: string;
  title: string;
  categories: string;
  date: string;
};
const VideoItem: FC<PropsItem> = ({dataVideo}) => {
  return (
    <View style={styles.videoItem}>
      <View style={styles.videoItemImgWrap}>
        <Image source={dataVideo.src} style={styles.videoItemImg} />
        <View style={styles.videoItemTimeWrap}>
          <Text style={styles.videoItemTime}>{dataVideo.time}</Text>
        </View>
      </View>
      <View style={styles.videoItemContentWrap}>
        <View style={styles.videoItemContent}>
          <Text style={styles.videoTitle} numberOfLines={3}>
            {dataVideo.title}
          </Text>
          <Text style={styles.videoCategories}>{dataVideo.categories}</Text>
          <Text style={styles.videoDate}>{dataVideo.date}</Text>
        </View>
        <Pressable>
          <View style={styles.videoItemDotted}>
            <VerticalDotted />
          </View>
        </Pressable>
      </View>
      <View style={styles.videoItemLine} />
    </View>
  );
};
const styles = StyleSheet.create({
  listVideo: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
    paddingBottoms: 20,
    backgroundColor: style.color.white,
  },
  videoItem: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
  },
  videoItemImgWrap: {
    position: 'relative',
    width: 142,
    height: 92,
    borderRadius: 4,
  },
  videoItemImg: {},
  videoItemTimeWrap: {
    position: 'absolute',
    right: 8,
    bottom: 6,
    backgroundColor: style.color.opacity.black,
    color: style.color.white,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 10,
  },
  videoItemTime: {
    color: style.color.white,
  },
  videoItemContentWrap: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
  },
  videoItemContent: {
    flex: 0.9,
  },
  videoTitle: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    color: style.color.black,
    flexShrink: 1,
    maxWidth: 190,
    lineHeight: 16,
  },
  videoCategories: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: 12,
    color: style.color.grey,
    marginTop: 3,
  },
  videoDate: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: 12,
    color: style.color.dustyGray,
    marginTop: 3,
  },
  videoItemDotted: {
    marginTop: 37,
  },
  videoItemLine: {
    position: 'absolute',
    bottom: -10,
    right: 0,
    width: '56%',
    height: 1,
    backgroundColor: style.color.gallery,
  },
});
