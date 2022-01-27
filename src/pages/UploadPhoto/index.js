import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button, Gap, Header, Link } from '../../components';
import { IconAddPhoto, ILNullPhoto } from '../../assets';
import { colors, fonts } from '../../utils';

export default function UploadPhoto({ navigation }) {
  return (
    <View style={styles.pages}>
      <Header onPress={() => navigation.goBack()} title={'Upload Photo'} />
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.avatarWrapper}>
            <Image source={ILNullPhoto} style={styles.avatar} />
            <IconAddPhoto style={styles.addPhoto} />
          </View>
          <Text style={styles.name}>Baldut</Text>
          <Text style={styles.pekerjaan}>Product Desainer</Text>
        </View>
        <View>
          <Button title={'Upload and Continue'} />
          <Gap height={30} />
          <Link title={'Skip for this'} align={'center'} size={16} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pages: { flex: 1, backgroundColor: colors.White },
  avatar: {
    width: 110,
    height: 110,
  },
  avatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhoto: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  name: {
    fontFamily: fonts.primary[600],
    fontSize: 24,
    color: colors.text.primary,
    textAlign: 'center',
  },
  pekerjaan: {
    fontFamily: fonts.primary.normal,
    fontSize: 18,
    color: colors.text.secondary,
    textAlign: 'center',
    marginTop: 4,
  },
  content: {
    paddingHorizontal: 40,
    backgroundColor: colors.White,
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  profile: {
    alignItems: 'center',
    backgroundColor: colors.White,
    flex: 1,
    justifyContent: 'center',
  },
});
