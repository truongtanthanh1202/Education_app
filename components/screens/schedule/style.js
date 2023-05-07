import {StyleSheet, Platform, StatusBar, Dimensions} from 'react-native';

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
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Dimensions.get('window').width / 5,
    gap: 12,
    zIndex: 0,
  },
  text: {
    color: '#3f2949',
    marginTop: 10,
  },
  inputField: {
    height: Platform.OS === 'ios' ? 48 : 52,
    width: '100%',
    backgroundColor: '#e4f1f9',
    borderRadius: 20,
    paddingLeft: 24,
    paddingRight: 32,
    fontSize: 15,
    fontFamily: 'Comfortaa-Bold',
    justifyContent: 'center',
    marginBottom: 4,
    zIndex: -1,
  },
});

export default styles;
