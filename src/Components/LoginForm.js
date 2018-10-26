import React, { Component } from 'react';
import {  View, TextInput, Text } from 'react-native';
import { Button, CardSection } from './Common';

class LoginForm extends Component
{

    render()
    {
        return(
                <View>
                    <CardSection>
                            <TextInput  style={{ flex : 1, height:50, color :'#000', fontSize : 20 }} placeholder="Email"/>
                    </CardSection>
                    <CardSection>

                    </CardSection>
                    <CardSection>
                        <Button text="Login" />  
                   </CardSection>
                </View>    
        );
    }
}
export default LoginForm;