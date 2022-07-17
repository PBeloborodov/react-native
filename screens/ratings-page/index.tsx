import React, {FC} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Pressable,
  Image,
} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {defaultStyle} from '../../src/common/styles/default';
import {style} from '../../src/common/styles/variables/style';
import YellowStar from '../../src/assets/img/icon/star-test.svg';
import UpDownArrow from '../../src/assets/img/icon/up-down-arrow-grey.svg';
import Rating from '../components/common/rating';
import ReviewCard from './review-card';
type Props = {};

const PageRating: FC<Props> = props => {
  const heightScreen = Dimensions.get('window').height + 100;

  return (
    <ScrollView
      style={{backgroundColor: style.color.white, height: heightScreen}}>
      <View style={styles.container}>
        <View style={styles.titleWrap}>
          <Text style={[defaultStyle.text, styles.title]}>Оценки</Text>
        </View>
        <View style={styles.ratingHead}>
          <Text style={styles.ratingHeadValue}>4.61</Text>
          <Rating value={4.61} />
          <Text style={[defaultStyle.text, styles.ratingHeadOpinion]}>
            (120 мнений)
          </Text>
        </View>
        <View style={styles.ratingLineWrap}>
          <Text style={styles.ratingLineValue}>5</Text>
          <YellowStar />
          <View style={styles.ratingLine}>
            <View style={[styles.ratingLineActive, {width: '90%'}]}></View>
          </View>
          <Text style={[defaultStyle.text, styles.ratingPercent]}>90%</Text>
        </View>
        <View style={styles.ratingLineWrap}>
          <Text style={styles.ratingLineValue}>4</Text>
          <YellowStar />
          <View style={styles.ratingLine}>
            <View style={[styles.ratingLineActive, {width: '60%'}]}></View>
          </View>
          <Text style={[defaultStyle.text, styles.ratingPercent]}>50%</Text>
        </View>
        <View style={styles.ratingLineWrap}>
          <Text style={styles.ratingLineValue}>3</Text>
          <YellowStar />
          <View style={styles.ratingLine}>
            <View style={[styles.ratingLineActive, {width: '30%'}]}></View>
          </View>
          <Text style={[defaultStyle.text, styles.ratingPercent]}>30%</Text>
        </View>
        <View style={styles.ratingLineWrap}>
          <Text style={styles.ratingLineValue}>2</Text>
          <YellowStar />
          <View style={styles.ratingLine}>
            <View style={[styles.ratingLineActive, {width: '15%'}]}></View>
          </View>
          <Text style={[defaultStyle.text, styles.ratingPercent]}>20%</Text>
        </View>
        <View style={styles.ratingLineWrap}>
          <Text style={styles.ratingLineValue}>1</Text>
          <YellowStar />
          <View style={styles.ratingLine}>
            <View style={[styles.ratingLineActive, {width: '10%'}]}></View>
          </View>
          <Text style={[defaultStyle.text, styles.ratingPercent]}>5%</Text>
        </View>
        <View style={styles.filterHead}>
          <Text style={styles.filterHeadLabel}>Мнения (120)</Text>
          <Text style={styles.filterHeadValue}>
            <Text style={styles.filterHeadText}>Дата: по возрастанию</Text>
            <Pressable style={{paddingLeft: 8}}>
              <UpDownArrow />
            </Pressable>
          </Text>
        </View>
        <ReviewCard />
        <ReviewCard />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ratingHead: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 17,
  },
  container: {
    padding: 20,
  },
  title: {
    color: style.color.black,
    fontWeight: '500',
  },
  titleWrap: {
    borderBottomWidth: 1,
    borderBottomColor: style.color.gallery,
    paddingBottom: 12,
  },
  ratingHeadValue: {
    fontFamily: 'Roboto-regular',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 24,
    marginRight: 10,
  },
  ratingHeadStar: {},
  ratingHeadOpinion: {
    marginLeft: 10,
  },
  ratingLineWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 19,
  },
  ratingLineValue: {
    fontFamily: 'Roboto-regular',
    fontWeight: '700',
    fontSize: 16,
    color: style.color.blue,
    marginRight: 10,
  },
  ratingLine: {
    position: 'relative',
    display: 'flex',
    backgroundColor: style.color.PattensBlue,
    borderRadius: 6,
    height: 10,
    flex: 1,
    marginLeft: 18,
    marginRight: 10,
  },
  ratingLineActive: {
    position: 'absolute',
    left: 0,
    display: 'flex',
    backgroundColor: style.color.malibuLight,
    borderRadius: 6,
    height: 10,
  },
  ratingPercent: {
    fontSize: 12,
    color: style.color.grey,
  },
  filterHead: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: style.color.gallery,
    paddingBottom: 12,
    marginTop: 50,
    borderBottomWidth: 1,
  },
  filterHeadLabel: {
    fontFamily: 'Roboto-regular',
    fontWeight: '500',
    fontSize: 14,
  },
  filterHeadValue: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterHeadText: {
    fontFamily: 'Roboto-regular',
    fontSize: 12,
    lineHeight: 14,
    color: style.color.dustyGray,
  },
});

export default PageRating;
