// import { View, Button, StyleSheet } from "react-native";
// import * as ScreenCapture from "expo-screen-capture";
// import Header from '../components/Header'
// import Footer from '../components/Footer'

// export default function ScreenInfo({ navigation }) {
//     const active = async () => {
//         await ScreenCapture.preventScreenCaptureAsync();
//     }
//     const desactive = async () => {
//         await ScreenCapture.allowScreenCaptureAsync();
//     }

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       gap: 10
//     },
//     content: {
//       flex: 1,
//       gap: 20,
//       padding: 20,
//       alignSelf: 'center',
//     },
//     contentTextStyle: {
//       padding: 5,
//       textAlignVertical: 'center',
//       minHeight: 50,
//       backgroundColor: '#969',
//       color: 'white',
//       fontWeight: 'bold',
//       fontSize: 18,
//       textAlign: 'center'
//     },
//     footer: {
//       backgroundColor: '#888',
//       paddingHorizontal: 25,
//       padding: 20,
//     }
//   });

//   return (
//     <View style={styles.container} accessibilityLabel="expo-screen">
//         <Header></Header>
//       <Footer/>
//     </View>
//   );

import { useEffect } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import * as ScreenCapture from 'expo-screen-capture';
import * as MediaLibrary from 'expo-media-library';

export default function ScreenCaptureExample() {
  useEffect(() => {
    if (hasPermissions()) {
      const subscription = ScreenCapture.addScreenshotListener(() => {
        alert('Thanks for screenshotting my beautiful app 😊');
      });
      return () => subscription.remove();
    }
  }, []);

  const hasPermissions = async () => {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    return status === 'granted';
  };

  const activate = async () => {
    await ScreenCapture.preventScreenCaptureAsync();
  };

  const deactivate = async () => {
    await ScreenCapture.allowScreenCaptureAsync();
  };

  return (
    <View style={styles.container}>
      <Button title="Activate" onPress={activate} />
      <Button title="Deactivate" onPress={deactivate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
