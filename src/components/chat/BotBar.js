import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MessagesTab from './MessagesTab'
import ChatTab from './ChatTab'

const Tab = createMaterialBottomTabNavigator()

export default function BotBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="All Messages" component={MessagesTab} />
      <Tab.Screen name="Chat" component={ChatTab} />
    </Tab.Navigator>
  )
}
