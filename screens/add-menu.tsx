import React, {FC, ReactNode} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
  Dimensions,
} from 'react-native';
import Icon01 from '../src/assets/img/add-menu/icon01.svg';
import Star from '../src/assets/img/add-menu/start.svg';
import GraficTop from '../src/assets/img/add-menu/grafic-top.svg';
import Copy from '../src/assets/img/add-menu/copy.svg';
import Batl from '../src/assets/img/add-menu/batl.svg';
import Post from '../src/assets/img/add-menu/post.svg';
import Edit from '../src/assets/img/add-menu/edit.svg';
import Story from '../src/assets/img/add-menu/story.svg';
import Photo from '../src/assets/img/add-menu/photo.svg';
import Audio from '../src/assets/img/add-menu/audio.svg';
import Video from '../src/assets/img/add-menu/video.svg';
import Air from '../src/assets/img/add-menu/air.svg';
import File from '../src/assets/img/add-menu/file.svg';
import {style} from '../src/common/styles/variables/style';
type Props = {};

const AddMenu: FC<Props> = props => {
  const heightScreen = Dimensions.get('window').height - 100;

  return (
    <ScrollView>
      <View style={[styles.container, {height: heightScreen}]}>
        <View style={styles.row}>
          <MenuItem label="Сфера" icon={<Icon01 />} />
          <MenuItem label="Мнение" icon={<Star />} />
          <MenuItem label="Топ" icon={<GraficTop />} />
          <MenuItem label="Подборка" icon={<Copy />} />
          <MenuItem
            label="Баттл"
            icon={<Batl />}
            customStyleWrap={{marginRight: 'auto', marginLeft: 18}}
          />
        </View>
        <View style={styles.row}>
          <MenuItem label="Пост" icon={<Post />} />
          <MenuItem label="Статья" icon={<Edit />} />
          <MenuItem label="Сюжет" icon={<Story />} />
        </View>

        <View style={styles.row}>
          <MenuItem label="Фото" icon={<Photo />} />
          <MenuItem label="Видео" icon={<Video />} />
          <MenuItem label="Аудио" icon={<Audio />} />
          <MenuItem label="Эфир" icon={<Air />} />
          <MenuItem
            label="Файл"
            icon={<File />}
            customStyleWrap={{marginRight: 'auto', marginLeft: 18}}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 18,
    backgroundColor: style.color.white,
    height: '100%',
    flex: 1,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  munuItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 108,
    height: 86,
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: style.color.alabasterLight,
  },
  munuItemImg: {
    marginBottom: 8,
  },
  munuItemText: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: style.color.black,
  },
});

export default AddMenu;

type ProsItem = {
  label: string;
  icon: ReactNode;
  customStyleWrap?: {
    [key: string]: string | number;
  };
};

export const MenuItem: FC<ProsItem> = ({label, icon, customStyleWrap}) => {
  return (
    <View style={[styles.munuItem, customStyleWrap]}>
      <View style={styles.munuItemImg}>{icon}</View>
      <Text style={styles.munuItemText}>{label}</Text>
    </View>
  );
};
