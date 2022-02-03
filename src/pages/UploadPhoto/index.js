import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { launchImageLibrary } from 'react-native-image-picker';
import { IconAddPhoto, IconRemovePhoto, ILNullPhoto } from '../../assets';
import { Button, Gap, Header, Link } from '../../components';
import { Fire } from '../../config';
import { colors, fonts, showError, storeData } from '../../utils';

export default function UploadPhoto({ navigation, route }) {
  const { fullName, profession, uid } = route.params;

  const [photoForDB, setPhotoForDB] = useState('');
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(ILNullPhoto);
  const getImage = () => {
    launchImageLibrary(
      { quality: 0.5, maxWidth: 200, maxHeight: 200, includeBase64: true },
      (response) => {
        console.log('response : ', response);
        if (response.didCancel || response.error) {
          showError('Sepertinya anda tidak memilih fotonya');
        } else {
          const source = response?.assets[0];
          // console.log('response GetImage : ', source);
          setPhotoForDB(`data:${source.type};base64, ${source.base64}`);
          const Uri = { uri: source.uri };
          setPhoto(Uri);
          setHasPhoto(true);
        }
      }
    );
  };

  const uploadAndContinue = () => {
    Fire.database()
      .ref('users/' + uid + '/')
      .update({ photo: photoForDB });

    const data = route.params;
    data.photo = photoForDB;

    storeData('user', data);

    navigation.replace('MainApp');
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
          <Text style={styles.name}>{fullName}</Text>
          <Text style={styles.pekerjaan}>{profession}</Text>
        </View>
        <View>
          <Button title={'Upload and Continue'} onPress={uploadAndContinue} disable={!hasPhoto} />
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
