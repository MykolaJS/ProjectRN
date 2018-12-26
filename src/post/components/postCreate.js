import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput
} from "react-native";

class PostCreate extends Component {
  constructor() {
    super()
    this.state = {
      title: "",
      body: ""
    }
  }

  _redirect = scene => {
    this.props.navigation.navigate(scene)
  }

  createPost() {
    const { body, title } = this.state;

    if(title || body) {
      this.props.postCreate(title, body, this._redirect.bind())
    } else {
      alert("Provide Data")
    }
  }

  render() {
    const { body, title } = this.state;
    return (
      <View style={{backgroundColor: "#fff", margin: 5, padding: 5}}>
        <Text>
          Title
        </Text>
        <TextInput
          onChangeText={title => this.setState({ title: title })}
        />
        <Text>
          Description
        </Text>
        <TextInput
          onChangeText={body => this.setState({ body: body })}
        />  
        <Button
          onPress={() => this.createPost()}
          title="Create Post"
        />
      </View>
    )
  }
}


export default PostCreate;