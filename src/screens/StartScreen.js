<<<<<<< HEAD
import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

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
=======
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
      <Header>Login Template</Header>
      <Paragraph>
        The easiest way to start with your amazing application.
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>
    </Background>
  )
}
>>>>>>> 5d00f162f9a60b4c99a9982d8daed0440dc65a1e
