import React, { useState, useEffect } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Background from '../components/login/Background'
import Logo from '../components/login/Logo'
import Header from '../components/login/Header'
import Button from '../components/login/Button'
import Paragraph from '../components/login/Paragraph'
import TextInput from '../components/login/TextInput'
import { FontAwesome } from '@expo/vector-icons'

export default function ProfileScreen({ navigation }) {
  const [enabledValue, setEnabledValue] = useState(false)
  const [enabledTextInputStyle, setEnabledTextInputStyleValue] = useState(
    styles.textInputStyle
  )
  const [name, setName] = useState('')
  const displayName = async () => {
    try {
      let nameValue = await AsyncStorage.getItem('name')
      nameValue = nameValue == null ? 'name' : nameValue
      setName(nameValue)
    } catch (error) {
      alert(error)
    }
  }
  const saveName = (typedName) => AsyncStorage.setItem('name', typedName)
  const [age, setAge] = useState('')
  const displayAge = async () => {
    try {
      let ageValue = await AsyncStorage.getItem('age')
      ageValue = ageValue == null ? 'age' : ageValue
      setAge(ageValue)
    } catch (error) {
      alert(error)
    }
  }
  const saveAge = (typedAge) => AsyncStorage.setItem('age', typedAge)
  const [department, setDepartment] = useState('')
  const displayDepartment = async () => {
    try {
      let departmentValue = await AsyncStorage.getItem('department')
      departmentValue = departmentValue == null ? 'department' : departmentValue
      setDepartment(departmentValue)
    } catch (error) {
      alert(error)
    }
  }
  const saveDepartment = (typedDepartment) =>
    AsyncStorage.setItem('department', typedDepartment)
  const [hobby, setHobby] = useState('')
  const displayHobby = async () => {
    try {
      let hobbyValue = await AsyncStorage.getItem('hobby')
      hobbyValue = hobbyValue == null ? 'hobby' : hobbyValue
      setHobby(hobbyValue)
    } catch (error) {
      alert(error)
    }
  }
  const saveHobby = (typedHobby) => AsyncStorage.setItem('hobby', typedHobby)
  const [linkedIn, setLinkedIn] = useState('')
  const displayLinkedIn = async () => {
    try {
      let linkedInValue = await AsyncStorage.getItem('linkedIn')
      linkedInValue = linkedInValue == null ? 'LinkedIn' : linkedInValue
      setLinkedIn(linkedInValue)
    } catch (error) {
      alert(error)
    }
  }
  const saveLinkedIn = (typedLinkedIn) =>
    AsyncStorage.setItem('linkedIn', typedLinkedIn)

  useEffect(() => {
    setEnabledValue(enabledValue)
    setEnabledTextInputStyleValue(styles.textInputStyle)
    displayName()
    displayAge()
    displayDepartment()
    displayHobby()
    displayLinkedIn()
  }, [])

  return (
    // <Background>
    <View style={styles.container}>
      <Header> Profile </Header>
      <View>
        <View style={styles.textRow}>
          <FontAwesome
            name="child"
            size={30}
            style={styles.iconStyle}
          ></FontAwesome>
          <TextInput
            valueString={name}
            onChangeText={(text) => {
              setName(text)
              saveName(name)
            }}
            background="#ff00ff"
            enabled={enabledValue}
            style={enabledTextInputStyle}
            label="Name"
            returnKeyType="next"
            autoCapitalize="none"
            textContentType="username"
            keyboardType="ascii-capable-number-pad"
          />
        </View>
        <View style={styles.textRow}>
          <FontAwesome
            name="birthday-cake"
            size={30}
            style={styles.iconStyle}
          ></FontAwesome>
          <TextInput
            valueString={age}
            onChangeText={(text) => {
              setAge(text)
              saveAge(text)
            }}
            enabled={enabledValue}
            style={enabledTextInputStyle}
            label="Age"
            returnKeyType="next"
            autoCapitalize="none"
            textContentType="username"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.textRow}>
          <FontAwesome
            name="suitcase"
            size={30}
            style={styles.iconStyle}
          ></FontAwesome>
          <TextInput
            valueString={department}
            onChangeText={(text) => {
              setDepartment(text)
              saveDepartment(text)
            }}
            enabled={enabledValue}
            style={enabledTextInputStyle}
            label="Department"
            returnKeyType="next"
            autoCapitalize="none"
            textContentType="username"
            keyboardType="ascii-capable-number-pad"
          />
        </View>
        <View style={styles.textRow}>
          <FontAwesome
            name="book"
            size={30}
            style={styles.iconStyle}
          ></FontAwesome>
          <TextInput
            valueString={hobby}
            onChangeText={(text) => {
              setHobby(text)
              saveHobby(text)
            }}
            enabled={enabledValue}
            style={enabledTextInputStyle}
            label="Interests/Hobbies"
            returnKeyType="next"
            autoCapitalize="none"
            textContentType="username"
            keyboardType="ascii-capable-number-pad"
          />
        </View>

        <View style={styles.textRow}>
          <FontAwesome
            name="linkedin-square"
            size={30}
            style={styles.iconStyle}
          ></FontAwesome>
          <TextInput
            valueString={linkedIn}
            onChangeText={(text) => {
              setLinkedIn(text)
              saveLinkedIn(text)
            }}
            enabled={enabledValue}
            style={enabledTextInputStyle}
            label="Linked-In profile"
            returnKeyType="next"
            autoCapitalize="none"
            textContentType="username"
            keyboardType="ascii-capable-number-pad"
          />
        </View>
      </View>
      <Button
        mode="contained"
        style={styles.editButton}
        onPress={() => {
          setEnabledValue(false)
          const styleToPut =
            enabledTextInputStyle == styles.textInputStyle
              ? styles.textInputStyleEnabled
              : styles.textInputStyle
          setEnabledTextInputStyleValue(styleToPut)
        }}
      >
        {' '}
        Edit{' '}
      </Button>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    alignItems: 'center',
    backgroundColor: '#f8f4f4',
  },
  inputBox: {
    margin: '10px',
  },
  editButton: {
    position: 'absolute',
    width: '50%',
    bottom: 10,
  },
  textRow: {
    width: '70%',
    height: 25,
    marginVertical: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInputStyle: {
    backgroundColor: '#EBEBE4',
    marginLeft: 5,
  },
  textInputStyleEnabled: {
    backgroundColor: 'white',
    marginLeft: 5,
  },
  iconStyle: {
    width: 30,
  },
})
