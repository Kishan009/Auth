import React, {Component} from 'react';
import {  View } from 'react-native';
import firebase from 'firebase';
import LoginForm from './Components/LoginForm';
import { Header, Button, Spinner, CA } from './Components/Common';



class App extends Component{

  state  = { loggedIn :null };
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

      firebase.auth().onAuthStateChanged((user)=> 
      {
        if(user)
        {
          this.setState({ loggedIn :true});
        }else{
          this.setState({ loggedIn :false});
        }

      });
}

renderContent()
{
    switch(this.state.loggedIn)
    {

      case true: return(

                <View style={{ alignItems: 'center' , height:50 }} >
                  <Button text='Log Out' onPress ={ ()=> firebase.auth().signOut() }/>
                </View>
                  );

      case false:  return(<LoginForm/>);
                  
      default: return(
      <View style = {{ alignSelf:'center' }}>
        <Spinner size="large" />
      </View>);
      }
}

  render(){
    return(
    <View>
      <Header HeaderName = 'Authorization' />
      {this.renderContent() }
    
    </View>
    );
  }
}

export default App;
