import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
<<<<<<< HEAD
import { colors, fonts } from '../../../utils';
import IconOnly from './IconOnly';
=======
import { colors } from '../../../utils';
>>>>>>> 3b691fb8ad63a3eeb72905a2d4bf48eebc3fe9db

export default function Button({ type, title, onPress, icon }) {
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor:
      type === 'secondary' ? colors.button.secondary.background : colors.button.primary.background,
    paddingVertical: 10,
    borderRadius: 10,
  }),
  text: (type) => ({
    fontSize: 16,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
    color: type === 'secondary' ? colors.button.secondary.text : colors.button.primary.text,
  }),
});
