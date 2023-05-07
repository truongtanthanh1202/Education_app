import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SettingButtonText = ({
  iconLeft,
  label,
  iconRight,
  isSelected,
  onPress,
}) => {
  const radioAnimated = React.useRef(new Animated.Value(2)).current;

  const circleColorAnimated = radioAnimated.interpolate({
    inputRange: [2, 28],
    outputRange: ['#333', '#888'],
  });

  React.useEffect(() => {
    if (isSelected) {
      Animated.timing(radioAnimated, {
        toValue: 28,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(radioAnimated, {
        toValue: 2,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [isSelected]);
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.button}
        onPress={onPress}>
        {iconLeft && (
          <Ionicons
            name={iconLeft}
            size={22}
            color="#fff"
            style={styles.leftContent}
          />
        )}
        {label && <Text style={styles.midContent}>{label}</Text>}
        {iconRight && (
          <Animated.View style={styles.buttonBoolean}>
            <Animated.View
              style={{
                width: 22,
                height: 22,
                borderRadius: 20,
                position: 'absolute',
                top: 2,
                left: radioAnimated, //Animation 2-> 28
                backgroundColor: circleColorAnimated, //Animation #333 -> #3787ff
              }}></Animated.View>
          </Animated.View>
        )}
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    height: Platform.OS === 'ios' ? 48 : 56,
    backgroundColor: '#3787ff',
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginVertical: 9,
  },
  leftContent: {
    flex: 10,
    textAlign: 'left',
  },
  midContent: {
    flex: 75,
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    marginRight: 30,
    fontSize: 12,
    marginTop: 2,
  },
  rightContent: {
    flex: 15,
    backgroundColor: 'lightblue',
  },
  buttonBoolean: {
    width: 52,
    height: 26,
    borderRadius: 30,
    backgroundColor: 'white',
    paddingHorizontal: 2,
    paddingVertical: 2,
  },
});

export default SettingButtonText;
