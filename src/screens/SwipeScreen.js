import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, View, Alert } from 'react-native'
import Constants from 'expo-constants'
import axios from 'axios'
import BottomBar from './../components/main/BottomBar'
import Swipes from './../components/main/Swipes'
import CircularLoading from '../components/common/CircularLoading'

const userData = [
  {
    name: 'Beatrice',
    picture:
      'https://pbs.twimg.com/profile_images/546605428906291201/CpStcxpA_400x400.jpeg',
    age: '24',
    hobbies: 'Playing Saxophone',
    dept: 'Marketing Team',
  },
  {
    name: 'Jimmy',
    picture:
      'https://www.aspirantsg.com/wp-content/uploads/2020/06/Dr-Alvin-Ng-Chee-Keong-Profile-AspirantSG-920x735.jpg',
    age: '41',
    hobbies: 'Trading, Jogging',
    dept: 'Tech Team',
  },
  {
    name: 'Thomas',
    picture:
      'https://pbs.twimg.com/profile_images/629315413130633217/8tpzfMEN.jpg',
    age: '36',
    hobbies: 'Swimming',
    dept: 'Business Team',
  },
  {
    name: 'Tommy',
    picture:
      'https://static.wixstatic.com/media/162bae_38da1bc41a5a4dfe84cc1ec18c18a0bf~mv2.jpg/v1/fill/w_540,h_812,al_c,q_85,usm_0.66_1.00_0.01/rehabpro-95.webp',
    age: '33',
    hobbies: 'Gaming, Reading',
    dept: 'Tech Team',
  },
  {
    name: 'Denise',
    picture:
      'https://smt.sutd.edu.sg/files/2020/09/xpeople-smt-phd-students-Denise-Lee.jpg.pagespeed.ic.p63oTMiqXW.jpg',
    age: '23',
    hobbies: 'Jogging, Listening to music',
    dept: 'Design Team',
  },
  {
    name: 'Rikesh',
    picture:
      'https://cdn.shopify.com/s/files/1/0162/2116/articles/How_to_Be_a_Good_Looking_Guy_1200x1200.jpg?v=1574847359',
    age: '27',
    hobbies: 'Muay-thai, Watching movies',
    dept: 'Tech Team',
  },
  {
    name: 'Harriz',
    picture:
      'https://media.istockphoto.com/photos/young-adult-malaysian-man-portrait-in-studio-picture-id972144358?k=6&m=972144358&s=612x612&w=0&h=xdnx4v3cJMQjFzykUTG6UdMxiDfKjEhV794JqrlKm1k=',
    age: '24',
    hobbies: 'Cafe hopping, Dancing',
    dept: 'Marketing Team',
  },
  {
    name: 'Xueli',
    picture:
      'https://thoughtcatalog.com/wp-content/uploads/2018/03/chinese.png?w=1140',
    age: '21',
    hobbies: 'Badminton, Netflix',
    dept: 'Business Team',
  },
  {
    name: 'Emma',
    picture:
      'https://www.foreigngirlfriend.com/dating-blog/wp-content/uploads/foreigngirlfriend-com/sites/4/eastern-european-girl.jpg',
    age: '22',
    hobbies: 'Swimming, Netflix, Basketball',
    dept: 'Tech Team',
  },
]

export default function SwipeScreen({ navigation }) {
  const [users, setUsers] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const swipesRef = useRef(null)

  async function fetchUsers() {
    try {
      const { axiosData } = await axios.get(
        'https://randomuser.me/api/?results=5000'
      )

      setUsers(userData)
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
