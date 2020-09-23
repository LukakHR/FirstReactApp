import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import firebase from 'firebase';

import Header from '../components/Header';

const HomeScreen = ({navigation}) => {
  var text = '';

  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (!user) {
    text = 'Niste ulogirani';
  } else {
    text = 'Ulogirani ste ' + user.email;
  }

  return (
    <SafeAreaView>
      <Header title="Home Screen" />
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ToDoListScreen')}
          style={styles.button}>
          <Text style={styles.text}>Lista</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddToListScreen')}
          style={styles.button}>
          <Text style={styles.text}>Dodaj u listu</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('LogInScreen')}
          style={styles.button}>
          <Text style={styles.text}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignInScreen')}
          style={styles.button}>
          <Text style={styles.text}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.info}>
          <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 180,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  button: {
    height: 30,
    width: 200,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },

  info: {
    height: 30,
    width: 500,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default HomeScreen;
