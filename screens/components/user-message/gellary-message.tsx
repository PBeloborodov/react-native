import React, {FC} from 'react';
import {ImageSourcePropType, StyleSheet, View, Image, Text} from 'react-native';
import {style} from '../../../src/common/styles/variables/style';
type Props = {
  source: ImageSourcePropType[];
};

const GellaryMessage: FC<Props> = ({source}) => {
  return (
    <View style={styles.gellary}>
      {source.map((img, index) => {
        if (index < 4) {
          return (
            <View style={[styles.gellaryItem]}>
              <Image
                source={img}
                style={styles.gellaryItemImg}
                resizeMode="cover"
              />
              {source.length > 5 && index > 2 ? (
                <View style={styles.gellaryItemFon}>
                  <Text style={styles.gellaryItemIndex}>
                    +{source.length - 4}
                  </Text>
                </View>
              ) : null}
            </View>
          );
        }
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  gellary: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  gellaryItem: {
    position: 'relative',
    width: 116,
    height: 116,
    marginBottom: 4,
  },
  gellaryItemImg: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
  },
  gellaryItemFon: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: style.color.opacity.black,
    top: 0,
    bottom: 0,
  },
  gellaryItemIndex: {
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
    fontWeight: '500',
    color: style.color.white,
  },
});

export default GellaryMessage;
