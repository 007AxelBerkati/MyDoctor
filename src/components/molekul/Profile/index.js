import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { DummyUser, IconRemovePhoto } from '../../../assets';
import { colors, fonts } from '../../../utils';

export default function Profile({ name, desc, isRemove, photo }) {
  return (
    <View style={styles.container}>
      <View style={styles.borderProfile}>
        <Image source={photo} style={styles.avatar} />
        {isRemove && <IconRemovePhoto style={styles.removePhoto} />}
      </View>
      {name && (
        <View style={styles.textTitle}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.job}>{desc}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', justifyContent: 'center' },
  borderProfile: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderRadius: 130 / 2,
    justifyContent: 'center',
    borderColor: colors.border,
    alignItems: 'center',
  },

  avatar: {
    height: 110,
    width: 110,
    borderRadius: 110 / 2,
    alignSelf: 'center',
  },
  textTitle: {
    alignItems: 'center',
    marginTop: 16,
  },
  name: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.text.primary,
  },
  job: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.secondary,
    marginTop: 2,
  },
  removePhoto: {
    position: 'absolute',
    right: 8,
    bottom: 8,
  },
});
