import React, {FC} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Pressable,
  Image,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Button from '../src/common/components/button';
import {style} from '../src/common/styles/variables/style';
import InputForm from './components/input-form';
type Props = {};

const InfoCard: FC<Props> = props => {
  const heightScreen = Dimensions.get('window').height + 100;

  return (
    <View style={[styles.card, {height: heightScreen}]}>
      <Text style={styles.cardTitle}>Привязка банковской карты</Text>
      <View style={styles.cardInfo}>
        <View style={styles.cardInfoItem}>
          <Text style={styles.cardInfoLabel}> Номер банковской карты</Text>
          <View style={styles.cardInfoWrapInput}>
            <TextInput
              placeholder="0000 0000 0000 0000"
              style={styles.cardInfoInput}
            />
          </View>
        </View>
        <View style={styles.cardInfoRow}>
          <View style={styles.cardInfoRowItem}>
            <View style={styles.cardInfoItem}>
              <Text style={styles.cardInfoLabel}> Срок действия </Text>
              <View style={styles.cardInfoWrapInput}>
                <TextInput placeholder="00/00" style={styles.cardInfoInput} />
              </View>
            </View>
          </View>
          <View style={styles.cardInfoRowItem}>
            <View style={styles.cardInfoItem}>
              <Text style={styles.cardInfoLabel}> CVV</Text>
              <View style={styles.cardInfoWrapInput}>
                <TextInput placeholder="000" style={styles.cardInfoInput} />
              </View>
            </View>
          </View>
        </View>
      </View>
      <InputForm placeholder="CARD HOLDER" label="Владелец" />
      <Text style={styles.policy}>
        Нажимая кнопку “Привязать”, вы соглашаетесь с{' '}
      </Text>
      <Pressable>
        <Text style={styles.policyLink}>условиями привязки карты</Text>
      </Pressable>
      <Button
        onClick={() => {}}
        title={'Привязать'}
        type="blue"
        customStyleText={{fontWeight: '500'}}
        customStyleBtn={styles.btn}
      />
      <View style={{paddingLeft: 10}}>
        <Image source={require('../src/assets/img/logo-card.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: style.color.white,
  },
  cardTitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    padding: 20,
  },
  cardInfo: {
    backgroundColor: style.color.alabaster,
    marginRight: 20,
    marginLeft: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 24,
    paddingTop: 24,
  },
  cardInfoItem: {},
  cardInfoWrapInput: {
    paddingLeft: 12,
    backgroundColor: style.color.white,
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 4,
  },
  cardInfoLabel: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    marginBottom: 8,
  },
  cardInfoInput: {},
  cardInfoRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  cardInfoRowItem: {
    width: '47%',
  },
  policy: {
    paddingLeft: 20,
    paddingRight: 20,
    display: 'flex',
    flexDirection: 'row',
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    marginTop: 22,
  },
  policyLink: {
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    color: style.color.blue,
  },
  btn: {
    width: 'auto',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 16,
    height: 40,
  },
});

export default InfoCard;
