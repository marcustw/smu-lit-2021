import React from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'
import { FontAwesome5, FontAwesome } from '@expo/vector-icons'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SwipeScreen from './../../screens/SwipeScreen'
import MessagesScreen from './../../screens/MessagesScreen'
import LoginScreen from './../../screens/LoginScreen'

const TopBarTabs = createMaterialTopTabNavigator()

export default function TopBar() {
  return (
    <TopBarTabs.Navigator
      initialRouteName="SwipeScreen"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          if (route.name === 'SwipeScreen') {
            iconName = 'address-card'
          }
          if (route.name === 'MessagesScreen') {
            iconName = 'comments'
          }
          if (route.name === 'ProfileScreen') {
            iconName = 'user'
          }
          return (
            <FontAwesome5
              name={iconName}
              size={22}
              color={focused ? '#F06795' : '#5c5c5c'}
            />
          )
        },
        tabBarLabelStyle: { fontSize: 0 },
      })}
    >
      <TopBarTabs.Screen name="SwipeScreen" component={SwipeScreen} />
      <TopBarTabs.Screen name="MessagesScreen" component={MessagesScreen} />
      {/* <TopBar.Screen name="ProfileScreen" component={LoginScreen} /> */}
    </TopBarTabs.Navigator>
  )
}
