import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Button, Gap, Header, Input, Profile } from '../../components';
import { colors, getData, storeData } from '../../utils';
import { Fire } from '../../config';
import { showMessage } from 'react-native-flash-message';
import { launchImageLibrary } from 'react-native-image-picker';
import { ILNullPhoto } from '../../assets';

export default function UpdateProfile({ navigation }) {
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  });

  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(ILNullPhoto);
  const [photoForDB, setPhotoForDB] = useState('');

  useEffect(() => {
    getData('user').then((res) => {
      const data = res;
      setPhoto({ uri: res.photo });
      setProfile(data);
    });
  }, []);

  const update = () => {
    console.log('profle :', profile);

    console.log('New Password : ', password);

    if (password.length > 0) {
      if (password.length < 6) {
        showMessage({
          message: ' password urang dai 6 karakter',
          type: 'default',
          backgroundColor: colors.warning,
          color: colors.White,
        });
      } else {
        // update password
        updatePassword();
        updateProfileData();
      }
    } else {
      updateProfileData();
    }
  };

  const updatePassword = () => {
    Fire.auth().onAuthStateChanged((user) => {
      if (user) {
        user
          .updatePassword(password)
          .then((success) => {
            console.log('success update password: ', success);
          })
          .catch((error) => {
            showMessage({
              message: error.message,
              type: 'default',
              backgroundColor: colors.warning,
              color: colors.White,
            });
          });
      }
    });
  };

  const updateProfileData = () => {
    const data = profile;
    data.photo = photoForDB;

    Fire.database()
      .ref(`users/${profile.uid}/`)
      .update(data)
      .then(() => {
        console.log('success : ', data);
        storeData('user', data);
      })
      .catch((err) => {
        showMessage({
          message: err.message,
          type: 'default',
          backgroundColor: colors.warning,
          color: colors.White,
        });
      });
  };

  const onChangeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

  const getImage = () => {
    launchImageLibrary(
      { quality: 0.5, maxWidth: 200, maxHeight: 200, includeBase64: true },
      (response) => {
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
          console.log('response GetImage : ', source);
          setPhotoForDB(`data:${source.type};base64, ${source.base64}`);
          const Uri = { uri: source.uri };
          setPhoto(Uri);
        }
      }
    );
  };
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header title={'Edit Profile'} onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <Profile isRemove photo={photo} onPress={getImage} />
        <Gap height={26} />
        <Input
          label={'Full Name'}
          value={profile.fullName}
          onChangeText={(value) => onChangeText('fullName', value)}
        />
        <Gap height={24} />
        <Input
          label={'Pekerjaan'}
          value={profile.profession}
          onChangeText={(value) => onChangeText('profession', value)}
          secureTextEntry
        />
        <Gap height={24} />
        <Input label={'Email Addres'} value={profile.email} disable />
        <Gap height={24} />
        <Input label={'Password'} value={password} onChangeText={(value) => setPassword(value)} />
        <Gap height={40} />
        <Button title={'Save Profile'} onPress={update} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.White,
  },
  content: {
    padding: 40,
    paddingTop: 0,
    backgroundColor: colors.White,
  },

  page: {
    backgroundColor: colors.White,
    flex: 1,
  },

  text: {
    textFamily: 'Nunito-Bold',
    fontSize: 20,
  },
});
