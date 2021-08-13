import React from 'react'
import Constants from 'expo-constants'
import { StyleSheet, View } from 'react-native'
import TopBar from './../components/main/TopBar'

export default function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TopBar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
})
