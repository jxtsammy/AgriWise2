import React, { useRef } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  PanResponder,
  Animated,
} from 'react-native';

const HealthCheckScreen = ({ navigation }) => {
  const pan = useRef(new Animated.ValueXY()).current;
  const screenWidth = Dimensions.get('window').width;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      { dx: pan.x, dy: pan.y }
    ], { useNativeDriver: false }),
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dx < -50) { // Threshold for left swipe
        navigation.navigate('CultivationTips'); // Replace with your next screen name
      }
      Animated.spring(pan, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: false,
      }).start();
    },
  });

  return (
    <Animated.View
      style={[styles.container, pan.getLayout()]}
      {...panResponder.panHandlers}
    >
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/CommunityImg.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>Community</Text>
          <Text style={styles.subtitle}>
            Ask question about your crop to recieve help from the Community
          </Text>
        </View>

        <View style={styles.dotContainer}>
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
        </View>
      </View>
    </Animated.View>
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
    width: '110%',
    top: 70,
    height: '90%'
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
    marginBottom: 200
  },
  activeDot: {
    backgroundColor: '#088a6a',
    width: 12,
    height: 12,
    borderRadius: 30,
  },
});

export default HealthCheckScreen;