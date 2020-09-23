import 'react-native-gesture-handler'
import firebase from 'firebase'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './screens/HomeScreen'
import ToDoListScreen from './screens/ToDoListScreen'
import AddToListScreen from './screens/AddToListScreen'

const Stack = createStackNavigator();

const App = () => {
  var config = {
    databaseURL: "https://first-react-app-b74c3.firebaseio.com",
    projectId: "first-react-app-b74c3",
  }; 

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="ToDoListScreen" component={ToDoListScreen} />
        <Stack.Screen name="AddToListScreen" component={AddToListScreen} />        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App