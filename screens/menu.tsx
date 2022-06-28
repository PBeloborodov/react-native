import React from 'react';
import {View, Text, ScrollView, StyleSheet, Pressable} from 'react-native';
import {style} from '../src/common/styles/variables/style';
import Cub from '../src/assets/img/icon/menu/cub.svg';
import ChildSphere from '../src/assets/img/icon/menu/child-sphere.svg';
import RelatedSphere from '../src/assets/img/icon/menu/related-sphere.svg';
import ArrowRight from '../src/assets/img/icon/menu/arrow-right.svg';
import Criteria from '../src/assets/img/icon/menu/criteria.svg';
import GroupCriteria from '../src/assets/img/icon/menu/group-criteria.svg';
import Properties from '../src/assets/img/icon/menu/properties.svg';
import GrupProperties from '../src/assets/img/icon/menu/grup-properties.svg';
import Articles from '../src/assets/img/icon/menu/articles.svg';
import Collections from '../src/assets/img/icon/menu/collections.svg';
import Fast from '../src/assets/img/icon/menu/fast.svg';
import Tops from '../src/assets/img/icon/menu/tops.svg';
import Batls from '../src/assets/img/icon/menu/batls.svg';
import Ratings from '../src/assets/img/icon/menu/ratings.svg';
import Photo from '../src/assets/img/icon/menu/photo.svg';
import Audio from '../src/assets/img/icon/menu/audio.svg';
import Video from '../src/assets/img/icon/menu/video.svg';
import File from '../src/assets/img/icon/menu/file.svg';

