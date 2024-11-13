import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const screenWidth = Dimensions.get('window').width;

const notifications = [
  { id: '1', url: 'https://Business Today. In', title: 'Latest News on agriculture Sector - Magnil Technology', image: require('../../assets/plant.jpg'), time: '23 Hours ago' },
  { id: '2', url: 'https://Business Today. In', title: 'Latest News on agriculture Sector - Magnil Technology', image: require('../../assets/crop1.jpeg'), time: '13 Hours ago' },
  { id: '3', url: 'https://Business Today. In', title: 'Latest News on agriculture Sector - Magnil Technology', image: require('../../assets/minds.png'), time: '3 Hours ago' },
  { id: '4', url: 'https://Business Today. In', title: 'Latest News on agriculture Sector - Magnil Technology', image: require('../../assets/crop1.jpeg'), time: '1 Weeks ago' },
  { id: '5', url: 'https://Business Today. In', title: 'Latest News on agriculture Sector - Magnil Technology', image: require('../../assets/cabcrop.jpg'), time: '03 Hours ago' },
];

const NotificationScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('News');

  return (
    <View style={styles.container}>
      {/* Header with Back Button and Title */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#ffffff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Notification</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => setActiveTab('News')} style={[styles.tab, activeTab === 'News' && styles.activeTab]}>
          <Text style={[styles.tabText, activeTab === 'News' && styles.activeTabText]}>News</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Video')} style={[styles.tab, activeTab === 'Video' && styles.activeTab]}>
          <Text style={[styles.tabText, activeTab === 'Video' && styles.activeTabText]}>Video</Text>
        </TouchableOpacity>
      </View>

      {/* Content Based on Active Tab */}
      {activeTab === 'News' ? (
        <ScrollView style={styles.scrollView}>
          {/* Recent Section */}
          <Text style={styles.sectionTitle}>Recent</Text>
          {notifications.slice(0, 3).map((item) => (
            <View key={item.id} style={styles.card}>
              <View style={styles.cardContent}>
                <View style={styles.textContainer}>
                  <Text style={styles.urlText}>{item.url}</Text>
                  <Text style={styles.titleText}>{item.title}</Text>
                  <Text style={styles.timeText}>{item.time}</Text>
                </View>
                <Image source={item.image} style={styles.image} />
              </View>
            </View>
          ))}

          {/* Previous Section */}
          <Text style={styles.sectionTitle}>Previous</Text>
          {notifications.slice(3).map((item) => (
            <View key={item.id} style={styles.card}>
              <View style={styles.cardContent}>
                <View style={styles.textContainer}>
                  <Text style={styles.urlText}>{item.url}</Text>
                  <Text style={styles.titleText}>{item.title}</Text>
                  <Text style={styles.timeText}>{item.time}</Text>
                </View>
                <Image source={item.image} style={styles.image} />
              </View>
            </View>
          ))}
        </ScrollView>
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Nothing available</Text>
        </View>
      )}
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#088a6a',
    paddingVertical: 16,
    paddingHorizontal: 16,
    paddingTop: 60,
  },
  backButton: {
    marginRight: 8,
  },
  headerText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
    backgroundColor: '#088a6a',
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 24,
  },
  tabText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#fff',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  sectionTitle: {
    marginTop: 16,
    marginBottom: 8,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: screenWidth - 65,
  },
  textContainer: {
    flex: 1,
  },
  urlText: {
    fontSize: 12,
    color: '#888888',
    marginBottom: 4,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  timeText: {
    fontSize: 12,
    color: '#888888',
    marginTop: 4,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginLeft: 12,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#888888',
  },
});