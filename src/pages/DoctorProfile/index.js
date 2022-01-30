import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button, Gap, Header, Profile, ProfileItem } from '../../components';
import { colors } from '../../utils';

export default function DoctorProfile({ navigation }) {
  return (
    <View style={styles.page}>
      <Header title={'Doctor Profile'} onPress={() => navigation.goBack()} />
      <Profile name={'Nairobi Putri'} desc={'Dokter Anak'} />
      <ProfileItem label={'Alumnus'} value={'Universitas Indonesia, 2020'} />
      <ProfileItem label={'Tempat Praktik'} value={'Rumah Sakit Umum, Bandung'} />
      <ProfileItem label={'No. Str'} value={'0000134323'} />
      <View style={styles.action}>
        <Button title={'Start Consultation'} onPress={() => navigation.navigate('Chatting')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.White,
  },
  action: {
    paddingHorizontal: 40,
    paddingTop: 23,
  },
});
