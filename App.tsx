import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          Hello World
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
