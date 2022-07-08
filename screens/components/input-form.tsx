import React, {FC} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {defaultStyle} from '../../src/common/styles/default';
import {style} from '../../src/common/styles/variables/style';
type Props = {
  label?: string;
  placeholder: string;
  error?: boolean;
  multiline?: boolean;
  customWrapStyle?: any;
};

const InputForm: FC<Props> = ({
  label,
  placeholder,
  error = false,
  multiline = false,
  customWrapStyle,
}) => {
  return (
    <View style={[styles.wrapInput, customWrapStyle]}>
      {label && (
        <Text
          style={[
            styles.labelInput,
            error ? {color: style.color.redOrange} : {},
          ]}>
          {label}
        </Text>
      )}

      <TextInput
        style={[
          defaultStyle.input,
          styles.input,
          error ? styles.inputError : {},
          multiline ? {height: 98} : {},
        ]}
        multiline={multiline}
        numberOfLines={12}
        textAlignVertical="top"
        placeholder={placeholder}
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
    color: style.color.dustyGray,
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

export default InputForm;
