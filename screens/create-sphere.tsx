import React, {FC} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import InfoBlock from './components/info-block';
import IconSphere from '../src/assets/img/icon/icon-sphere.svg';
import InputForm from './components/input-form';
import {style} from '../src/common/styles/variables/style';
import ActiveParagraph from './components/active-paragraph';
import CheckBox from './home/components/checkbox';
import {defaultStyle} from '../src/common/styles/default';
import BtnsBlock from './components/btns-block';
import CheckBoxCustom from './home/components/checkbox-custom';
type Props = {};

const CreateSphere: FC<Props> = props => {
  return (
    <ScrollView style={defaultStyle.fon}>
      <View style={styles.container}>
        <InfoBlock
          content="Элементы и&nbsp;функции платформы (развитие, ошибки и&nbsp;доработки)"
          label="Cфера"
          icon={<IconSphere width={24} height={24} />}
        />
        <InputForm label="Название *" placeholder="Ведите значение" />
        <InputForm label="Псевдоним *" placeholder="Ведите значение" error />
        <InputForm label="Описание" placeholder="Ведите значение" multiline />
        <Text style={[defaultStyle.descriptionInput]}>Группы свойства</Text>
        <ActiveParagraph
          label={'Группа свойства 1'}
          onPresParagraph={() => {}}
          activeElementCustom={checked => <CheckBoxCustom checked={checked} />}
        />
        <ActiveParagraph
          label={'Группа свойства 2'}
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
});

export default CreateSphere;
