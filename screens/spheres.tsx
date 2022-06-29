import React from 'react';
import {ScrollView, View, Text, StyleSheet, TextInput} from 'react-native';
import MainImg from './components/main-img';
import InfoBlock from './components/info-block';
import ChildSphere from '../src/assets/img/icon/menu/child-sphere.svg';
import {defaultStyle} from './../src/common/styles/default';
import ActiveParagraph from './components/active-paragraph';
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
import CheckBoxCustom from './home/components/checkbox-custom';

function Spheres() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={defaultStyle.fon}>
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
        activeElementCustom={checked => <CheckBoxCustom checked={checked} />}
      />
      <ActiveParagraph
        icon={<Public />}
        label={'Публичная'}
        onPresParagraph={() => {}}
        activeElementCustom={checked => <CheckBoxCustom checked={checked} />}
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
        activeElementCustom={checked => <CheckBoxCustom checked={checked} />}
      />
      <ActiveParagraph
        icon={<Services />}
        label={'Услуги'}
        onPresParagraph={() => {}}
        activeElementCustom={checked => <CheckBoxCustom checked={checked} />}
      />
      <ActiveParagraph
        icon={<User />}
        label={'Люди'}
        onPresParagraph={() => {}}
        activeElementCustom={checked => <CheckBoxCustom checked={checked} />}
      />
      <ActiveParagraph
        icon={<UserGroup />}
        label={'Социальная'}
        onPresParagraph={() => {}}
        activeElementCustom={checked => <CheckBoxCustom checked={checked} />}
      />
      <ActiveParagraph
        icon={<Vacancy />}
        label={'Вакансии'}
        onPresParagraph={() => {}}
        activeElementCustom={checked => <CheckBoxCustom checked={checked} />}
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
        activeElementCustom={checked => <CheckBoxCustom checked={checked} />}
      />
      <ActiveParagraph
        icon={<IconMap />}
        label={'Карта'}
        onPresParagraph={() => {}}
        activeElementCustom={checked => <CheckBoxCustom checked={checked} />}
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
        activeElementCustom={checked => <CheckBoxCustom checked={checked} />}
      />
      <ActiveParagraph
        icon={<VideoColor />}
        label={'Видеозаписи'}
        activeElementCustom={checked => <CheckBoxCustom checked={checked} />}
        onPresParagraph={() => {}}
      />
      <ActiveParagraph
        icon={<AudioColor />}
        label={'Аудиозаписи'}
        activeElementCustom={checked => <CheckBoxCustom checked={checked} />}
        onPresParagraph={() => {}}
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
