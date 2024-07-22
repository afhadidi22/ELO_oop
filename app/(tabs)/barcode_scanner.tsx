import { CameraView, useCameraPermissions, BarcodeScanningResult } from 'expo-camera';
import { useState } from 'react';
import { Camera, useCameraDevice, useCodeScanner, useCameraPermission } from 'react-native-vision-camera';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [permission, requestPermission] = useCameraPermissions();
  const [data, setData] = useState("put scanned uuid here");
  
  const handleBarcodeScanned = (scanningResult: BarcodeScanningResult) => {
    setData(scanningResult.data)
  };
  
  
  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} barcodeScannerSettings={{barcodeTypes:['qr']}} onBarcodeScanned={handleBarcodeScanned}>
        <View style={styles.buttonContainer}>
            <Text style={styles.text}>Camera is {data}</Text>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});