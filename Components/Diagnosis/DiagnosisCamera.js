import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Svg, { Line } from 'react-native-svg';
import Icon from 'react-native-vector-icons/Ionicons';

const PlantDiagnosisScreen = ({ navigation }) => {
  const cameraRef = useRef(null);

  const takePictureAndNavigate = async () => {
    if (cameraRef.current) {
      try {
        const options = { quality: 0.8, base64: true };
        const data = await cameraRef.current.takePictureAsync(options);
        Alert.alert("Picture Taken", "Image captured successfully!");
        console.log(data.uri); // You can use the data.uri to display or save the image
      } catch (error) {
        console.error(error);
        Alert.alert("Error", "Failed to capture image.");
      }
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        style={styles.camera}
        type={RNCamera.Constants.Type.back}
      />

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={30} color="white" />
      </TouchableOpacity>

      {/* Focus Frame */}
      <Svg height="100%" width="100%" style={styles.frame}>
        <Line x1="20" y1="200" x2="80" y2="200" stroke="white" strokeWidth="4" />
        <Line x1="20" y1="200" x2="20" y2="260" stroke="white" strokeWidth="4" />
        <Line x1="300" y1="200" x2="360" y2="200" stroke="white" strokeWidth="4" />
        <Line x1="360" y1="200" x2="360" y2="260" stroke="white" strokeWidth="4" />
        <Line x1="20" y1="600" x2="80" y2="600" stroke="white" strokeWidth="4" />
        <Line x1="20" y1="600" x2="20" y2="540" stroke="white" strokeWidth="4" />
        <Line x1="300" y1="600" x2="360" y2="600" stroke="white" strokeWidth="4" />
        <Line x1="360" y1="600" x2="360" y2="540" stroke="white" strokeWidth="4" />
      </Svg>

      {/* Guide Text */}
      <Text style={styles.guideText}>Diagnose</Text>

      {/* Bottom Controls */}
      <View style={styles.controls}>
        <TouchableOpacity>
          <Icon name="image-outline" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.captureButton} onPress={takePictureAndNavigate}>
          <View style={styles.captureInner} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="menu" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black' },
  camera: { flex: 1 },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  frame: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 },
  guideText: {
    position: 'absolute',
    bottom: 150,
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 40,
    width: '100%',
  },
  captureButton: {
    backgroundColor: 'white',
    borderRadius: 35,
    height: 70,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  captureInner: {
    backgroundColor: 'black',
    borderRadius: 25,
    height: 50,
    width: 50,
  },
});

export default PlantDiagnosisScreen;