import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  Appearance,
  NativeModules,
  Button,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

const HelloWorld = NativeModules.HelloWorldModule;

const AppPro = (): JSX.Element => {
  const [mode, setMode] = useState('light');

  const isDarkMode = useColorScheme() === 'dark';
  const setPreference = () => {
    if (mode === 'light') {
      Appearance.setColorScheme('dark');
      setMode('dark');
    } else {
      setMode('light');
      Appearance.setColorScheme('light');
    }
  };
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: isDarkMode ? 'black' : 'white',
      }}>
      {/* <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
        Hello
      </Text> */}
      <Button onPress={() => setPreference()} title="Change Mode" />
      <Button
        onPress={() => {
          console.log('pressed');
          HelloWorld.ShowMessage('Native Event Called', 2000);
        }}
        title="Call Native"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  whiteText: {
    color: 'white',
  },
  blackText: {
    color: 'black',
  },
});
export default AppPro;
