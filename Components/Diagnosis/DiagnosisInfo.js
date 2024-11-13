import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DiagnosisDetails = ({ navigation }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Sample images array - replace with your actual images
  const images = [
    require('../../assets/cabcrop.jpg'),
    require('../../assets/crop1.jpeg'),
    require('../../assets/minds.png'),
  ];

  const symptoms = [
    "Contrary to popular belief, Lorem ipsum is not random text. It has roots in a piece of classical",
    "Contrary to popular belief, Lorem ipsum is not random text. It has roots",
    "Latin professor at Hampden",
    "Lorem ipsum passage, and going through",
  ];

  const mainReasons = [
    "Lorem ipsum passage, and going through",
    "Contrary to popular belief",
    "Contrary to popular belief, Lorem ipsum is not random text. It has roots in a piece of classical",
  ];

  const products = {
    biological: [
      {
        name: "Veratran D Bird Gon",
        image: require('../../assets/vb.jpeg'),
      },
      {
        name: "Guide Me King Bio",
        image: require('../../assets/vb.jpeg'),
      },
    ],
    chemical: [
      {
        name: "Veratran D Bird Gon",
        image: require('../../assets/vb.jpeg'),
      },
      {
        name: "Guide Me King Bio",
        image: require('../../assets/vb.jpeg'),
      },
    ],
  };

  const renderImage = ({ item, index }) => {
    return (
      <Image
        source={item}
        style={styles.slideImage}
        resizeMode="cover"
      />
    );
  };

  const handleScroll = (event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const offset = event.nativeEvent.contentOffset.x;
    const activeSlide = Math.round(offset / slideSize);
    setCurrentSlide(activeSlide);
  };

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Diagnosis</Text>
        </View>
        <TouchableOpacity>
          <Icon name="more-vert" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.content}>
          {/* Title */}
          <Text style={styles.title}>Tobacco Caterpillar</Text>
          <Text style={styles.subtitle}>Insect</Text>

          {/* Image Slider */}
          <View style={styles.imageContainer}>
            <FlatList
              data={images}
              renderItem={renderImage}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onScroll={handleScroll}
              keyExtractor={(_, index) => index.toString()}
            />
            {/* Dots indicator */}
            <View style={styles.dotsContainer}>
              {images.map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.dot,
                    currentSlide === index && styles.activeDot
                  ]}
                />
              ))}
            </View>
          </View>

          {/* Diagnosis Section */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionNumber}>1</Text>
              <Text style={styles.sectionTitle}>Confirm the diagnosis</Text>
              <TouchableOpacity style={styles.shareButton}>
                <Icon name="share" size={20} color="#00a67d" />
              </TouchableOpacity>
            </View>

            {/* Listen to symptoms */}
            <TouchableOpacity style={styles.audioButton} onPress={toggleAudio}>
              <Icon name="volume-up" size={20} color="#00a67d" />
              <Text style={styles.audioText}>Listen to the symptoms</Text>
              <Icon
                name={isPlaying ? "pause" : "play-arrow"}
                size={20}
                color="#00a67d"
              />
            </TouchableOpacity>

            {/* Symptoms List */}
            {symptoms.map((symptom, index) => (
              <View key={index} style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.symptomText}>{symptom}</Text>
              </View>
            ))}
          </View>

          {/* Main Reason Section */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionNumber}>2</Text>
              <Text style={styles.sectionTitle}>Main reason for the problem</Text>
            </View>

            {mainReasons.map((reason, index) => (
              <View key={index} style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.reasonText}>{reason}</Text>
              </View>
            ))}
          </View>

          {/* Recommended Products Section */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionNumber}>3</Text>
              <Text style={styles.sectionTitle}>Recommended Products:</Text>
            </View>

            {/* Biological Agents */}
            <Text style={styles.productTypeTitle}>Treatment with Biological Agents</Text>
            <Text style={styles.productSubtitle}>Spray on the foliage after diluted pond water</Text>
            <View style={styles.productsGrid}>
              {products.biological.map((product, index) => (
                <View key={index} style={styles.productCard}>
                  <Image source={product.image} style={styles.productImage} />
                  <Text style={styles.productName}>{product.name}</Text>
                </View>
              ))}
            </View>

            {/* Chemical Agents */}
            <Text style={styles.productTypeTitle}>Treatment with Chemical Agents</Text>
            <Text style={styles.productSubtitle}>Spray on the foliage after diluted pond water</Text>
            <View style={styles.productsGrid}>
              {products.chemical.map((product, index) => (
                <View key={index} style={styles.productCard}>
                  <Image source={product.image} style={styles.productImage} />
                  <Text style={styles.productName}>{product.name}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Disclaimer */}
          <Text style={styles.disclaimer}>
            Disclaimer: The use of the suggested products/chemicals may be subject to local regulations
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#00a67d',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    paddingTop: 50,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    padding: 8,
    marginRight: 4,
    fontSize:30
  },
  headerTitle: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  imageContainer: {
    marginTop: 16,
    height: 200,
    borderRadius: 8,
    overflow: 'hidden',
  },
  slideImage: {
    width: Dimensions.get('window').width - 32,
    height: 200,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 16,
    width: '100%',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#fff',
    marginHorizontal: 4,
    opacity: 0.5,
  },
  activeDot: {
    opacity: 1,
  },
  section: {
    marginTop: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionNumber: {
    width: 40,
    height: 40,
    backgroundColor: '#00a67d',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 24,
    marginRight: 8,
    fontSize: 26,
    padding: 10
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    flex: 1,
  },
  shareButton: {
    padding: 8,
  },
  audioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f9f6',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  audioText: {
    color: '#00a67d',
    marginLeft: 8,
    flex: 1,
  },
  bulletPoint: {
    flexDirection: 'row',
    marginBottom: 8,
    paddingRight: 16,
  },
  bullet: {
    color: '#00a67d',
    marginRight: 8,
    fontSize: 16,
  },
  symptomText: {
    flex: 1,
    color: '#666',
    lineHeight: 20,
  },
  reasonText: {
    flex: 1,
    color: '#666',
    lineHeight: 20,
  },
  productTypeTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#00a67d',
    marginTop: 16,
    marginBottom: 4,
  },
  productSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  productsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  productCard: {
    width: '48%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#088a6a',
    borderRadius: 15,
    padding: 12,
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  productName: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  disclaimer: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
    marginTop: 24,
    marginBottom: 16,
  },
});

export default DiagnosisDetails;