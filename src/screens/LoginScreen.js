import React from 'react';
import { StyleSheet, View, TextInput, TouchableHighlight, Text } from 'react-native';
import firebase from 'firebase';

class LoginScreen extends React.Component {
  state = {
    email: 'abc@gmail.com',
    password: '1234567890',
  }

  handleSubmit() {
    //log in
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then((user) => {
      console.log('log in success!', user);
      this.props.navigation.navigate('Home');
    })
    .catch((error) => {
      console.log('error!', error);
    });
    

  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          value={this.state.email}
          onChangeText={(text) => { this.setState({ email: text }); }}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email Adress"
        />
        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={(password) => { this.setState({ password: password });}}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          secureTextEntry
        />
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.handleSubmit()}
          underlayColor='#C70F66'
        >
          <Text style={styles.buttonTitle}>Login</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 24,
    backgroundColor: '#fff',
  },
  input: {
    backgroundColor: '#eee',
    height: 48,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#DDD',
    padding: 8,
  },
  title: {
    fontSize: 28,
    alignSelf: 'center',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#E31676',
    height: 48,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center',
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 18,
  },
  }
);

export default LoginScreen;