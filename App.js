import React from 'react';
import { Button, View, Text } from 'react-native';

class RedButton extends React.Component {
  render(){
    return(

        <Button title="Click Me" color ="red"></Button>
);
}
}
export default class App extends React.Component {

  render() {
    return (
    
      <View style={{marginTop:100}}>
      <RedButton/>
        <Text style={{marginBottom:50 , fontSize:30}}>My first App</Text>
              <RedButton/>

        </View>
    );
  }
}