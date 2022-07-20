import React, {FC} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  ImageSourcePropType,
} from 'react-native';
import {defaultStyle} from '../../src/common/styles/default';
import {style} from '../../src/common/styles/variables/style';
type Props = {
  imgSrc: ImageSourcePropType;
  label: string;
  showBtn?: boolean;
  place?: number;
  placeTwo?: boolean;
  smallPlace?: number;
};

const CardBatl: FC<Props> = ({
  imgSrc,
  label,
  showBtn,
  place,
  placeTwo = false,
  smallPlace = false,
}) => {
  return (
    <View
      style={[styles.card, placeTwo && !smallPlace ? {marginTop: 50} : null]}>
      {place && (
        <View
          style={[
            styles.cardPlace,
            placeTwo && !smallPlace ? styles.cardPlaceTwo : null,
          ]}>
          <Text
            style={[
              styles.cardPlaceText,
              placeTwo ? styles.cardPlaceTwoText : null,
            ]}>
            {place}
          </Text>
        </View>
      )}
      {smallPlace && (
        <View
          style={[
            styles.cardPlace,
            styles.cardPlaceSmall,
            placeTwo ? {right: 4} : {left: 4},
          ]}>
          <Text style={[styles.cardPlaceText, styles.cardPlaceTextSmall]}>
            {smallPlace}
          </Text>
        </View>
      )}

      <Image source={imgSrc} resizeMode="cover" style={styles.cardImg} />
      <Text style={[defaultStyle.text, styles.cardName]}>{label}</Text>
      {showBtn && (
        <Pressable style={{width: '100%'}}>
          <View style={styles.cardBtn}>
            <Text style={styles.cardBtnText}>Выбрать</Text>
          </View>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: style.color.blueLight,
    borderRadius: 4,
    width: '48%',
    maxWidth: 180,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 12,
  },
  cardPlace: {
    width: 48,
    height: 48,
    backgroundColor: style.color.blue,
    borderRadius: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  cardPlaceSmall: {
    width: 30,
    height: 30,
    position: 'absolute',
    zIndex: 5,
    top: 4,
  },
  cardPlaceTwo: {
    marginTop: 10,
    width: 30,
    height: 30,
  },
  cardPlaceTwoText: {
    fontSize: 14,
  },
  cardPlaceText: {
    fontFamily: 'Roboto-regular',
    fontSize: 24,
    fontWeight: '500',
    color: style.color.white,
  },
  cardPlaceTextSmall: {
    zIndex: 10,
    fontSize: 18,
  },
  cardImg: {
    width: '100%',
    maxWidth: 148,
    height: 100,
    borderRadius: 4,
  },
  cardName: {
    width: '100%',
    color: style.color.mineShaft,
    marginTop: 10,
    marginBottom: 10,
  },
  cardBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingTop: 8,
    paddingBottom: 8,
    borderColor: style.color.malibu,
    borderWidth: 1,
    backgroundColor: style.color.white,
    borderRadius: 4,
  },
  cardBtnText: {
    fontFamily: 'Roboto-regular',
    fontSize: 14,
    fontWeight: '500',
    color: style.color.blue,
  },
  iconBatl: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 64,
    height: 64,
    marginLeft: -15,
    marginTop: -32,
    backgroundColor: style.color.white,
    borderRadius: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CardBatl;
