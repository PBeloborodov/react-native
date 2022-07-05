import React, {FC, useState} from 'react';
import {
  ImageSourcePropType,
  Image,
  Text,
  StyleSheet,
  View,
  Pressable,
} from 'react-native';
import {style} from '../../src/common/styles/variables/style';
import AddPlusBlue from '../../src/assets/img/icon/add-plus-blue.svg';
import CheckedGrey from '../../src/assets/img/icon/checked-grey.svg';
type Props = {
  source: ImageSourcePropType;
  nameCard: string;
  opinions: string;
  objectCard: string;
};

const CradHistory: FC<Props> = ({source, nameCard, opinions, objectCard}) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  return (
    <View style={styles.cradHistory}>
      <View style={styles.cradHistoryImgWrap}>
        <Image source={source} style={styles.cradHistoryImg} />
      </View>
      <View style={styles.cradHistoryContent}>
        <Text style={styles.cradHistoryName} numberOfLines={3}>
          {nameCard}
        </Text>
        <Text
          style={
            styles.cradHistoryDescription
          }>{`${opinions} объектов -  ${objectCard} мнения`}</Text>
      </View>
      <Pressable
        onPress={() => {
          setIsChecked(!isChecked);
        }}
        style={styles.cradHistoryCheck}>
        <View>{isChecked ? <CheckedGrey /> : <AddPlusBlue />}</View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  cradHistory: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    paddingBottom: 13,
    paddingTop: 13,
    paddingLeft: 13,
    paddingRight: 13,
    borderTopColor: style.color.gallery,
    borderTopWidth: 1,
    borderBottomColor: style.color.gallery,
    borderBottomWidth: 1,
  },
  cradHistoryImgWrap: {
    width: 105,
    height: 70,
    marginRight: 15,
    overflow: 'hidden',
  },
  cradHistoryImg: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
    flex: 1,
  },
  cradHistoryContent: {
    flex: 1,
  },
  cradHistoryName: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: style.color.mineShaft,
  },
  cradHistoryDescription: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    color: style.color.tundora,
    marginTop: 5,
  },
  cradHistoryCheck: {
    marginLeft: 10,
  },
});

export default CradHistory;
