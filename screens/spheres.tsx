import React from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
} from 'react-native';
import Button from '../src/common/components/button';
import {style} from '../src/common/styles/variables/style';
import InfoPanel from './home/components/info-panel';
import TabsPanel from './home/components/tabs-panel';
import FilterPanel from './home/components/filter-panel';
import MainImg from './components/main-img';
import InfoBlock from './components/info-block';
import ChildSphere from '../src/assets/img/icon/menu/child-sphere.svg';
import {defaultStyle} from './../src/common/styles/default';
import ActiveParagraph from './components/active-paragraph';
import CheckBox from './home/components/checkbox';
import Lock from '../src/assets/img/icon/lock.svg';
import Public from '../src/assets/img/icon/public.svg';
import Services from '../src/assets/img/icon/services.svg';
import Cart from '../src/assets/img/icon/cart.svg';
import User from '../src/assets/img/icon/user.svg';
import UserGroup from '../src/assets/img/icon/user-group.svg';
import Vacancy from '../src/assets/img/icon/vacancy.svg';
import ClockTemp from '../src/assets/img/icon/clock-temp.svg';
import IconMap from '../src/assets/img/icon/icon-map.svg';
import PhotoColor from '../src/assets/img/icon/photo-color.svg';
import VideoColor from '../src/assets/img/icon/video-color.svg';
import AudioColor from '../src/assets/img/icon/audio-color.svg';
import BtnsBlock from './components/btns-block';

function Spheres() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{backgroundColor: '#ffffff', paddingBottom: 40}}>
      <MainImg url={require('../src/assets/img/fon-home.jpg')} />
      <InfoBlock
        content="Элементы и&nbsp;функции платформы (развитие, ошибки и&nbsp;доработки)"
        label="Cфера"
        icon={<ChildSphere width={24} height={24} />}
      />
      <TextInput
        style={[defaultStyle.inputName]}
        placeholder={'Название сферы'}
      />
      <TextInput
        style={[defaultStyle.descriptionInput, styles.nameBlock]}
        placeholder={'Описание сферы'}
      />
      <View style={[defaultStyle.smallLine]} />
      <Text style={[defaultStyle.titleBlock]}>Тип сферы</Text>
      <Text style={[defaultStyle.descriptionInput, styles.groupFilter]}>
        Доступность
      </Text>
      <ActiveParagraph
        icon={<Lock />}
        label={'Приватная'}
        onPresParagraph={() => {}}
        activeElement={<CheckBox customCheck={() => {}} />}
      />
      <ActiveParagraph
        icon={<Public />}
        label={'Публичная'}
        onPresParagraph={() => {}}
        activeElement={<CheckBox customCheck={() => {}} />}
      />

      <Text
        style={[
          defaultStyle.descriptionInput,
          styles.groupFilter,
          styles.MT_30,
        ]}>
        Контент
      </Text>
      <ActiveParagraph
        icon={<Cart />}
        label={'Товары'}
        onPresParagraph={() => {}}
        activeElement={<CheckBox customCheck={() => {}} />}
      />
      <ActiveParagraph
        icon={<Services />}
        label={'Услуги'}
        onPresParagraph={() => {}}
        activeElement={<CheckBox customCheck={() => {}} />}
      />
      <ActiveParagraph
        icon={<User />}
        label={'Люди'}
        onPresParagraph={() => {}}
        activeElement={<CheckBox customCheck={() => {}} />}
      />
      <ActiveParagraph
        icon={<UserGroup />}
        label={'Социальная'}
        onPresParagraph={() => {}}
        activeElement={<CheckBox customCheck={() => {}} />}
      />
      <ActiveParagraph
        icon={<Vacancy />}
        label={'Вакансии'}
        onPresParagraph={() => {}}
        activeElement={<CheckBox customCheck={() => {}} />}
      />
      <Text
        style={[
          defaultStyle.descriptionInput,
          styles.groupFilter,
          styles.MT_30,
        ]}>
        Настройки
      </Text>
      <ActiveParagraph
        icon={<ClockTemp />}
        label={'Временная'}
        onPresParagraph={() => {}}
        activeElement={<CheckBox customCheck={() => {}} />}
      />
      <ActiveParagraph
        icon={<IconMap />}
        label={'Карта'}
        onPresParagraph={() => {}}
        activeElement={<CheckBox customCheck={() => {}} />}
      />
      <Text
        style={[
          defaultStyle.descriptionInput,
          styles.groupFilter,
          styles.MT_30,
        ]}>
        Медиа
      </Text>
      <ActiveParagraph
        icon={<PhotoColor />}
        label={'Фотографии'}
        onPresParagraph={() => {}}
        activeElement={<CheckBox customCheck={() => {}} />}
      />
      <ActiveParagraph
        icon={<VideoColor />}
        label={'Видеозаписи'}
        onPresParagraph={() => {}}
        activeElement={<CheckBox customCheck={() => {}} />}
      />
      <ActiveParagraph
        icon={<AudioColor />}
        label={'Аудиозаписи'}
        onPresParagraph={() => {}}
        activeElement={<CheckBox customCheck={() => {}} />}
      />
      <BtnsBlock />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  wrapImage: {
    width: '100%',
    height: 212,
  },
  nameBlock: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  groupFilter: {
    marginBottom: 5,
  },
  MT_30: {
    marginTop: 30,
  },
});

export default Spheres;
