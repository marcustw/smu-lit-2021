import React from 'react'
import Constants from 'expo-constants'
import { StyleSheet, View } from 'react-native'
import BotBar from './../components/chat/BotBar'

export default function MessagesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <BotBar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
