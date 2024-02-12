import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  Appearance,
  Button,
} from 'react-native';

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
      <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
        Hello
      </Text>
      <Button onPress={() => setPreference()} title="Change Mode" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: 'white',
  },
  blackText: {
    color: 'black',
  },
});
export default AppPro;
