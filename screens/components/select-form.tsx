import React, {FC} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {defaultStyle} from '../../src/common/styles/default';
import {style} from '../../src/common/styles/variables/style';
import ArrowDownGrey from '../../src/assets/img/icon/arrow-down-grey.svg';
import RNPickerSelect from 'react-native-picker-select';
type Props = {
  label?: string;
  placeholder: string;
  error?: boolean;
};

const SelectForm: FC<Props> = ({label, placeholder, error = false}) => {
  const styleErrorSelect = error ? styles.inputError : {};
  const placeholderSelect = {
    label: placeholder,
    value: null,
    color: '#969696',
  };
  return (
    <View style={styles.wrapInput}>
      {label && (
        <Text
          style={[
            styles.labelInput,
            error ? {color: style.color.redOrange} : {},
          ]}>
          {label}
        </Text>
      )}
      <RNPickerSelect
        onValueChange={value => console.log(value)}
        style={{
          viewContainer: {
            ...defaultStyle.select,
            ...defaultStyle.input,
            ...styles.input,
            ...styleErrorSelect,
          },
        }}
        Icon={() => <ArrowDownGrey />}
        useNativeAndroidPickerStyle={false}
        placeholder={placeholderSelect}
        items={[
          {label: 'valu1', value: 'valu1'},
          {label: 'valu2', value: 'valu2'},
          {label: 'valu2', value: 'valu3'},
        ]}
      />
      {error && <Text style={styles.error}>Введите значение</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapInput: {
    position: 'relative',
    padding: 20,
  },
  labelInput: {
    marginBottom: 5,
    fontSize: 16,
    color: style.color.mineShaft,
  },
  input: {
    width: '100%',
    height: 40,
  },
  inputError: {
    borderColor: style.color.redOrange,
    borderWidth: 1,
  },
  error: {
    position: 'absolute',
    color: style.color.redOrange,
    bottom: -5,
    left: 20,
  },
});

export default SelectForm;
