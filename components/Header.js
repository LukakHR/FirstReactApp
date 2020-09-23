import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

const Header = (props) => {
    return (
        <View style = {styles.view}>
            <Text style = {styles.text}>
                {props.title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        height: 60,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue'
    },

    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 23
    }
})

export default Header