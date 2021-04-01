# Using Cincopa in React Native WebView

A mobile application built using React Native,react native webview

## Requirements

- NodeJS

## Install dependencies
```
git clone https://github.com/Cincopa-com/react-native-webView.git
cd react-native-webView

# Install npm dependencies
npm install;
```


If you are building React Native application and want to embed your Cincopa video or gallery with webview you can use  [React Native WebView.](https://github.com/react-native-webview/react-native-webview)
[React Native WebView.](https://github.com/react-native-webview/react-native-webview) is a modern, well-supported, and cross-platform WebView for React Native. It is intended to be a replacement for the built-in WebView (which will be [removed from core](https://github.com/react-native-community/discussions-and-proposals/pull/3))  

Here is a small example of how to embed cincopa.com homepage in your React Native application with WebView. Note that the video is running perfectly inside the WebView.
``` javascript
import React from 'react';
import { WebView } from 'react-native-webview'

const App = () => {
  return (
    <>
      <WebView
        mediaPlaybackRequiresUserAction={false}
        allowsInlineMediaPlayback={true}
        allowsFullscreenVideo={true}
        source={{ uri: "https://cincopa.com" }}
      />
    </>
  );
};

export default App;

```

You can check full API reference **[HERE](https://github.com/react-native-webview/react-native-webview/blob/master/docs/Reference.md)**.


Here is explained props that we’ve used in the example

### `mediaPlaybackRequiresUserAction`

Boolean that determines whether HTML5 audio and video requires the user to tap them before they start playing. The default value is `true`. (Android API minimum version 17).

NOTE: the default `true` value might cause some videos to hang loading on iOS. Setting it to `false` could fix this issue.

| Type | Required | Platform            |
| ---- | -------- | ------------------- |
| bool | No       | iOS, Android, macOS |

---

### `allowsInlineMediaPlayback`

Boolean that determines whether HTML5 videos play inline or use the native full-screen controller. The default value is `false`.

> **NOTE**
>
> In order for video to play inline, not only does this property need to be set to `true`, but the video element in the HTML document must also include the `webkit-playsinline` attribute.

| Type | Required | Platform |
| ---- | -------- | -------- |
| bool | No       | iOS      |

---
### `allowsFullscreenVideo`

Boolean that determines whether videos are allowed to be played in fullscreen. The default value is `false`.

| Type | Required | Platform |
| ---- | -------- | -------- |
| bool | No       | Android  |

---
## Cincopa Runtime API

Cincopa Runtime API already providing events that can be used to detect when the video goes to fullscreen or exit from fullscreen and it can be used to handle and post a message to your ReactNative application ( more examples of Cincopa Runtime API usage you can find [HERE](https://www.cincopa.com/media-platform/api-runtime-documentation) )

``` javascript
cincopa = cincopa || {};
cincopa.registeredFunctions = cincopa.registeredFunctions || [];
cincopa.registeredFunctions.push({
    func: function (name,data,gallery) {

        // your code here, for ex call window.ReactNativeWebView.postMessage

    },
    filter: "video.fullscreenenter"
});

cincopa.registeredFunctions.push({
    func: function (name,data,gallery) {

          // your code here, for ex call window.ReactNativeWebView.postMessage

    },
    filter: "video.fullscreenexit"
});
```

React Native WebView providing API to invoke onMessage from webview and it can be used for example to rotate the screen when the video goes to fullscreen mode.

### `onMessage`

Function that is invoked when the webview calls `window.ReactNativeWebView.postMessage`. Setting this property will inject this global into your webview.

`window.ReactNativeWebView.postMessage` accepts one argument, `data`, which will be available on the event object, `event.nativeEvent.data`. `data` must be a string.

| Type     | Required |
| -------- | -------- |
| function | No       |

To learn more, read the [Communicating between JS and Native](https://github.com/react-native-webview/react-native-webview/blob/master/docs/Guide.md#communicating-between-js-and-native) guide.

---



TIP:
Starting with Android 9 (API level 28) http url will not work by default so if you want to load urls with http you have to do changes in your AndroidManifest.xml

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest ...>
    <uses-permission android:name="android.permission.INTERNET" />
    <application
        ...
        android:usesCleartextTraffic="true"
        ...>
        ...
    </application>
</manifest>
```
