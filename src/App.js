import React, {Component} from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import LoginForm from './Components/LoginForm';
import { Header } from './Components/Common';



class App extends Component{

  componentWillMount()
  {
    
    firebase.initializeApp(
      {
        apiKey: 'AIzaSyDWxVLdxV__s2oBxUvkOf6dtZ5fEHGUK1A',
        authDomain: 'cloudmessging-20863.firebaseapp.com',
        databaseURL: 'https://cloudmessging-20863.firebaseio.com',
        projectId: 'cloudmessging-20863',
        storageBucket: 'cloudmessging-20863.appspot.com',
        messagingSenderId: '279018196314'
      }
    );


  
  }

  render(){
    return(
    <View>

      <Header HeaderName = 'Authorization' ></Header>
        
  <LoginForm/>
            </View>
    );
  }
}

export default App;
