import React from 'react'
import Background from '../components/login/Background'
import Logo from '../components/login/Logo'
import Header from '../components/login/Header'
import Button from '../components/login/Button'
import Paragraph from '../components/login/Paragraph'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header> WorkBuds </Header>
      <Paragraph>Get to know more about your fellow colleagues!</Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
    </Background>
  )
}
