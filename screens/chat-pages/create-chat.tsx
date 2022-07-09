import React, {FC} from 'react';
import {StyleSheet, View, Text, Dimensions, Pressable} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {defaultStyle} from '../../src/common/styles/default';
import {style} from '../../src/common/styles/variables/style';
import UserItem from '../components/user-item';
import UploadPhoto from '../../src/assets/img/icon/upload-photo.svg';
const LIST_USER = [
  {
    source: require('../../src/assets/img/chats/image54.jpg'),
    name: 'Мария Иванова',
    info: '40',
  },
  {
    source: require('../../src/assets/img/chats/image55.jpg'),
    name: 'Максим Петров',
    info: '38',
  },
  {
    source: require('../../src/assets/img/chats/image56.jpg'),
    name: 'Светлана Сидорова',
    info: '14',
  },
];

type Props = {};

const CreateChat: FC<Props> = props => {
  const heightScreen = Dimensions.get('window').height - 94;

  return (
    <ScrollView>
      <View
        style={[
          styles.container,
          {height: heightScreen, backgroundColor: 'white'},
        ]}>
        <View style={styles.addPhoto}>
          <UploadPhoto />
          <View style={styles.addPhotoWrapBtn}>
            <TextInput
              placeholder={'Название чата'}
              style={[defaultStyle.text, styles.addPhotoInput]}
            />
          </View>
        </View>
        <Text style={[defaultStyle.text, styles.label]}>Участники</Text>
        <View style={{height: '68%'}}>
          <ScrollView style={styles.listUser}>
            {LIST_USER.map(user => (
              <UserItem {...user} />
            ))}
          </ScrollView>
        </View>
        <Pressable style={styles.btn}>
          <Text style={[defaultStyle.text, styles.btnText]}>Создать чат</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'flex-start',
  },
  addPhoto: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 24,
    paddingBottom: 24,
  },
  addPhotoWrapBtn: {
    flex: 1,
    paddingLeft: 17,
    paddingRight: 17,
    paddingTop: 11,
    paddingBottom: 11,
    marginLeft: 16,
    backgroundColor: style.color.alabaster,
  },
  addPhotoInput: {
    fontWeight: '500',
    fontFamily: 'Roboto-Regular',
    margin: 0,
    padding: 0,
  },
  listUser: {
    display: 'flex',
    width: '100%',
    height: '60%',
    flex: 1,
  },
  label: {
    fontSize: 16,
    color: style.color.tundora,
    paddingLeft: 20,
    paddingBottom: 8,
    paddingTop: 8,
  },
  btn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    padding: 15,
    backgroundColor: style.color.blue,
    borderRadius: 4,
  },
  btnText: {
    color: style.color.white,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default CreateChat;
