import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, CardSection, Input, Card, Spinner } from './Common';

class LoginForm extends Component
{
    state ={ email : '' , password : '', error :'', isLoading:false};

    onButtonPress()
    {
        this.setState({error:'',isLoading : true });    
       const {email ,password} = this.state;
    
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then( this.onLoginSuecess.bind(this) )
        .catch ( ()=> {

            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then( this.onLoginSuecess.bind(this) )
            .catch( this.onLoginFailed.bind(this));

        });
    }

    onLoginFailed()
    {
        this.setState({ error : 'Authntication Failed',isLoading: false});
    }
    onLoginSuecess()
    {
        this.setState({ email : '' , password : '', error :'', isLoading:false});
    }

    renderButton()
    {
        if(this.state.isLoading)
        {
            return( 
                    <Spinner size="small"/> 
            );
        } 

        return(
            <Button text="Login" onPress = {this.onButtonPress.bind(this) }/> 
        );
    }
    render()
    {
        return(
                <Card>
                    <CardSection>
                         <Input label = "Email"  value = {this.state.email} onChangeText= {email => this.setState({ email })} ></Input>       
                    </CardSection>
                    <CardSection>
                    <Input label = "Password"  secureTextEntry  value = {this.state.password} onChangeText= {password => this.setState({ password })} ></Input>       
                    </CardSection>
                    <Text style= {{ color :'red' , alignSelf: 'center', fontSize : 20 }} >{this.state.error}</Text>
                    <CardSection>
                     {  this.renderButton() }
                   </CardSection>
                </Card>    
        );
    }
}
export default LoginForm;