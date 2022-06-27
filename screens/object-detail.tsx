import React, {FC, ReactNode} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';
import InfoBlock from './components/info-block';
import MainImg from './components/main-img';
import IconSphere from '../src/assets/img/icon/icon-sphere.svg';
import ArrowDownGrey from '../src/assets/img/icon/arrow-down-grey.svg';
import {defaultStyle} from './../src/common/styles/default';
import ImgBlock from './components/img-block';
import NonePhoto from './components/none-photo';
import NoneVideo from './components/none-video';
import OnOffChtcked from './components/on-off-checked';
import {style} from '../src/variables/style';
import RNPickerSelect from 'react-native-picker-select';
import BtnsBlock from './components/btns-block';

type Props = {};

const placeholder = {
  label: 'Выберите значение',
  value: null,
  color: '#969696',
};

const OdjectDetail: FC<Props> = ({}) => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{backgroundColor: '#ffffff', paddingBottom: 40}}>
      <MainImg url={require('../src/assets/img/fon-home.jpg')} />
      <InfoBlock
        content="Элементы и&nbsp;функции платформы (развитие, ошибки и&nbsp;доработки)"
        label="Родительская сфера"
        icon={<IconSphere width={24} height={24} />}
      />
      <Text style={[defaultStyle.titlePage]}>Название объекта</Text>
      <Text style={[defaultStyle.subTitlePage, styles.nameBlock]}>
        Описание объекта
      </Text>
      <View style={[defaultStyle.smallLine]} />
      <Text style={[defaultStyle.titleBlock]}>Фотографии</Text>
      <View style={[styles.photoBlock]}>
        <ImgBlock url={require('../src/assets/img/exemple.jpg')} />
        <ImgBlock url={require('../src/assets/img/exemple.jpg')} />
        <NonePhoto />
      </View>
      <Text style={[defaultStyle.titleBlock, defaultStyle.MT_30]}>Видео</Text>
      <View style={[styles.photoBlock]}>
        <NoneVideo />
      </View>
      <Text style={[defaultStyle.titleBlock, defaultStyle.MT_30]}>
        Характеристики
      </Text>
      <View style={styles.characteristics}>
        <View style={styles.characteristicsItem}>
          <Text style={styles.characteristicsLabel}>Логическое значение</Text>
          <View style={styles.characteristicsInput}>
            <OnOffChtcked />
          </View>
        </View>
        <View style={styles.characteristicsItem}>
          <Text style={styles.characteristicsLabel}>Строковое значение</Text>
          <View style={styles.characteristicsInput}>
            <TextInput
              style={defaultStyle.input}
              placeholder={'Ведите значение'}
            />
          </View>
        </View>
        <View style={styles.characteristicsItem}>
          <Text style={styles.characteristicsLabel}>Список выбора</Text>
          <View style={styles.characteristicsInput}>
            <RNPickerSelect
              onValueChange={value => console.log(value)}
              style={{viewContainer: defaultStyle.select}}
              Icon={() => <ArrowDownGrey />}
              placeholder={placeholder}
              items={[
                {label: 'valu1', value: 'valu1'},
                {label: 'valu2', value: 'valu2'},
                {label: 'valu2', value: 'valu3'},
              ]}
            />
          </View>
        </View>
        <View style={styles.characteristicsItem}>
          <Text style={styles.characteristicsLabel}>Целое значение</Text>
          <View style={styles.characteristicsInput}>
            <TextInput
              style={defaultStyle.input}
              placeholder={'Ведите значение'}
            />
          </View>
        </View>
      </View>
      <BtnsBlock />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  nameBlock: {paddingTop: 10, paddingBottom: 10},
  photoBlock: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
  },
  characteristics: {},
  characteristicsItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 18,
    paddingBottom: 18,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: style.color.gallery,
    borderBottomColor: style.color.gallery,
  },
  characteristicsLabel: {
    width: '47%',
  },
  characteristicsInput: {
    width: '47%',
  },
});

export default OdjectDetail;