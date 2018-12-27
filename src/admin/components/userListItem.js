import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity
} from "react-native";

class UserListItem extends Component {
 

  render() {
    const {
      name,
      email,
      isAdmin,
      blocked,
      isVerified
    } = this.props.user;
    const {
      unBlockUser,
      blockUser,
      makeAdmin,
      takeAdmin
    } = this.props;

    return (
      <View style={{ backgroundColor: "#fff", margin: 5, padding: 10, flexDirection: "row", flex: 1}}>
        <View style={{flex: 1}}>
          <Text>
            User Details
          </Text>
          <Text>
            name - {name ? name : "No name"}
          </Text>
          <Text>
            Email - {email}
          </Text>
          <Text>
            Role - {isAdmin ? "Admin" : "User"}
          </Text>
          <Text>
            Blocked - {blocked ? "Yes" : "No"}
          </Text>
          <Text>
            Verified - {isVerified ? "Yes" : "No"}
          </Text>
        </View>
        <View style={{justifyContent: "space-around"}}>
          <Button
            onPress={isAdmin ? takeAdmin : makeAdmin }
            title={isAdmin ? "Take Admin" : "Make Admin"}
          />
          <Button
            onPress={blocked ? unBlockUser : blockUser}
            title={blocked ?  "un block" : "block"}
          />
        </View>
      </View>
    )
  }
}


export default UserListItem;
