import React from 'react';
import { View, Text, TextInput, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const products = [
  {
    id: '1',
    title: 'V Bind Viral Disease Special, Cure against...',
    price: 'Rs 1200',
    discount: '(18% off)',
    deliveryDate: 'Free delivery by tomorrow',
    date: 'November 26',
    image: require('../../assets/vb.jpeg'), // using asset image directly
    rating: 4.5,
  },
  {
    id: '2',
    title: 'V Bind Viral Disease Special, Cure against...',
    price: 'Rs 1200',
    discount: '(18% off)',
    deliveryDate: 'Free delivery by tomorrow',
    date: 'November 26',
    image: require('../../assets/vb.jpeg'), // using asset image directly
    rating: 4.5,
  },
  {
    id: '3',
    title: 'V Bind Viral Disease Special, Cure against...',
    price: 'Rs 1200',
    discount: '(18% off)',
    deliveryDate: 'Free delivery by tomorrow',
    date: 'November 26',
    image: require('../../assets/vb.jpeg'), // using asset image directly
    rating: 4.5,
  },
  {
    id: '4',
    title: 'V Bind Viral Disease Special, Cure against...',
    price: 'Rs 1200',
    discount: '(18% off)',
    deliveryDate: 'Free delivery by tomorrow',
    date: 'November 26',
    image: require('../../assets/vb.jpeg'), // using asset image directly
    rating: 4.5,
  },
];

const StoreScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Icon name="arrow-back" size={24} color="#fff" />
          <Text style={styles.headerTitle}>Store</Text>
        </View>
        <Icon name="shopping-cart" size={24} color="#fff" />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search" placeholderTextColor="#ccc"/>
        <Icon name="search" size={24} color="gray" style={styles.searchIcon} />
      </View>

      {/* Filter Section */}
      <View style={styles.filterContainer}>
        <Text style={styles.filterText}>Filter by</Text>
        <TouchableOpacity>
          <Text style={styles.changeText}>Change</Text>
        </TouchableOpacity>
      </View>

      {/* Product List Container */}
       <View style={styles.productListContainer}>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { product: item })}>
              <View style={styles.productCard}>
                <Image source={item.image} style={styles.productImage} />
                <View style={styles.productDetails}>
                  <Text style={styles.productTitle}>{item.title}</Text>
                  <View style={styles.ratingContainer}>
                    <Text style={styles.rating}>{item.rating}</Text>
                    <Icon name="star" size={16} color="orange" />
                  </View>
                  <Text style={styles.price}>{item.price} <Text style={styles.discount}>{item.discount}</Text></Text>
                  <Text style={styles.delivery}>{item.deliveryDate}</Text>
                  <Text style={styles.date}>{item.date}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default StoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#088a6a',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#088a6a',
    marginTop: 40,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  searchInput: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 30,
     shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
  },
  searchIcon: {
    position: 'absolute',
    right: 24,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
  filterText: {
    color: '#555',
  },
  changeText: {
    color: '#28a745',
    fontWeight: 'bold',
  },
  productListContainer: {
    flex: 1,
    backgroundColor: '#fff', // White background for the product list container
    paddingTop: 8,
  },
  productCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  productDetails: {
    flex: 1,
    marginLeft: 12,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  rating: {
    fontSize: 12,
    color: 'orange',
    marginRight: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#088a6a',
  },
  discount: {
    fontSize: 12,
    color: '#777',
  },
  delivery: {
    fontSize: 12,
    color: '#555',
    marginVertical: 2,
  },
  date: {
    fontSize: 12,
    color: '#555',
  },
});