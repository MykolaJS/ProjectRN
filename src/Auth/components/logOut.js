import React, { Component } from "react";
import {
  View,
  Text,
  Button,

} from "react-native";



class LogOut extends React.Component {
  render() {
  	const {
      logOut,
      user,
      navigation: {
        navigate
      }
    } = this.props
    return (
      <View style={{ flex: 1, justifyContent: "center"}}>
        <Button
          title="My Profile"
          onPress={() => navigate("UserProfile")}
        />
        { user.isAdmin ? <Button
          onPress={() => navigate("UsersList") }
          title="User list"
        /> : null }
        <Button 
        	title="Log Out"
        	onPress={() => { 
        		logOut();
        		navigate("Auth"); 
        	}}
        />
      </View>
    );
  }
}

export default LogOut
