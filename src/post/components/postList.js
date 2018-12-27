import React, { Component } from "react";
import Video from 'react-native-video';
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity
} from "react-native";
import Share, { ShareSheet } from 'react-native-share';

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
      <View style={{ backgroundColor: "#fff", margin: 5, padding: 5 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity>
            <Text>
              userId - {item.name}
            </Text>
          </TouchableOpacity>
          { item.userId === this.props.currentUserId ?
            <TouchableOpacity
              onPress={() => this.props.deletePost(item._id)}
            >
              <Text>
                Delete Post
              </Text>
            </TouchableOpacity>
            : null
          }
          </View>
        <Text>
          {item.createAt}
        </Text>
        <Text>
          {item.title}
        </Text>
        <Text>
          {item.body}
        </Text>
        <Button
          title="Share"
          onPress={() => Share.open({
            title: item.title,
            message: item.body,
          })}
        />
      </View>
    )
  }

  render() {
    _redirectTo = scene => {
      this.props.navigation.navigate(scene)
    }

    const postList = [...this.props.posts.values()]; 
    return (
      <FlatList
        data={postList}
        renderItem={({ item }) => this._renderItem(item)}
        keyExtractor={item => item._id }
        ListHeaderComponent={this.renderHeader()}
      />
    )
  }
}


export default PostList;