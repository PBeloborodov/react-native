import React, {FC} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Pressable,
  Text,
  Image,
} from 'react-native';
import RowPost from './components/row-post';
type Props = {};
import {style} from '../src/common/styles/variables/style';

const ListPost: FC<Props> = props => {
  return (
    <ScrollView>
      <View style={styles.listPost}>
        <RowPost />
        <RowPost />
        <RowPost />
        <RowPost />
        <RowPost />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listPost: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: style.color.white,
  },
});

export default ListPost;
