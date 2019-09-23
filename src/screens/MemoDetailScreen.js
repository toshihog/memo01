import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import CircleButton from '../elements/CircleButton';

const dateString = (date) => {
  const str = date.toDate().toISOString();
  return str.split('T')[0];
};

class MemoDetailScreen extends React.Component {
  state = {
    memo: {},
  }

  componentWillMount() {
    const { params } = this.props.navigation.state;
    this.setState({ memo: params.memo });
  }

  returnMemo(memo){
    this.setState({ memo });
  }

  render() {
    const { memo } = this.state;
    return(
      <View style={styles.container}>
        <View>
          <View style={styles.memoHeader}> 
            <View>
              <Text style={styles.memoHeaderTitle}>{memo.body.substring(0,10)}</Text>
              <Text style={styles.memoHeaderDate}>{dateString(memo.createOn)}</Text>
            </View>
          </View>
        </View>

        <View style={styles.memoContent}>
          <Text style={styles.memoBody}>{memo.body}</Text>
        </View>

        <CircleButton
          name="pencil"
          color="white"
          style={styles.editButton}
          onPress={() => {this.props.navigation.navigate('MemoEdit', { memo, returnMemo: this.returnMemo.bind(this) });}}
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
  memoHeader: {
    height: 100,
    backgroundColor: '#17313C',
    justifyContent: 'center',
    padding: 15,
  },
  memoHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  memoHeaderDate: {
    fontSize: 12,
    color: '#fff',
  },
  memoContent: {
    paddingTop: 30,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#fff',
    flex: 1,
  },
  editButton: {
    top: 40,
  },
  memoBody: {
  lineHeight: 20,
  fontSize: 15,
  },
});

export default MemoDetailScreen;