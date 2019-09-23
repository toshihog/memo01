import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import CircleButton from '../elements/CircleButton';
import firebase from 'firebase';

class MemoCreateScreen extends React.Component {
  state = {
    body: '',
  }

  handlePress() {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    db.collection(`users/${currentUser.uid}/memos`).add({
      body: this.state.body,
      createOn: new Date(),
    })
    .then(() => {
      this.props.navigation.goBack();
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return(
      <View style={styles.container}>
        <TextInput
          style={styles.memoEditInput}
          value={this.state.body}
          onChangeText={(text) => { this.setState({ body: text });}}
          multiline
        />
        <CircleButton name="check" onPress={() => {this.handlePress()}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoEditInput: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 16,
  },
});

export default MemoCreateScreen;