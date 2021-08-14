import React, { useState, useEffect, useCallback } from 'react'
import {
  View,
  ScrollView,
  Text,
  Button,
  StyleSheet,
  Pressable,
  Image,
} from 'react-native'
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import BackButton from './../login/BackButton'

const ChatTab = ({ chatIndex, onBackFunc }) => {
  const allMessages = [
    // first
    [
      {
        _id: 2,
        text: 'Hi Test, has work been fine for you?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Jenny Doe',
          avatar: require('../../assets/users/user-3.jpg'),
        },
      },
      {
        _id: 1,
        text: 'Hello Jenny, I am the new intern, Test.',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'Test',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ],
    //second
    [
      {
        _id: 3,
        text: 'Omg ya sia our office snacks are really delicious.',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'John Doe',
          avatar: require('../../assets/users/user-1.jpg'),
        },
      },
      {
        _id: 2,
        text: 'The pantry has a lot of snacks!!',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'Test',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 1,
        text: 'Hi John, I am the new intern, Test.',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'Test',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ],
    //third
    [
      {
        _id: 3,
        text: 'Actually can you help me print "Hello World"?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Ken William',
          avatar: require('../../assets/users/user-4.jpg'),
        },
      },
      {
        _id: 2,
        text: 'Nice to meet you, anything I can help you with?',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'Test',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 1,
        text: 'Hi Ken, I am the new intern, Test',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'Test',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ],
  ]

  const [messages, setMessages] = useState(allMessages[chatIndex])

  useEffect(() => {
    setMessages(allMessages[chatIndex])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    )
  }, [])

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View>
          <MaterialCommunityIcons
            name="send-circle"
            style={{ marginBottom: 5, marginRight: 5 }}
            size={32}
            color="#2e64e5"
          />
        </View>
      </Send>
    )
  }

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#2e64e5',
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
        }}
      />
    )
  }

  const scrollToBottomComponent = () => {
    return <FontAwesome name="angle-double-down" size={22} color="#333" />
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={onBackFunc}>
        <Image
          style={styles.image}
          source={require('../../assets/arrow_back.png')}
        />
      </Pressable>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderBubble={renderBubble}
        alwaysShowSend
        renderSend={renderSend}
        scrollToBottom
        scrollToBottomComponent={scrollToBottomComponent}
      />
    </View>
  )
}

export default ChatTab

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  actionBar: {
    backgroundColor: '#cacaca',
    height: 41,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 24,
    height: 24,
    marginLeft: 10,
    marginTop: 10,
  },
})
