import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, View, Alert } from 'react-native'
import Constants from 'expo-constants'
import axios from 'axios'
import BottomBar from './../components/main/BottomBar'
import Swipes from './../components/main/Swipes'
import CircularLoading from '../components/common/CircularLoading'

export default function SwipeScreen({ navigation }) {
  const [users, setUsers] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const swipesRef = useRef(null)

  async function fetchUsers() {
    try {
      const { data } = await axios.get(
        'https://randomuser.me/api/?results=5000'
      )
      setUsers(data.results)
      // console.log(data.results)
    } catch (error) {
      Alert.alert('Failed getting users', '', [
        { text: 'Ok', onPress: () => reject() },
      ])
    }
  }

  useEffect(() => {
    fetchUsers().catch(function () {
      console.log('Error fetching user')
    })
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

  function mainScreen() {
    if (users && users.length >= 1) {
      return users.map(
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
      )
    }
    return <CircularLoading />
  }

  return (
    <View style={styles.container}>
      <View style={styles.swipes}>{mainScreen()}</View>
      <BottomBar
        handleLikePress={handleLikePress}
        handlePassPress={handlePassPress}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: '#f8f4f4',
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
