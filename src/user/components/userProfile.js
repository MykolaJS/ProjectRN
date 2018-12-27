import React, { Component } from "react";
import {
  View,
  Text,
} from "react-native";

class UserProfile extends Component {
  render() {
    const {
      name,
      email,
      isAdmin,
      blocked
    } = this.props.user;
    return (
      <View>
        <Text style={{ fontSize: 20 }}>
          User Name { name }
        </Text>
        <Text style={{ fontSize: 20 }}>
          Email { email }
        </Text>
        <Text style={{ fontSize: 20 }}>
          Role - { isAdmin ? "Admin" : "User" }
        </Text>
        <Text style={{ fontSize: 20 }}>
          Status - { blocked ? "Blocked" : "Active" }
        </Text>
      </View>
    )
  }
}


export default UserProfile;
