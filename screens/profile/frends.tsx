import React, {FC} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  ImageSourcePropType,
  Dimensions,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Button from '../../src/common/components/button';
import {style} from '../../src/common/styles/variables/style';

const LIST_FRENDS = [
  {
    source: require('../../src/assets/img/chats/image54.jpg'),
    name: 'Мария Иванова',
    description: 'Карма: 40',
    status: false,
  },
  {
    source: require('../../src/assets/img/chats/image21.jpg'),
    name: 'Максим Петров',
    description: '38 мнений',
    status: true,
  },
  {
    source: require('../../src/assets/img/chats/image56.jpg'),
    name: 'Светлана Сидорова',
    description: '14 мнений',
    status: false,
  },
];
type Props = {};

const Frends: FC<Props> = props => {
  const heightScreen = Dimensions.get('window').height + 100;

  return (
    <ScrollView
      style={{height: heightScreen, backgroundColor: style.color.white}}>
      <View style={styles.filter}>
        <Pressable style={styles.filterItem}>
          <Text style={[styles.filterItemText, styles.filterItemTextActive]}>
            Друзья <Text style={{color: style.color.opacity.blue}}>114</Text>
          </Text>
          <View style={styles.filterLine} />
        </Pressable>
        <Pressable style={styles.filterItem}>
          <Text style={styles.filterItemText}>
            Подписчики <Text style={{color: style.color.opacity.blue}}>37</Text>
          </Text>
        </Pressable>
        <Pressable style={styles.filterItem}>
          <Text style={styles.filterItemText}>
            Заявки <Text style={{color: style.color.opacity.blue}}>2</Text>
          </Text>
        </Pressable>
      </View>
      <View style={styles.listFrends}>
        {LIST_FRENDS.map(item => (
          <FrendItem {...item} />
        ))}
      </View>
    </ScrollView>
  );
};

type PropsFrend = {
  source: ImageSourcePropType;
  name: string;
  description: string;
  status: boolean;
};

const FrendItem: FC<PropsFrend> = ({source, name, description, status}) => (
  <View style={styles.frendsItem}>
    <Image source={source} style={styles.frendsItemImg} resizeMode="cover" />
    <View style={styles.frendsItemInfo}>
      <Text style={styles.frendsItemName}>{name}</Text>
      <Text style={styles.frendsItemDescription}>{description}</Text>
    </View>
    {status ? (
      <Button
        onClick={() => {}}
        title={'Удалить'}
        type="grey"
        customStyleText={{fontWeight: '500'}}
        customStyleBtn={styles.btn}
      />
    ) : (
      <Button
        onClick={() => {}}
        title={'В друзья'}
        type="white"
        customStyleText={{fontWeight: '500'}}
        customStyleBtn={styles.btn}
      />
    )}
  </View>
);

const styles = StyleSheet.create({
  filter: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 24,
  },
  filterItem: {
    paddingRight: 24,
  },
  filterItemText: {
    fontFamily: 'Roboto-Regular',
    color: style.color.blue,
    fontSize: 16,
  },
  filterLine: {
    width: 24,
    height: 2,
    marginTop: 5,
    backgroundColor: style.color.cornflowerBlue,
  },
  filterItemTextActive: {
    fontWeight: '500',
  },
  listFrends: {},
  frendsItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 14,
    paddingBottom: 14,
    borderBottomColor: style.color.gallery,
    borderBottomWidth: 1,
    borderTopColor: style.color.gallery,
    borderTopWidth: 1,
  },
  frendsItemImg: {
    marginRight: 16,
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  frendsItemInfo: {
    flex: 1,
  },
  frendsItemName: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    fontWeight: '500',
  },
  frendsItemDescription: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: style.color.doveGrayLight,
  },
  btn: {
    fontWeight: '500',
    width: 'auto',
    paddingLeft: 15,
    paddingRight: 15,
  },
});

export default Frends;
