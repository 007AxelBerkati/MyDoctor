import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { DummyHospital1, DummyHospital2, DummyHospital3, ILHospitalBG } from '../../assets';
import { colors, fonts } from '../../utils';
import { ListHospitals } from '../../components';

export default function Hospitals() {
  return (
    <View style={styles.container}>
      <ImageBackground source={ILHospitalBG} style={styles.background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.desc}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospitals
          title="Rumah Sakit"
          name="Citra Bunga Merdeka"
          address="Jln. Surya Sejahtera 20"
          pic={DummyHospital1}
        />
        <ListHospitals
          title="Rumah Sakit Anak"
          name="Happy Family & Kids"
          address="Jln. Surya Sejahtera 20"
          pic={DummyHospital2}
        />
        <ListHospitals
          title="Rumah Sakit Jiwa"
          name="Tingkatan Paling Atas"
          address="Jln. Surya Sejahtera 20"
          pic={DummyHospital3}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  background: {
    height: 240,
    paddingTop: 30,
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.White,
    textAlign: 'center',
  },

  desc: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.White,
    marginTop: 6,
    textAlign: 'center',
  },
  content: {
    backgroundColor: colors.White,
    flex: 1,
    borderRadius: 20,
    marginTop: -30,
    paddingTop: 14,
  },
});
