import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width - 32; // Full width minus padding

const CropItem = ({ emoji, name }) => (
  <View style={styles.cropItem}>
    <View style={styles.emojiContainer}>
      <Text style={styles.emoji}>{emoji}</Text>
    </View>
    <Text style={styles.cropName}>{name}</Text>
  </View>
);

const NewsCard = ({ image, title, time }) => (
  <View style={styles.newsCard}>
    <View style={styles.newsContent}>
      <Text style={styles.newsTitle} numberOfLines={2}>
        {title}
      </Text>
      <Text style={styles.newsTime}>{time}</Text>
    </View>
    <Image source={image} style={styles.newsImage} />
  </View>
);

const WeatherCard = () => (
  <View style={styles.weatherCard}>
    <View style={styles.weatherCardContent}>
      <View style={styles.weatherDetails}>
        <View style={styles.weatherMainInfo}>
          <Text style={styles.weatherTitle}>New Aditiprim 15 Nov</Text>
          <View style={styles.weatherInfo}>
            <Text style={styles.temperature}>26.8 °C</Text>
            <View style={styles.weatherIconContainer}>
              <Image
                source={require('../../assets/rain.png')}
                style={styles.weatherIcon}
              />
            </View>
          </View>
          <Text style={styles.weatherSubtext}>Rain expected at 7:00pm</Text>
        </View>
      </View>
    </View>
  </View>
);

const App = ({navigation}) => {
  const [activeNewsIndex, setActiveNewsIndex] = useState(0);

  const crops = [
    { id: 1, emoji: '🍅', name: 'Tomato' },
    { id: 2, emoji: '🥭', name: 'Mango' },
    { id: 3, emoji: '🍋', name: 'Lemon' },
    { id: 4, emoji: '🍌', name: 'Banana' },
    { id: 5, emoji: '🥔', name: 'Potato' },
    { id: 6, emoji: '🌶️', name: 'Chili' },
    { id: 7, emoji: '🥕', name: 'Carrot' },
    { id: 8, emoji: '🍆', name: 'Eggplant' },
  ];

  const newsItems = [
    {
      id: 1,
      image: require('../../assets/minds.png'),
      title: 'Latest News on manufacturing Sector - Magnil Technology',
      time: '23 Hours ago'
    },
    {
      id: 2,
      image: require('../../assets/minds.png'),
      title: 'Agricultural Innovation: Smart Farming Technologies',
      time: '2 Days ago'
    },
    {
      id: 3,
      image: require('../../assets/minds.png'),
      title: 'Sustainable Farming Practices: A Guide to Organic Cultivation',
      time: '3 Days ago'
    }
  ];

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / CARD_WIDTH);
    setActiveNewsIndex(index);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Icon name="menu" size={24} color="#fff" />
          <Text style={styles.headerTitle}>AgriWise</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
        <Icon name="notifications" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {/* Crop Selection */}
        <View style={styles.cropSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Select your Crop</Text>
            <TouchableOpacity>
              <Text style={styles.editLink}>Edit</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cropList}>
            {crops.map((crop) => (
              <CropItem key={crop.id} emoji={crop.emoji} name={crop.name} />
            ))}
          </ScrollView>
        </View>

        {/* Trending News */}
        <View style={styles.newsSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Trending News</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
              <Text style={styles.viewMore}>View More</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}
          >
            {newsItems.map((news) => (
              <NewsCard
                key={news.id}
                image={news.image}
                title={news.title}
                time={news.time}
              />
            ))}
          </ScrollView>
          <View style={styles.paginationDots}>
            {newsItems.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  index === activeNewsIndex && styles.activeDot
                ]}
              />
            ))}
          </View>
        </View>

        {/* Crop Doctor */}
        <View style={styles.doctorSection}>
          <Text style={styles.sectionTitle}>Be your Crop Doctor</Text>
          <View style={styles.doctorCard}>
            <View style={styles.doctorIconContainer}>
              <Image
                source={require('../../assets/plant.jpg')}
                style={styles.doctorIcon}
                resizeMode="contain"
              />
            </View>
            <View style={styles.doctorContent}>
              <Text style={styles.doctorText}>Take a picture</Text>
              <Text style={styles.doctorText}>See a diagnosis</Text>
              <Text style={styles.doctorText}>Get a medicine</Text>
              <TouchableOpacity style={styles.takePictureButton} onPress={() => navigation.navigate('Camera')}>
                <Text style={styles.buttonText}>Take Picture</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Weather Report */}
        <View style={styles.weatherSection}>
          <Text style={styles.sectionTitle}>Weather report</Text>
          <WeatherCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#088a6a',
    padding: 20,
    paddingTop: 30
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12, // Add space between menu icon and title
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cropSection: {
    padding: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  editLink: {
    color: '#00A67E',
  },
  cropList: {
    flexDirection: 'row',
  },
  cropItem: {
    marginRight: 16,
    alignItems: 'center',
  },
  emojiContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 1,
  },
  emoji: {
    fontSize: 32,
  },
  cropName: {
    marginTop: 4,
    fontSize: 12,
    color: '#666',
  },
  newsSection: {
    padding: 16,
  },
  viewMore: {
    color: '#088a6a',
  },
  newsCard: {
    width: CARD_WIDTH,
    backgroundColor: '#fff',
    borderRadius: 15,
    flexDirection: 'row',
    padding: 10,
    marginRight: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 1,
    borderWidth: 1,
    borderColor: '#088a6a'
  },
  newsContent: {
    flex: 1,
    paddingRight: 10,
  },
  newsImage: {
    width: 120,
    height: 110,
    borderRadius: 15
  },
  newsTitle: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
  },
  newsTime: {
    color: '#666',
    fontSize: 12,
  },
  paginationDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#088a6a',
  },
  doctorSection: {
    padding: 16,
  },
  doctorCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    marginTop: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 1,
  },
  doctorIconContainer: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  doctorIcon: {
    width: 100,
    height: 100,
  },
  doctorContent: {
    flex: 1,
    marginLeft: 16,
  },
  doctorText: {
    marginBottom: 4,
  },
  takePictureButton: {
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 8,
    width: '70%',
    borderWidth: 1,
    borderColor:'#088a6a'
  },
  buttonText: {
    color: '#088a6a',
  },
  weatherSection: {
    padding: 16,
  },
  weatherCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginTop: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 1,
  },
  weatherTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  weatherInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  temperature: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 8,
  },
  weatherIconContainer: {
    marginLeft: 8,
  },
  weatherIcon: {
    width: 30,
    height: 30,
  },
  weatherSubtext: {
    color: '#666',
    marginTop: 8,
  },
});

export default App;