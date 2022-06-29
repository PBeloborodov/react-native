import React, {FC} from 'react';
import {View, StyleSheet, Pressable, Text, Image} from 'react-native';
import UpDownArrow from '../../src/assets/img/icon/up-down-arrow.svg';
import ThreeDots from '../../src/assets/img/icon/three-dots.svg';
import {style} from '../../src/common/styles/variables/style';

type Props = {};

const PostItem: FC<Props> = props => {
  return (
    <View style={styles.post}>
      <View style={styles.postHeader}>
        <Text style={styles.postName}>1. Объект 1</Text>
        <View style={[styles.iconsBtns]}>
          <Pressable onPress={() => {}}>
            <View style={{marginRight: 20}}>
              <UpDownArrow />
            </View>
          </Pressable>
          <Pressable onPress={() => {}}>
            <ThreeDots />
          </Pressable>
        </View>
      </View>
      <Text style={styles.postText}>
        Текст (от лат. textus — ткань; сплетение, сочетание) — зафиксированная
        на каком-либо материальном носителе человеческая мысль; в общем плане
        связная и полная последовательность символов.
      </Text>
      <View style={styles.postWrapImg}>
        <Image
          source={require('../../src/assets/img/post-exemple.jpg')}
          style={styles.postImg}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    display: 'flex',
    padding: 20,
  },
  postName: {
    fontWeight: '700',
    fontSize: 16,
    color: style.color.black,
  },
  postHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconsBtns: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  postText: {
    color: style.color.grey,
    paddingTop: 15,
    paddingBottom: 15,
  },
  postWrapImg: {
    position: 'relative',
    width: '100%',
    height: 265,
    borderRadius: 4,
  },
  postImg: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
  },
});

export default PostItem;
