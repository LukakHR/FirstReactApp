import firebase from 'firebase';
import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

import Header from '../components/Header';

const AddToListScreen = ({navigation}) => {
  var text = ''
  var added = false
  var message

  if (added) {
      message = <View><Text style={styles.text}>Succesfully added</Text></View>
  } else {
      message = <View></View>
  }

  return (
    <SafeAreaView>
      <Header title="AddToList Screen" />
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Item"
          defaultValue={text}
          onChangeText={(newText) => {text = newText}}
          clearButtonMode='while-editing'
        />

        <TouchableOpacity
          onPress={() => {
            addToList(text);
            added = true;
        }}
          style={styles.buttonAdd}>
          <Text style={styles.text}>Dodaj u listu</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.button}>
          <Text style={styles.text}>Povratak</Text>
        </TouchableOpacity>

        {message}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  button: {
    height: 50,
    width: 200,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },

  buttonAdd: {
    height: 50,
    width: 200,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    backgroundColor: 'blue',
    borderWidth: 1,
  },

  input: {
    height: 60,
    width: 200,
    color: 'black',
    textAlign: 'left',
  },

  text: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
});

const addToList = (text) => {
  firebase.database().ref('/ToDoList/').push({
    listItem: text,
  });
};

export default AddToListScreen;
