import React, {FC} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
} from 'react-native';
import InfoBlock from './components/info-block';
import MainImg from './components/main-img';
import IconSphere from '../src/assets/img/icon/icon-sphere.svg';
import PlusBlue from '../src/assets/img/icon/plus-blue.svg';
import {defaultStyle} from './../src/common/styles/default';
import ParamFilter from './components/param-filter';
import BtnsBlock from './components/btns-block';
import PostItem from './components/post-item';
import {style} from '../src/common/styles/variables/style';

type Props = {};

const Tops: FC<Props> = () => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{backgroundColor: '#ffffff', paddingBottom: 40}}>
      <MainImg url={require('../src/assets/img/fon-home.jpg')} />
      <InfoBlock
        content="Элементы и&nbsp;функции платформы (развитие, ошибки и&nbsp;доработки)"
        label="Cфера"
        icon={<IconSphere width={24} height={24} />}
      />
      <TextInput
        style={[defaultStyle.inputName]}
        placeholder={'Название топа'}
      />
      <TextInput
        style={[defaultStyle.descriptionInput, styles.nameBlock]}
        placeholder={'Описание топа'}
      />
      <View style={[defaultStyle.smallLine]} />
      <Text style={[defaultStyle.titleBlock]}>Критерии</Text>
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
      <View style={styles.listPost}>
        <PostItem />
        <Pressable>
          <View style={styles.addPost}>
            <PlusBlue width="24" height="24" />
            <Text style={styles.addPostText}>Добавить объект</Text>
          </View>
        </Pressable>
      </View>
      <BtnsBlock />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  nameBlock: {},
  listPost: {
    display: 'flex',
    flexDirection: 'column',
  },
  addPost: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderWidth: 1,
    marginRight: 20,
    marginLeft: 20,
    borderColor: style.color.blue,
  },
  addPostText: {
    fontSize: 16,
    color: style.color.blue,
    marginLeft: 15,
  },
});

export default Tops;
