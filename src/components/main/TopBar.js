import React from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'
import { FontAwesome5, FontAwesome } from '@expo/vector-icons'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SwipeScreen from './../../screens/SwipeScreen'
import MessagesScreen from './../../screens/MessagesScreen'
import ProfileScreen from './../../screens/ProfileScreen'

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
            return (
              <FontAwesome5
                name="user"
                size={22}
                color={focused ? '#F06795' : '#5c5c5c'}
                onPress={() => navigation.navigate('ProfileScreen')}
              />
            )
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
      <TopBarTabs.Screen name="ProfileScreen" component={ProfileScreen} />
    </TopBarTabs.Navigator>
  )
}
