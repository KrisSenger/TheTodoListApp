import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import MainLayout from '../layouts/MainLayout'

const AboutScreen = () => {
  return (
    <MainLayout>
      <View>
        <Text style={styles.textHead}>The TO DO List</Text>
        <Text style={styles.textBody}>Version 1.0.0</Text>
        <Text style={styles.textBody}>Created by: Kris Senger</Text>
        <Text style={styles.textBody}>November 24, 2024</Text>
      </View>
    </MainLayout>
  )
}

const styles = StyleSheet.create({
  textHead: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  textBody: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },

});

export default AboutScreen