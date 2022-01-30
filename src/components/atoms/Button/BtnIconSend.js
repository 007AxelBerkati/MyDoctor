import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { IconSendDark, IconSendLight } from '../../../assets';
import { colors } from '../../../utils';

export default function BtnIconSend({ disable }) {
  return (
    <View style={styles.container(disable)}>
      {disable && <IconSendDark />}
      {!disable && <IconSendLight />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: (disable) => ({
    backgroundColor: disable ? colors.disable : colors.tertiary,
    height: 46,
    width: 46,
    paddingRight: 3,
    paddingTop: 3,
    paddingLeft: 8,
    paddingBottom: 8,
    borderRadius: 10,
  }),
});
