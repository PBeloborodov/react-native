import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {style} from '../../../src/common/styles/variables/style';
const InfoPanel = () => {
  return (
    <View style={styles.infoPanel}>
      <View style={styles.infoPanelItem}>
        <Image source={require('../../../src/assets/img/icon/cub.png')} />
        <Text style={[styles.infoPanelText, styles.infoPanelCount]}>1 000</Text>
        <Text style={styles.infoPanelText}>объектов</Text>
      </View>
      <View style={styles.infoPanelItem}>
        <Image source={require('../../../src/assets/img/icon/star.png')} />
        <Text style={[styles.infoPanelText, styles.infoPanelCount]}>44 </Text>
        <Text style={styles.infoPanelText}>мнений</Text>
      </View>
      <View style={styles.infoPanelItem}>
        <Image source={require('../../../src/assets/img/icon/user.png')} />
        <Text style={[styles.infoPanelText, styles.infoPanelCount]}>134 </Text>
        <Text style={styles.infoPanelText}>подписчиков</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  infoPanel: {
    paddingTop: 20,
    paddingBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    display: 'flex',
    flexDirection: 'row',
    borderTopColor: style.color.tundora,
    borderBottomColor: style.color.tundora,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    marginTop: 25,
  },
  infoPanelItem: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: 15,
  },
  infoPanelText: {
    fontSize: 12,
    color: style.color.tundora,
  },
  infoPanelCount: {
    marginLeft: 5,
    fontSize: 12,
    fontWeight: '700',
    color: style.color.tundora,
  },
});
export default InfoPanel;
