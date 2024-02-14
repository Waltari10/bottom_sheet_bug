import React, {useState} from 'react';

import BottomSheet, {
  BottomSheetModalProvider,
  BottomSheetScrollView,
  BottomSheetTextInput,
} from '@gorhom/bottom-sheet';
import {SafeAreaView, StatusBar, Text, useColorScheme} from 'react-native';

import {GestureHandlerRootView} from 'react-native-gesture-handler';

const flex = {
  flex: 1,
};

const snapPoints = ['12%', '85%'];

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [searchQuery, setSearchQuery] = useState('');

  return (
    <GestureHandlerRootView style={flex}>
      <BottomSheetModalProvider>
        <SafeAreaView style={flex}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

          <BottomSheet
            index={0}
            snapPoints={snapPoints}
            keyboardBehavior="extend">
            <BottomSheetScrollView>
              <BottomSheetTextInput
                placeholder="Type here..."
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
              {new Array(100).fill(0).map((item, index) => (
                <Text key={index}>modal content line</Text>
              ))}
            </BottomSheetScrollView>
          </BottomSheet>
        </SafeAreaView>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

export default App;
