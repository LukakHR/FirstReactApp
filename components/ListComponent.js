import React from 'react';
import firebase from 'firebase';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';

const ListComponent = (props) => {
    const id = props.id

  return (
    <View style={styles.view}>
      <Text style={styles.text}>{props.listItem}</Text>
      <TouchableHighlight onPress={() => deleteFromList(id)}>
        <Text style={styles.x}>X</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    height: 60,
    borderColor: 'blue',
    borderWidth: 2,
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  text: {
    color: 'black',
    fontSize: 23,
  },

  x: {
      color: 'red',
  }
});

const deleteFromList = (id) => {
  const url = '/ToDoList/' + id 
  console.log(url)
  firebase.database().ref(url).remove();
};

export default ListComponent;
