import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Button, Gap, Header, Link } from '../../components';
import { IconAddPhoto, IconRemovePhoto, ILNullPhoto } from '../../assets';
import { colors, fonts } from '../../utils';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { showMessage } from 'react-native-flash-message';

export default function UploadPhoto({ navigation }) {
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(ILNullPhoto);
  const getImage = () => {
    launchImageLibrary({}, (response) => {
      console.log('response : ', response);
      if (response.didCancel || response.error) {
        showMessage({
          message: 'oops, sepertinya anda tidak memilih fotonya?',
          type: 'default',
          backgroundColor: colors.warning,
          color: colors.White,
        });
      } else {
        const source = response?.assets[0];
        const Uri = { uri: source.uri };
        setPhoto(Uri);
        setHasPhoto(true);
      }
    });
  };
  return (
    <View style={styles.pages}>
      <Header onPress={() => navigation.goBack()} title={'Upload Photo'} />
      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.avatarWrapper} onPress={getImage}>
            <Image source={photo} style={styles.avatar} />
            {hasPhoto && <IconRemovePhoto style={styles.addPhoto} />}
            {!hasPhoto && <IconAddPhoto style={styles.addPhoto} />}
          </TouchableOpacity>
          <Text style={styles.name}>Baldut</Text>
          <Text style={styles.pekerjaan}>Product Desainer</Text>
        </View>
        <View>
          <Button
            title={'Upload and Continue'}
            onPress={() => navigation.replace('MainApp')}
            disable={!hasPhoto}
          />
          <Gap height={30} />
          <Link
            title={'Skip for this'}
            align={'center'}
            size={16}
            onPress={() => navigation.replace('MainApp')}
          />
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
    borderRadius: 110 / 2,
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
