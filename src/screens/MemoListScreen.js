import React from 'react';
import { View, StyleSheet } from 'react-native';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

class MemoListScreen extends React.Component {
  handlePress() {
    const { params } = this.props.navigation.state;
    this.props.navigation.navigate('MemoCreate', { currentUser: params.currentUser });
  }
  
  render() {
    console.log(this.props.navigation.state.params)
    return(
      <View style={styles.container}>
        <MemoList navigation={this.props.navigation} />
        <CircleButton
         name="plus"
         onPress={() => this.handlePress()}
         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFDF6',
  },
});

export default MemoListScreen;