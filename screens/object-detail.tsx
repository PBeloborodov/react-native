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
import {style} from '../src/common/styles/variables/style';
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
      <TextInput
        style={[defaultStyle.inputName]}
        placeholder={'Название подборки'}
      />
      <TextInput
        style={[defaultStyle.descriptionInput, styles.nameBlock]}
        placeholder={'Описание подборки'}
      />
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
        <View style={defaultStyle.characteristicsItem}>
          <Text style={defaultStyle.characteristicsLabel}>
            Логическое значение
          </Text>
          <View style={defaultStyle.characteristicsInput}>
            <OnOffChtcked />
          </View>
        </View>
        <View style={defaultStyle.characteristicsItem}>
          <Text style={defaultStyle.characteristicsLabel}>
            Строковое значение
          </Text>
          <View style={defaultStyle.characteristicsInput}>
            <TextInput
              style={defaultStyle.input}
              placeholder={'Ведите значение'}
            />
          </View>
        </View>
        <View style={defaultStyle.characteristicsItem}>
          <Text style={defaultStyle.characteristicsLabel}>Список выбора</Text>
          <View style={defaultStyle.characteristicsInput}>
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
        <View style={defaultStyle.characteristicsItem}>
          <Text style={defaultStyle.characteristicsLabel}>Целое значение</Text>
          <View style={defaultStyle.characteristicsInput}>
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
});

export default OdjectDetail;
