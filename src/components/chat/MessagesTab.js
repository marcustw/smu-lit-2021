import React from 'react'
import { View, Text, Button, StyleSheet, FlatList } from 'react-native'
import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from './MessagesStyle'
import ChatTab from './ChatTab'

const Messages = [
  {
    id: '1',
    userName: 'Jenny Doe',
    userImg: require('../../assets/users/user-3.jpg'),
    messageTime: '4 mins ago',
    messageText: 'Hi there, has work been fine for you?',
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require('../../assets/users/user-1.jpg'),
    messageTime: '1 hours ago',
    messageText: 'Omg ya sia our office snacks are really delicious.',
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../../assets/users/user-4.jpg'),
    messageTime: '2 hours ago',
    messageText: 'Actually can you help me print "Hello World"?',
  },
  {
    id: '4',
    userName: 'Ray',
    userImg: require('../../assets/users/user-2.jpg'),
    messageTime: '4 hours ago',
    messageText: 'Welcome to our company!',
  },
  {
    id: '6',
    userName: 'May',
    userImg: require('../../assets/users/user-6.jpg'),
    messageTime: '7 hours ago',
    messageText: 'You look young, how old are you?',
  },
  {
    id: '7',
    userName: 'Diana',
    userImg: require('../../assets/users/user-7.jpg'),
    messageTime: '12 hours ago',
    messageText: 'We have to thank organisers of SMU-Lit!',
  },
  {
    id: '8',
    userName: 'Christine',
    userImg: require('../../assets/users/user-8.jpg'),
    messageTime: '16 hours ago',
    messageText: 'Thank you to the donors too!',
  },
]

const MessagesTab = ({ navigation, onPressFunc }) => {
  return (
    <Container style={styles.container}>
      <FlatList
        data={Messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card onPress={() => onPressFunc(item.id - 1)}>
            <UserInfo>
              <UserImgWrapper>
                <UserImg source={item.userImg} />
              </UserImgWrapper>
              <TextSection>
                <UserInfoText>
                  <UserName>{item.userName}</UserName>
                  <PostTime>{item.messageTime}</PostTime>
                </UserInfoText>
                <MessageText>{item.messageText}</MessageText>
              </TextSection>
            </UserInfo>
          </Card>
        )}
      />
    </Container>
  )
}

export default MessagesTab

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f4f4',
  },
})
