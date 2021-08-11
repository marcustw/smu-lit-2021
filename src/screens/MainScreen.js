<<<<<<< HEAD
import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, View, Alert } from 'react-native'
import Constants from 'expo-constants'
import TopBar from './components/main/TopBar'
import axios from 'axios'
import BottomBar from './components/main/BottomBar'
import Swipes from './components/main/Swipes'

export default function MainScreen({ navigation }) {
  const [users, setUsers] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const swipesRef = useRef(null)

  async function fetchUsers() {
    try {
      const { data } = await axios.get('https://randomuser.me/api/?results=5000')
      setUsers(data.results)
      console.log(data.results)
      Alert.alert('Success getting users', '', [{ text: 'Retry', onPress: () => fetchUsers() }])
    } catch (error) {
      console.log(error)
      Alert.alert('Error getting users', '', [{ text: 'Retry', onPress: () => fetchUsers() }])
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  function handleLike() {
    console.log('like')
    nextUser()
  }

  function handlePass() {
    console.log('pass')
    nextUser()
  }

  function nextUser() {
    const nextIndex = users.length - 2 === currentIndex ? 0 : currentIndex + 1
    setCurrentIndex(nextIndex)
  }

  function handleLikePress() {
    swipesRef.current.openLeft()
  }
  function handlePassPress() {
    swipesRef.current.openRight()
  }

  return (
    <View style={styles.container}>
      <TopBar />
      <View style={styles.swipes}>
        {users.length > 1 &&
          users.map(
            (u, i) =>
              currentIndex === i && (
                <Swipes
                  key={i}
                  ref={swipesRef}
                  currentIndex={currentIndex}
                  users={users}
                  handleLike={handleLike}
                  handlePass={handlePass}
                ></Swipes>
              )
          )}
      </View>
      <BottomBar handleLikePress={handleLikePress} handlePassPress={handlePassPress} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  swipes: {
    flex: 1,
    padding: 10,
    paddingTop: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
})
=======
<<<<<<<< HEAD:src/screens/Dashboard.js
import React from 'react'
import Background from '../components/login/Background'
import Logo from '../components/login/Logo'
import Header from '../components/login/Header'
import Paragraph from '../components/login/Paragraph'
import Button from '../components/login/Button'

export default function Dashboard({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Let’s start</Header>
      <Paragraph>
        Your amazing app starts here. Open you favorite code editor and start
        editing this project.
      </Paragraph>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Logout
      </Button>
    </Background>
  )
}
========
import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'

export default function MainScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Let’s start</Header>
      <Paragraph>
        Your amazing app starts here. Open you favorite code editor and start
        editing this project.
      </Paragraph>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Logout
      </Button>
    </Background>
  )
}
>>>>>>>> 95581e506b80859bc05566545fb0267c123fced8:src/screens/MainScreen.js
>>>>>>> 95581e506b80859bc05566545fb0267c123fced8
