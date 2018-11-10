import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity
} from "react-native";

class PostList extends Component {
 
  componentDidMount() {
    this.props.getPosts()
  }

  renderHeader() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("PostCreate")}
        style={{backgroundColor: "#F9F", padding: 5, margin: 5}}
      >
        <Text style={{ textAlign: "center"}}>
          Create Post 
        </Text>
      </TouchableOpacity>
    )
  }

  _renderItem(item) {
    return (
      <View style={{backgroundColor: "#fff", margin: 5, padding: 5}}>
        <TouchableOpacity>
          <Text>
            userId - {item.userId}
          </Text>
        </TouchableOpacity>
        <Text>
          {item.createAt}
        </Text>
        <Text>
          {item.title}
        </Text>
        <Text>
          {item.body}
        </Text>
      </View>
    )
  }

  render() {
    _redirectTo = scene => {
      this.props.navigation.navigate(scene)
    }

    const postList = [...this.props.posts.values()]; 
    console.log(postList)
    return (
      <FlatList
        data={postList}
        renderItem={({ item }) => this._renderItem(item)}
        keyExtractor={(item) => item._id }
        ListHeaderComponent={this.renderHeader()}
      />
    )
  }
}


export default PostList;