import React, { Component } from "react";
import {
  View,
  Text,
  Button,

} from "react-native";



class LogOut extends React.Component {
  render() {
  	console.log(this.props)
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button 
        	title="Log Out"
        	onPress={() => { 
        		this.props.logOut();
        		this.props.navigation.navigate("Auth") 
        	}}
        />
      </View>
    );
  }
}

export default LogOut
