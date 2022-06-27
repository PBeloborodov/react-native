import React, {FC, useState} from 'react';
import {View, Pressable, StyleSheet, Text, Image} from 'react-native';
import {style} from '../../src/variables/style';
import CrossBlue from '../../src/assets/img/icon/cross-blue.svg';

type Props = {
  content: string;
  square?: boolean;
  urlImg?: any;
};

const ParamFilter: FC<Props> = ({content, square = true, urlImg}) => {
  return (
    <View style={[styles.wrapParam, square ? {borderRadius: 8} : {}]}>
      {urlImg && <Image source={urlImg} style={styles.imgParam} />}
      <Text style={styles.textParam}>{content}</Text>
      <Pressable>
        <View style={styles.crossParam}>
          <CrossBlue />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapParam: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: style.color.zumthor,
    alignSelf: 'flex-start',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 12,
    borderRadius: 50,
    marginRight: 10,
    marginBottom: 12,
  },
  textParam: {
    fontSize: 16,
    color: style.color.blue,
  },
  crossParam: {
    marginLeft: 10,
  },
  imgParam: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginRight: 5,
  },
});

export default ParamFilter;
