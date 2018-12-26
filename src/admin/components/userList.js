import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity
} from "react-native";
import UserListItem from "../containers/userListItem"

class UserList extends Component {
 
  componentDidMount() {
    this.props.getUsers()
  }

  _renderItem(item) {
    return (
      <UserListItem userId={item._id}/>
    )
  }

  render() {
    _redirectTo = scene => {
      this.props.navigation.navigate(scene)
    }

    const userList = [...this.props.users.values()]; 
    return (
      <FlatList
        data={userList}
        renderItem={({ item }) => this._renderItem(item)}
        keyExtractor={item => item._id }
      />
    )
  }
}


export default UserList;
