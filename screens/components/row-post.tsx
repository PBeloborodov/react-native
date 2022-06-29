import React, {FC} from 'react';
import {Pressable} from 'react-native';
import {StyleSheet, View, Text, Image} from 'react-native';
import BurgerLine from '../../src/assets/img/icon/burger-line.svg';
import {style} from '../../src/common/styles/variables/style';
type Props = {
  //   id: number;
  //   content: string;
  //   ratings: number;
  //   url: string;
};

const RowPost: FC<Props> = props => {
  return (
    <View style={styles.rowPost}>
      <Text style={styles.rowPostId}>1</Text>
      <Image
        source={require('../../src/assets/img/post-exemple.jpg')}
        style={styles.rowPostImg}
      />
      <Text style={styles.rowPostText} numberOfLines={3}>
        Ресторан Рыбы нет (м. Лубянка, Кузнецкий Мост) Ресторан Рыбы нет (м.
        Лубянка, Кузнецкий Мост)
      </Text>
      <Text>4.9</Text>
      <Pressable>
        <View>
          <BurgerLine />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  rowPost: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderTopColor: style.color.gallery,
    borderBottomColor: style.color.gallery,
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  rowPostId: {
    fontSize: 16,
  },
  rowPostImg: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
  rowPostText: {
    // fontFamily: 'RobotoBlack',
    fontWeight: '500',
    color: style.color.black,
    flexShrink: 1,
    width: 200,
  },
});

export default RowPost;
