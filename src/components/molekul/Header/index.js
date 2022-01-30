import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Gap } from '../../atoms';
import { colors } from '../../../utils';
import DarkProfile from './DarkProfile';

export default function Header({ onPress, title, type }) {
  if (type === 'dark-profile') {
    return <DarkProfile onPress={onPress} />;
  }
  return (
    <View style={styles.container(type)}>
      <Button
        type={'icon-only'}
        icon={type === 'dark' ? 'back-light' : 'back-dark'}
        onPress={onPress}
      />
      <Text style={styles.text(type)}>{title}</Text>
      <Gap width={24} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: (type) => ({
    fontSize: 20,
    color: type === 'dark' ? colors.White : colors.text.primary,
    textAlign: 'center',
    flex: 1,
  }),

  container: (type) => ({
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: type === 'dark' ? colors.secondary : colors.White,
    flexDirection: 'row',
    borderBottomLeftRadius: type === 'dark' ? 20 : 0,
    borderBottomRightRadius: type === 'dark' ? 20 : 0,
  }),
});
