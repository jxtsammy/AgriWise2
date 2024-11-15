import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';


// Custom Drawer Content Component
const CustomDrawerContent = (props) => {
  const menuItems = [
    { icon: 'event', title: 'Appointment' },
    { icon: 'notifications', title: 'Notification' },
    { icon: 'feed', title: 'News' },
    { icon: 'history', title: 'Order history' },
    { icon: 'settings', title: 'Settings' },
  ];

  return (
    <DrawerContentScrollView {...props} style={styles.drawerContent}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => props.navigation.closeDrawer()}
      >
        <MaterialIcons name="arrow-back" size={30} color="#088a6a" />
      </TouchableOpacity>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.avatarContainer}>
          <Image
            source={require('../../assets/minds.png')}
            style={styles.avatar}
          />
        </View>
        <Text style={styles.name}>Raj kumar BL</Text>
        <Text style={styles.email}>Rajkumarb007@gmail.com</Text>
      </View>

      {/* Menu Items */}
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuItem}
          onPress={() => props.navigation.navigate(item.title)}
        >
          <MaterialIcons name={item.icon} size={30} color="#088a6a" />
          <Text style={styles.menuItemText}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </DrawerContentScrollView>
  );
};


// Main App Component


const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 1,
    fontWeight: 'bold'
  },
  profileSection: {
    padding: 20,
    paddingTop: 20, // Added extra padding to account for back button
    alignItems: 'center',
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden',
    marginBottom: 12,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  menuItemText: {
    marginLeft: 16,
    fontSize: 16,
    color: '#333',
  },
});

export default CustomDrawerContent;