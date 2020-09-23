import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Header from '../components/Header';

const HomeScreen = ({navigation}) => {
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
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
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

  text: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default HomeScreen;
