import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import firebase from 'firebase';

import CircleButton from '../elements/CircleButton';

class MemoEditScreen extends React.Component {
  state = {
    body: '',
    key: '',
  }

  componentWillMount() {
    const { params } = this.props.navigation.state;
    this.setState({
      body: params.memo.body,
      key: params.memo.key,
    });
  }

  handlePress() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const newDate = firebase.firestore.Timestamp.now();
    db.collection(`users/${currentUser.uid}/memos`).doc(this.state.key)
      .update({
        body: this.state.body,
        createOn: newDate,
      })
      .then(() => {
        const { navigation } = this.props;
        navigation.state.params.returnMemo({
          body: this.state.body,
          key: this.state.key,
          createOn: newDate,
        });
        navigation.goBack();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return(
      <View style={styles.container}>
        <TextInput
          style={styles.memoEditInput}
          value={this.state.body}
          onChangeText={(text)=>{ this.setState({ body: text });}}
          multiline
        />
        <CircleButton
          name="check"
          onPress={this.handlePress.bind(this)}
        />
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

export default MemoEditScreen;