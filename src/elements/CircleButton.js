import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

class CircleButton extends React.Component {
  render() {
    return(
      <View style={styles.circleButton}>
          <Text style={styles.circleButtonTitle}>
            {this.props.children}
          </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circleButton: {
    position: 'absolute',
    bottom: 35,
    right: 35,
    width: 48,
    height: 48,
    backgroundColor: '#E31676',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    textShadowRadius: 3,
  },
  circleButtonTitle: {
    fontSize: 24,
    lineHeight: 24,
    color: '#fff'
  },
});

export default CircleButton;