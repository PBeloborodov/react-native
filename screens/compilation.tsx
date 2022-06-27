import React, {FC} from 'react';
import {View, ScrollView, Text, StyleSheet, Pressable} from 'react-native';
import InfoBlock from './components/info-block';
import MainImg from './components/main-img';
import ChildSphere from '../src/assets/img/icon/menu/child-sphere.svg';
import PlusBlue from '../src/assets/img/icon/plus-blue.svg';
import {defaultStyle} from './../src/common/styles/default';
import ParamFilter from './components/param-filter';
import BtnsBlock from './components/btns-block';

type Props = {};

const Compilation: FC<Props> = () => {
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
      <Text style={[defaultStyle.titlePage]}>Название подборки</Text>
      <Text style={[defaultStyle.subTitlePage, styles.nameBlock]}>
        Описание подборки
      </Text>
      <View style={[defaultStyle.smallLine]} />
      <Text style={[defaultStyle.titleBlock, defaultStyle.MT_30]}>
        Критерии
      </Text>
      <View style={[defaultStyle.filtterBlock]}>
        <ParamFilter content="надежность" square={false} />
        <ParamFilter content="экономичность" square={false} />
        <Pressable>
          <View style={[defaultStyle.filtterBlockBtn]}>
            <Text style={[defaultStyle.filtterBlockBtnText]}>добавить</Text>
            <View style={[defaultStyle.filtterBlockCross]}>
              <PlusBlue />
            </View>
          </View>
        </Pressable>
      </View>
      <Text style={[defaultStyle.titleBlock, defaultStyle.MT_30]}>Фильтры</Text>
      <View style={[defaultStyle.filtterBlock]}>
        <ParamFilter content="Цена: от 1000" />
        <ParamFilter content="Товары со скидкой" />
        <View style={[defaultStyle.filtterBlockAdd]}>
          <Pressable>
            <View style={[defaultStyle.filtterBlockBtn, {borderRadius: 8}]}>
              <Text style={[defaultStyle.filtterBlockBtnText]}>добавить</Text>
              <View style={[defaultStyle.filtterBlockCross]}>
                <PlusBlue />
              </View>
            </View>
          </Pressable>
        </View>
      </View>
      <Text style={[defaultStyle.titleBlock, defaultStyle.MT_30]}>
        По мнению
      </Text>
      <View style={[defaultStyle.filtterBlock]}>
        <ParamFilter
          content="Максим Петров"
          urlImg={require('../src/assets/img/user-photo.jpg')}
        />
        <View style={[defaultStyle.filtterBlockAdd]}>
          <Pressable>
            <View style={[defaultStyle.filtterBlockBtn, {borderRadius: 8}]}>
              <Text style={[defaultStyle.filtterBlockBtnText]}>добавить</Text>
              <View style={[defaultStyle.filtterBlockCross]}>
                <PlusBlue />
              </View>
            </View>
          </Pressable>
        </View>
      </View>
      <BtnsBlock />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  nameBlock: {},
});

export default Compilation;
