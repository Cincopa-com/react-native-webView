import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {
  const [val, setVal] = useState('');
  const [uri, setUri] = useState('');

  return (
    <>
      <Text>Enter link</Text>
      <View style={{
        width: '100%',
        justifyContent: 'center',
        backgroundColor: 'transparent'
      }}>
        <TextInput
          autoFocus
          style={{
            height: 50,
            width: '100%',
            color: 'white',
            backgroundColor: 'grey',
          }}
          onChangeText={text => setVal(text)}
        />
        <TouchableOpacity style={{
          height: 50,
          margin: 10,
          width: '50%',
          borderWidth: 1,
          display: 'flex',
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}
          onPress={() => {
            setUri(val);
          }}
        >
          <Text>generate</Text>
        </TouchableOpacity>
      </View>
      <WebView
        source={{ uri }}
        allowsFullscreenVideo={true}
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
      />
    </>
  );
};

export default App;