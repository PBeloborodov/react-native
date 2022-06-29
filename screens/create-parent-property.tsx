import React, {FC} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import InfoBlock from './components/info-block';
import IconSphere from '../src/assets/img/icon/icon-sphere.svg';
import InputForm from './components/input-form';
import {style} from '../src/common/styles/variables/style';
import {defaultStyle} from '../src/common/styles/default';

import BtnsBlock from './components/btns-block';
import SelectForm from './components/select-form';
import OnOffChtcked from './components/on-off-checked';
import ActiveParagraph from './components/active-paragraph';
import CheckBox from './home/components/checkbox';
import CheckBoxCustom from './home/components/checkbox-custom';
type Props = {};

const CreateParentProperty: FC<Props> = props => {
  return (
    <ScrollView style={defaultStyle.fon}>
      <View style={styles.container}>
        <InfoBlock
          content="Элементы и&nbsp;функции платформы (развитие, ошибки и&nbsp;доработки)"
          label="Cфера"
          icon={<IconSphere width={24} height={24} />}
        />
        <SelectForm label="Родительское свойство" placeholder="Выбрать" />
        <InputForm label="Название" placeholder="Ведите значение" />
        <SelectForm label="Тип свойства" placeholder="Выберите значение" />
        <View style={styles.rowInputs}>
          <View style={styles.rowInputsItem}>
            <InputForm
              label="Минимум"
              placeholder="Ведите значение"
              customWrapStyle={{padding: 0}}
            />
          </View>
          <View style={styles.rowInputsItem}>
            <InputForm
              label="Максимум"
              placeholder="Ведите значение"
              customWrapStyle={{padding: 0}}
            />
          </View>
        </View>
        <View style={[styles.rowInputs, {paddingTop: 20, paddingBottom: 20}]}>
          <View style={styles.rowInputsItem}>
            <InputForm
              label="Шаг"
              placeholder="Ведите значение"
              customWrapStyle={{padding: 0}}
            />
          </View>
          <View style={styles.rowInputsItem}>
            <InputForm
              label="Еденицы измерения"
              placeholder="Ведите значение"
              customWrapStyle={{padding: 0}}
            />
          </View>
        </View>
        <View style={defaultStyle.characteristics}>
          <View style={defaultStyle.characteristicsItem}>
            <Text
              style={[
                defaultStyle.characteristicsLabel,
                {fontWeight: '700', fontSize: 16},
              ]}>
              Фильтрация
            </Text>
            <View style={defaultStyle.characteristicsInput}>
              <OnOffChtcked />
            </View>
          </View>
          <View style={defaultStyle.characteristicsItem}>
            <Text
              style={[
                defaultStyle.characteristicsLabel,
                {fontWeight: '700', fontSize: 16},
              ]}>
              Скрыть у объекта
            </Text>
            <View style={defaultStyle.characteristicsInput}>
              <OnOffChtcked />
            </View>
          </View>
          <View style={defaultStyle.characteristicsItem}>
            <Text
              style={[
                defaultStyle.characteristicsLabel,
                {fontWeight: '700', fontSize: 16},
              ]}>
              Показывать в превью
            </Text>
            <View style={defaultStyle.characteristicsInput}>
              <OnOffChtcked />
            </View>
          </View>
        </View>
        <Text style={[defaultStyle.descriptionInput, {marginTop: 45}]}>
          Группы свойства
        </Text>
        <ActiveParagraph
          label={'Группы свойства 1'}
          onPresParagraph={() => {}}
          activeElementCustom={checked => <CheckBoxCustom checked={checked} />}
        />
        <ActiveParagraph
          label={'Группы свойства 2'}
          onPresParagraph={() => {}}
          activeElementCustom={checked => <CheckBoxCustom checked={checked} />}
        />
        <BtnsBlock />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: style.color.white,
    height: '100%',
    paddingBottom: 40,
  },
  rowInputs: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  rowInputsItem: {
    width: '47%',
  },
});

export default CreateParentProperty;
