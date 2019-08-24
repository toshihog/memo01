import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

class CircleButton extends React.Component {
  render() {
    //const style = this.props.style;
    const { style, color } = this.props;

    let bgColor = '#E31676';
    let textColor = '#fff';

    if (color === 'white') {
      bgColor = '#fff';
      textColor = '#E31676';
    };

    return(
      <View style={[styles.circleButton, style, { backgroundColor: bgColor }]}>
          <Text style={[styles.circleButtonTitle, {color: textColor}]}>
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
  },
});

export default CircleButton;