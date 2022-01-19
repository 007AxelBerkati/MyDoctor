<<<<<<< HEAD
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Gap } from '../..';
import { colors } from '../../../utils';

export default function Header({ onPress, title }) {
  return (
    <View style={styles.container}>
      <Button type={'icon-only'} icon={'back-dark'} onPress={onPress} />
      <Text style={styles.title}>{title}</Text>
=======
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { IconBackDark } from '../../../assets';
import { Gap } from '../..';
import { colors } from '../../../utils';

export default function Header() {
  return (
    <View style={styles.container}>
      <IconBackDark />
      <Text style={styles.text}>Daftar Akun</Text>
>>>>>>> 3b691fb8ad63a3eeb72905a2d4bf48eebc3fe9db
      <Gap width={24} />
    </View>
  );
}

const styles = StyleSheet.create({
<<<<<<< HEAD
  title: {
=======
  text: {
    textFamily: 'Nunito-Bold',
>>>>>>> 3b691fb8ad63a3eeb72905a2d4bf48eebc3fe9db
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
