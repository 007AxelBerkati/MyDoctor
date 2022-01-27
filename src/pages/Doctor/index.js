import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { DoctorCategory, Gap, HomeProfile, NewsItem, RatedDoctor } from '../../components';
import { colors, fonts } from '../../utils';

export default function Doctor() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <HomeProfile />
        <Text style={styles.welcome}>Mau Konsultasi Dengan Siapa Hari Ini</Text>
        <View style={styles.wrapperScroll}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.category}>
              <Gap width={16} />
              <DoctorCategory />
              <DoctorCategory />
              <DoctorCategory />
              <DoctorCategory />
              <Gap width={6} />
            </View>
          </ScrollView>
        </View>
        <Text style={styles.sectionLabel}>Top Rated Doctor</Text>
        <View>
          <RatedDoctor />
          <RatedDoctor />
          <RatedDoctor />
        </View>
        <Text style={styles.sectionLabel}>Good News</Text>
        <View>
          <NewsItem />
          <NewsItem />
          <NewsItem />
        </View>
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
    paddingHorizontal: 16,
    paddingVertical: 30,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  welcome: {
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    fontSize: 20,
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 209,
  },
  category: {
    flexDirection: 'row',
  },
  wrapperScroll: {
    marginHorizontal: -16,
  },
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
});
