import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { ILNullPhoto } from '../../assets';
import { Gap, Header, List, Profile } from '../../components';
import { Fire } from '../../config';
import { colors, getData, showError } from '../../utils';

export default function UserProfile({ navigation }) {
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    photo: ILNullPhoto,
  });
  useEffect(() => {
    getData('user').then((res) => {
      const data = res;
      data.photo = { uri: res.photo };
      setProfile(data);
    });
  }, []);

  const signOut = () => {
    Fire.auth()
      .signOut()
      .then(() => {
        console.log('success sign out');
        navigation.replace('GetStarted');
      })
      .catch((err) => {
        showError(err.message);
      });
  };

  return (
    <View style={styles.page}>
      <Header title={'Profile'} onPress={() => navigation.goBack()} />
      <Gap height={10} />
      {profile.fullName.length > 0 && (
        <Profile name={profile.fullName} desc={profile.profession} photo={profile.photo} />
      )}
      <Gap height={14} />
      <List
        name={'Edit Profile'}
        chat={'Last Update Yesterday'}
        type={'next'}
        icon={'edit-profile'}
        onPress={() => navigation.navigate('UpdateProfile')}
      />
      <List name={'Language'} chat={'Avaible in 12 Languages'} type={'next'} icon={'Language'} />
      <List name={'Give Us Rate'} chat={'On Google Play Store'} type={'next'} icon={'rate'} />
      <List
        name={'Sign Out'}
        chat={'Last Update Yesterday'}
        type={'next'}
        icon={'help'}
        onPress={signOut}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.White,
    flex: 1,
  },
});
