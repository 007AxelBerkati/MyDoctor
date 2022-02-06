import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from '../../atoms';
import { colors, fonts } from '../../../utils';

export default function InputChat({ value, onChangeText, onButtonPress }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Tulis Pesan untuk Nairobi"
        value={value}
        onChangeText={onChangeText}
      />
      <Button type={'btn-icon-send'} onPress={onButtonPress} disable={value.length < 1} />
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    backgroundColor: colors.White,
  },
  input: {
    backgroundColor: colors.disable.background,
    padding: 14,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    fontFamily: fonts.primary.normal,
    fontSize: 14,
    maxHeight: 45,
  },
});
