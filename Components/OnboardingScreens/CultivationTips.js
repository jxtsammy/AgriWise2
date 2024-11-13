import React, { useRef } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  PanResponder,
  Animated,TouchableOpacity
} from 'react-native';

const HealthCheckScreen = ({ navigation }) => {

  return (
    <View
      style={styles.container}
    >
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/TipsInfo.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>Cultivation Tips</Text>
          <Text style={styles.subtitle}>
            Recieve farming advice about how to improve your yield
          </Text>
        </View>

        <View style={styles.dotContainer}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.registerText}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },

  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  image: {
    width: '90%',
    top: 20,
    height: '80%'
  },
  textContainer: {
    alignItems: 'center',
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    paddingHorizontal: 20,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 40,
    alignItems:'center'
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 10,
    marginBottom: 30
  },
  activeDot: {
    backgroundColor: '#088a6a',
    width: 12,
    height: 12,
    borderRadius: 30,
  },
  buttonContainer: {
    flexDirection: 'column',
    width: '100%',
    marginBottom: 70,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginButton: {
    backgroundColor: '#088a6a',
    paddingVertical: 15,
    width: '80%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'

  },
  registerButton: {
    backgroundColor: 'transparent',
    paddingVertical: 15,
   width: '80%',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#088a6a',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
  registerText: {
    color: '#088a6a',
    fontSize: 18,
  },
});

export default HealthCheckScreen;