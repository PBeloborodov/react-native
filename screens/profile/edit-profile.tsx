import React, {FC} from 'react';
import {Dimensions, StyleSheet, View, Image, Text} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import Button from '../../src/common/components/button';
import {defaultStyle} from '../../src/common/styles/default';
import {style} from '../../src/common/styles/variables/style';
import InputForm from '../components/input-form';
type Props = {};

const EditProfile: FC<Props> = props => {
  const heightScreen = Dimensions.get('window').height + 100;

  return (
    <ScrollView
      style={{backgroundColor: style.color.white, height: heightScreen}}>
      <View style={styles.addPhoto}>
        <Image
          source={require('../../src/assets/img/chats/Ellipse15.jpg')}
          style={styles.addPhotoImg}
          resizeMode="cover"
        />
        <Button
          onClick={() => {}}
          title={'Загрузить фото'}
          type="white"
          customStyleText={{fontWeight: '500'}}
        />
      </View>
      <View style={styles.infoUser}>
        <View style={styles.infoUserItem}>
          <Text style={styles.infoUserLabel}>Имя</Text>
          <View style={styles.infoUserInputWrap}>
            <TextInput placeholder="Введите значение" />
          </View>
        </View>
        <View style={styles.infoUserItem}>
          <Text style={styles.infoUserLabel}>Фамилия</Text>
          <View style={styles.infoUserInputWrap}>
            <TextInput placeholder="Введите значение" />
          </View>
        </View>
        <View style={styles.infoUserItem}>
          <Text style={styles.infoUserLabel}>Телефон</Text>
          <View style={styles.infoUserInputWrap}>
            <TextInput placeholder="Введите значение" />
          </View>
        </View>
        <View style={[styles.infoUserItem, {marginBottom: 0}]}>
          <Text style={styles.infoUserLabel}>Email</Text>
          <View style={styles.infoUserInputWrap}>
            <TextInput placeholder="Введите значение" />
          </View>
        </View>
      </View>
      <InputForm label="О себе" placeholder="Ведите значение" multiline />
      <View style={styles.contact}>
        <Text style={[defaultStyle.text, styles.contactTitle]}>
          Контактные данные
        </Text>
        <View style={styles.contactItem}>
          <Text style={styles.contactItemLabel}>Страна</Text>
          <View style={styles.contactItemInput}>
            <TextInput
              placeholder="Введите значение"
              value="Россия"
              style={{color: style.color.blue}}
            />
          </View>
        </View>
        <View style={styles.contactItem}>
          <Text style={styles.contactItemLabel}>Город</Text>
          <View style={styles.contactItemInput}>
            <TextInput
              placeholder="Введите значение"
              value="Москва"
              style={{color: style.color.blue}}
            />
          </View>
        </View>
        <View style={styles.contactItem}>
          <Text style={styles.contactItemLabel}>Телефон для связи</Text>
          <View style={styles.contactItemInput}>
            <TextInput
              placeholder="Введите телефон"
              style={{color: style.color.blue}}
            />
          </View>
        </View>
        <View style={styles.contactItem}>
          <Text style={styles.contactItemLabel}>Сайт</Text>
          <View style={styles.contactItemInput}>
            <TextInput
              placeholder="Введите адрес"
              style={{color: style.color.blue}}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  addPhoto: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: style.color.gallery,
  },
  addPhotoImg: {
    height: 80,
    width: 80,
    borderRadius: 50,
    marginRight: 20,
  },
  infoUser: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: style.color.gallery,
  },
  infoUserItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  infoUserLabel: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  infoUserInputWrap: {
    width: '70%',
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: style.color.alabaster,
    borderRadius: 4,
  },
  contact: {
    marginBottom: 50,
  },
  contactTitle: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 5,
    color: style.color.tundora,
  },
  contactItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: style.color.gallery,
    borderTopWidth: 1,
    borderTopColor: style.color.gallery,
    paddingBottom: 15,
    paddingTop: 15,
    paddingRight: 20,
    paddingLeft: 20,
  },
  contactItemLabel: {
    width: '49%',
    color: style.color.mineShaft,
  },
  contactItemInput: {
    width: '49%',
    color: style.color.blue,
  },
});

export default EditProfile;
