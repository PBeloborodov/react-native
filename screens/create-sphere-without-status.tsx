import React, {FC} from 'react';
import {View, StyleSheet, ScrollView, Text, Dimensions} from 'react-native';
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

const CreateSphereWithoutStatus: FC<Props> = props => {
  const heightScreen = Dimensions.get('window').height - 100;
  return (
    <ScrollView style={defaultStyle.fon}>
      <View style={[styles.container, {height: heightScreen}]}>
        <InfoBlock
          content="Элементы и&nbsp;функции платформы (развитие, ошибки и&nbsp;доработки)"
          label="Cфера"
          icon={<IconSphere width={24} height={24} />}
        />
        <InputForm label="Название" placeholder="Ведите значение" />
        <InputForm label="Псевдоним" placeholder="Ведите значение" />
        <Text style={[defaultStyle.descriptionInput, {marginTop: 15}]}>
          Критерии
        </Text>
        <ActiveParagraph
          label={'Критерии 1'}
          onPresParagraph={() => {}}
          activeElementCustom={checked => <CheckBoxCustom checked={checked} />}
        />
        <ActiveParagraph
          label={'Критерии 2'}
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
    display: 'flex',
    backgroundColor: style.color.white,
    flex: 1,
  },
});

export default CreateSphereWithoutStatus;
