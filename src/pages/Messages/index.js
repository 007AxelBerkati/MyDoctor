import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { ListDoctorItem } from '../../components';
import { colors, fonts } from '../../utils';
import { DummyDoctor4, DummyDoctor5, DummyDoctor6 } from '../../assets';

export default function Messages() {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      profile: DummyDoctor4,
      name: 'Alexander Jannie',
      chat: 'Baik ibu, terima kasih banyak atas wak...',
    },
    {
      id: 2,
      profile: DummyDoctor5,
      name: 'Budiwati',
      chat: 'Oh tentu saja tidak karena jeruk i...',
    },
    {
      id: 3,
      profile: DummyDoctor6,
      name: 'olentet Jannie',
      chat: 'Baik ibu, terima kasih banyak atas wak...',
    },
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {doctors.map((doctor) => {
          return (
            <ListDoctorItem
              key={doctor.id}
              profile={doctor.profile}
              name={doctor.name}
              chat={doctor.chat}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
  },

  content: {
    backgroundColor: colors.White,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});