const Menu = () => {
  return (
    <ScrollView style={styles.menu}>
      <Pressable style={styles.menuItem}>
        <View style={styles.menuItemImg}>
          <ChildSphere width={24} height={24} />
        </View>
        <Text style={styles.menuItemText}>Дочерняя сфера</Text>
        <Text style={styles.menuItemСounter}>10</Text>
        <View style={styles.menuArrow}>
          <ArrowRight />
        </View>
      </Pressable>
      <Pressable style={styles.menuItem}>
        <View style={styles.menuItemImg}>
          <RelatedSphere width={24} height={24} />
        </View>
        <Text style={styles.menuItemText}>Связанная сфера</Text>
        <Text style={styles.menuItemСounter}>9</Text>
        <View style={styles.menuArrow}>
          <ArrowRight />
        </View>
      </Pressable>
      <Pressable style={styles.menuItem}>
        <View style={styles.menuItemImg}>
          <Cub width={24} height={24} />
        </View>
        <Text style={styles.menuItemText}>Объекты</Text>
        <Text style={styles.menuItemСounter}>134</Text>
        <View style={styles.menuArrow}>
          <ArrowRight />
        </View>
      </Pressable>
      <Pressable style={styles.menuItem}>
        <View style={styles.menuItemImg}>
          <Criteria width={24} height={24} />
        </View>
        <Text style={styles.menuItemText}>Критерии</Text>
        <Text style={styles.menuItemСounter}></Text>
        <View style={styles.menuArrow}>
          <ArrowRight />
        </View>
      </Pressable>
      <Pressable style={styles.menuItem}>
        <View style={styles.menuItemImg}>
          <GroupCriteria width={24} height={24} />
        </View>
        <Text style={styles.menuItemText}>Группы критериев</Text>
        <Text style={styles.menuItemСounter}></Text>
        <View style={styles.menuArrow}>
          <ArrowRight />
        </View>
      </Pressable>
      <Pressable style={styles.menuItem}>
        <View style={styles.menuItemImg}>
          <Properties width={24} height={24} />
        </View>
        <Text style={styles.menuItemText}>Свойства</Text>
        <Text style={styles.menuItemСounter}></Text>
        <View style={styles.menuArrow}>
          <ArrowRight />
        </View>
      </Pressable>
      <Pressable style={styles.menuItem}>
        <View style={styles.menuItemImg}>
          <GrupProperties width={24} height={24} />
        </View>
        <Text style={styles.menuItemText}>Группы свойств</Text>
        <Text style={styles.menuItemСounter}></Text>
        <View style={styles.menuArrow}>
          <ArrowRight />
        </View>
      </Pressable>
      <Pressable style={styles.menuItem}>
        <View style={styles.menuItemImg}>
          <Articles width={24} height={24} />
        </View>
        <Text style={styles.menuItemText}>Статьи</Text>
        <Text style={styles.menuItemСounter}></Text>
        <View style={styles.menuArrow}>
          <ArrowRight />
        </View>
      </Pressable>
      <Pressable style={styles.menuItem}>
        <View style={styles.menuItemImg}>
          <Collections width={24} height={24} />
        </View>
        <Text style={styles.menuItemText}>Подборки</Text>
        <Text style={styles.menuItemСounter}></Text>
        <View style={styles.menuArrow}>
          <ArrowRight />
        </View>
      </Pressable>
      <Pressable style={styles.menuItem}>
        <View style={styles.menuItemImg}>
          <Fast width={24} height={24} />
        </View>
        <Text style={styles.menuItemText}>Пост</Text>
        <Text style={styles.menuItemСounter}></Text>
        <View style={styles.menuArrow}>
          <ArrowRight />
        </View>
      </Pressable>
      <Pressable style={styles.menuItem}>
        <View style={styles.menuItemImg}>
          <Tops width={24} height={24} />
        </View>
        <Text style={styles.menuItemText}>Топы</Text>
        <Text style={styles.menuItemСounter}></Text>
        <View style={styles.menuArrow}>
          <ArrowRight />
        </View>
      </Pressable>
      <Pressable style={styles.menuItem}>
        <View style={styles.menuItemImg}>
          <Batls width={24} height={24} />
        </View>
        <Text style={styles.menuItemText}>Батлы</Text>
        <Text style={styles.menuItemСounter}></Text>
        <View style={styles.menuArrow}>
          <ArrowRight />
        </View>
      </Pressable>
      <Pressable style={styles.menuItem}>
        <View style={styles.menuItemImg}>
          <Ratings width={24} height={24} />
        </View>
        <Text style={styles.menuItemText}>Оценки</Text>
        <Text style={styles.menuItemСounter}></Text>
        <View style={styles.menuArrow}>
          <ArrowRight />
        </View>
      </Pressable>
      <Pressable style={styles.menuItem}>
        <View style={styles.menuItemImg}>
          <Photo width={24} height={24} />
        </View>
        <Text style={styles.menuItemText}>Фото</Text>
        <Text style={styles.menuItemСounter}></Text>
        <View style={styles.menuArrow}>
          <ArrowRight />
        </View>
      </Pressable>
      <Pressable style={styles.menuItem}>
        <View style={styles.menuItemImg}>
          <Audio width={24} height={24} />
        </View>
        <Text style={styles.menuItemText}>Аудио</Text>
        <Text style={styles.menuItemСounter}></Text>
        <View style={styles.menuArrow}>
          <ArrowRight />
        </View>
      </Pressable>
      <Pressable style={styles.menuItem}>
        <View style={styles.menuItemImg}>
          <Video width={24} height={24} />
        </View>
        <Text style={styles.menuItemText}>Видео</Text>
        <Text style={styles.menuItemСounter}></Text>
        <View style={styles.menuArrow}>
          <ArrowRight />
        </View>
      </Pressable>
      <Pressable style={styles.menuItem}>
        <View style={styles.menuItemImg}>
          <File width={24} height={24} />
        </View>
        <Text style={styles.menuItemText}>Файл</Text>
        <Text style={styles.menuItemСounter}></Text>
        <View style={styles.menuArrow}>
          <ArrowRight />
        </View>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  menu: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: style.color.white,
    marginBottom: 20,
  },
  menuItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 30,
    paddingRight: 30,
    borderTopColor: style.color.gallery,
    borderBottomColor: style.color.gallery,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  menuItemText: {
    marginRight: 15,
    marginLeft: 15,
    fontSize: 14,
  },
  menuItemImg: {},
  menuItemСounter: {
    color: style.color.dustyGray,
  },
  menuArrow: {
    position: 'absolute',
    right: 15,
  },
});
export default Menu;
