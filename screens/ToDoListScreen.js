import firebase from 'firebase';
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import Header from '../components/Header';
import ListComponent from '../components/ListComponent';

const ToDoListScreen = ({navigation}) => {
  var data = [];

  firebase
    .database()
    .ref('/ToDoList')
    .on('value', (snapshot) => {
      data = [];
      snapshot.forEach((element) => {
        data.push({
          key: element.key,
          listItem: element.val().listItem,
        });
      });
    });

  const renderItem = ({item}) => {
    const id = item.key
    return <ListComponent id={id} listItem={item.listItem} />;
  };

  return (
    <SafeAreaView>
      <Header title="To Do List Screen" />
      <FlatList data={data} renderItem={renderItem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  button: {
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

export default ToDoListScreen;
