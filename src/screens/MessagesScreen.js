import React, { useState, useEffect } from 'react'
import Constants from 'expo-constants'
import { StyleSheet, View } from 'react-native'
import BotBar from './../components/chat/BotBar'
import MessagesTab from './../components/chat/MessagesTab'
import ChatTab from './../components/chat/ChatTab'

export default function MessagesScreen({ navigation }) {
  const [tabValue, setTabValue] = useState(0)

  const [currentChatIndex, setCurrentChatIndex] = useState(0)

  useEffect(() => {
    setTabValue(tabValue)
    setCurrentChatIndex(currentChatIndex)
  })

  const onPressFunction = (idx) => {
    setTabValue(1)
    setCurrentChatIndex(idx)
  }

  const onBackFunction = () => {
    setTabValue(0)
  }

  if (tabValue === 0) {
    return <MessagesTab onPressFunc={onPressFunction} />
  } else {
    return <ChatTab chatIndex={currentChatIndex} onBackFunc={onBackFunction} />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
