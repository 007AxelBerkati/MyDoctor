import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { ILNullPhoto } from '../../assets';
import { Gap, Header, List, Profile } from '../../components';
import { colors, getData } from '../../utils';

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
      <List name={'Help Center'} chat={'Read Our Guidelines'} type={'next'} icon={'help'} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.White,
    flex: 1,
  },
});
