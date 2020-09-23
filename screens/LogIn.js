import firebase from 'firebase';
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import Header from '../components/Header';

const LogInScreen = ({navigation}) => {
  var email = '';
  var pass = '';

  return (
    <SafeAreaView>
      <Header title="AddToList Screen" />
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          defaultValue={email}
          onChangeText={(newEmail) => {
            email = newEmail;
          }}
          clearButtonMode="while-editing"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          defaultValue={pass}
          password="true"
          onChangeText={(newPass) => {
            pass = newPass;
          }}
          clearButtonMode="while-editing"
        />

        <TouchableOpacity
          onPress={() => {
            logIn(email, pass);
            added = true;
          }}
          style={styles.buttonAdd}>
          <Text style={styles.text}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.button}>
          <Text style={styles.text}>Povratak</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 150,
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

const logIn = (email, pass) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, pass)
    .then(() => {
      console.log('User logged in');
    })
    .catch((error) => {
      console.error(error);
    });
};

export default LogInScreen;
