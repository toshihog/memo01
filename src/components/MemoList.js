import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, FlatList } from 'react-native';

class MemoList extends React.Component {
  
  renderMemo({ item }){
    console.log(item);
    return(
      <TouchableHighlight onPress={() => {this.props.navigation.navigate('MemoDetail')}}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>{item.body}</Text>
           <Text style={styles.memoDate}>2019/08/31</Text>
        </View>
      </TouchableHighlight>
    );
  }


  render() {
    return(
      <View style={styles.memoList}>
        <FlatList data={this.props.memoList} renderItem={this.renderMemo.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  memoList: {
    width: '100%',
    flex: 1,
  },
  memoListItem: {
    padding: 16,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
  },
  memoTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  memoDate: {
    fontSize: 12,
    color: '#a2a2a2',
  },
});

export default MemoList;