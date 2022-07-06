import React, {FC, useCallback, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Slider from './index';

import Label from './label';
import Notch from './notch';
import Rail from './rail';
import Thumb from './thumb';
import RailSelected from './rail-selected';

const RangeSlider = () => {
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(0);
  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback(value => <Label text={value} />, []);
  const renderNotch = useCallback(() => <Notch />, []);
  const handleValueChange = useCallback((low, high) => {
    setLow(low);
    setHigh(high);
  }, []);

  return (
    <Slider
      style={styles.slider}
      min={0}
      max={5}
      step={0.5}
      floatingLabel
      renderThumb={renderThumb}
      renderRail={renderRail}
      renderRailSelected={renderRailSelected}
      renderLabel={renderLabel}
      renderNotch={renderNotch}
      onValueChanged={handleValueChange}
      minRange={0.5}
      low={0}
      high={5}
      allowLabelOverflow={false}
      disableRange={false}
      disabled={false}
    />
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'stretch',
    padding: 12,
    flex: 1,
    backgroundColor: '#555',
  },
  slider: {},
  button: {},
  header: {
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 12,
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  valueText: {
    width: 50,
    color: 'white',
    fontSize: 20,
  },
});

export default RangeSlider;
