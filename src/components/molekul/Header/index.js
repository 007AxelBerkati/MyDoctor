import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Gap } from '../..';
import { colors } from '../../../utils';

export default function Header({ onPress, title }) {
  return (
    <View style={styles.container}>
      <Button type={'icon-only'} icon={'back-dark'} onPress={onPress} />
      <Text style={styles.title}>{title}</Text>
      <Gap width={24} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: colors.text.primary,
    colorBackground: 'black',
    textAlign: 'center',
    flex: 1,
    backgroundColor: 'white',
  },

  container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: colors.White,
    flexDirection: 'row',
  },
});
