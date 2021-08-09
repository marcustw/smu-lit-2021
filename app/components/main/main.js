import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';

export default function TopBar() {
    return (
        <View style = {styles.topBarContainer}>
            <FontAwesome5 name = "fire" size={27} color="blue"></FontAwesome5>
            <FontAwesome name="comments" size={27} color="blue" />
            <FontAwesome name="user" size={27} color="blue" />
        </View>
    )
}

const styles = StyleSheet.create(
    {
        topBarContainer: {
            height: 60,
            flexDirection: 'row',
            justifyContent: 'space-around',
            padding: 15,
            backgroundColor: 'white',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.12,
            shadowRadius: 5.46,
            elevation: 9,
        }
    }
)