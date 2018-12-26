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
    return (
      <View style={{ backgroundColor: "#fff", margin: 5, padding: 10, flexDirection: "row", flex: 1}}>
        <View style={{flex: 1}}>
          <Text>
            User Details
          </Text>
          <Text>
            name - {this.props.user.name ? this.props.user.name : "No name"}
          </Text>
          <Text>
            Email - {this.props.user.email}
          </Text>
          <Text>
            Role - {this.props.user.isAdmin ? "Admin" : "User"}
          </Text>
          <Text>
            Blocked - {this.props.user.blocked ? "Yes" : "No"}
          </Text>
          <Text>
            Verified - {this.props.user.isVerified ? "Yes" : "No"}
          </Text>
        </View>
        <View style={{justifyContent: "space-around"}}>
          <Button
            onPress={this.props.makeAdmin}
            title={this.props.user.isAdmin ? "Take Admin" : "Make Admin"}
          />
          <Button
            onPress={this.props.blockUser}
            title={this.props.user.blocked ?  "un block" : "block"}
          />
        </View>
      </View>
    )
  }
}


export default UserListItem;
