import {StyleSheet, Platform, StatusBar} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4f1f9',
  },
  top: {
    marginTop: 6,
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    backgroundColor: '#fff',
    paddingBottom: 16,
  },
  below: {
    flex: 80,
    marginHorizontal: 20,
    backgroundColor: 'transparent',
  },
});

export default styles;
