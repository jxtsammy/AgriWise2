import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons, Feather, Ionicons } from '@expo/vector-icons';

const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params;
  // Define the product options with sizes and prices
  const [selectedOption, setSelectedOption] = useState({
    size: '1 Litre',
    price: 1200
  });

  // Track liked state
  const [isLiked, setIsLiked] = useState(false);

  // Product options data
  const options = [
    { size: '1 Litre', price: 1200 },
    { size: '250 ML', price: 400 }
  ];

  // Function to handle option selection
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  // Function to toggle like state
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.leftContainer}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Store</Text>
        </View>
        <TouchableOpacity style={styles.cartButton}>
          <Feather name="shopping-cart" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        {/* Product Details */}
        <View style={styles.productContainer}>
          {/* Store Info and Rating */}
          <View style={styles.storeInfoContainer}>
            <Text style={styles.storeText}>View plant agri store</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.rating}>★★★★☆</Text>
              <Text style={styles.ratingValue}>4.5/5</Text>
            </View>
          </View>

          {/* Product Title */}
          <Text style={styles.productTitle}>
          {product.title}
          </Text>

          {/* Product Image */}
          <View style={styles.imageContainer}>
            <Image
              source={product.image}
              style={styles.productImage}
              resizeMode="contain"
            />
            <TouchableOpacity style={styles.shareButton}>
              <Feather name="share-2" size={20} color="#1B1B1B" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.wishlistButton} onPress={toggleLike}>
              <Feather
                name={isLiked ? "heart" : "heart"}
                size={20}
                color={isLiked ? "#FF4B4B" : "#1B1B1B"}
              />
            </TouchableOpacity>
          </View>

          {/* Size Options */}
          <View style={styles.productInfo}>
            <Text style={styles.sectionTitle}>Size</Text>
            <View style={styles.sizeContainer}>
              {options.map((option) => (
                <TouchableOpacity
                  key={option.size}
                  style={[
                    styles.sizeOption,
                    selectedOption.size === option.size && styles.sizeSelected
                  ]}
                  onPress={() => handleOptionSelect(option)}
                >
                  <Text style={[
                    styles.sizeText,
                    selectedOption.size === option.size && styles.selectedText
                  ]}>
                    {option.size}
                  </Text>
                  <Text style={[
                    styles.priceText,
                    selectedOption.size === option.size && styles.selectedText
                  ]}>
                    RS {option.price}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Discount */}
            <View style={styles.discountContainer}>
              <Text style={styles.discountText}>
                -12% RS {Math.round(selectedOption.price * 0.12)}
              </Text>
            </View>

            {/* Additional Info */}
            <View style={styles.infoList}>
              <View style={styles.infoItem}>
                <Ionicons name="globe-outline" size={20} color="#666" />
                <Text style={styles.infoText}>Country of origin: India</Text>
              </View>
              <View style={styles.infoItem}>
                <Ionicons name="shield-checkmark-outline" size={20} color="#666" />
                <Text style={styles.infoText}>Secure payments</Text>
              </View>
              <View style={styles.infoItem}>
                <Ionicons name="checkbox-outline" size={20} color="#008C4C" />
                <Text style={styles.infoText}>In stock, ready to ship</Text>
              </View>
              <View style={styles.infoItem}>
                <Ionicons name="eye-outline" size={20} color="#666" />
                <Text style={styles.infoText}>29839 people viewed this product in last 30 days</Text>
              </View>
            </View>

            <Text style={styles.shippingText}>
              Tax included. Shipping calculated at checkout.
            </Text>
          </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
    backgroundColor: '#088a6a',
    paddingTop: 50
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  headerTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  },
  cartButton: {
    padding: 8,
  },
  productContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  storeInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  storeText: {
    fontSize: 12,
    color: '#088a6a',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    color: '#FFA41C',
    marginRight: 4,
  },
  ratingValue: {
    color: '#666',
    fontSize: 14,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1B1B1B',
    marginBottom: 16,
  },
  imageContainer: {
    height: 300,
    backgroundColor: '#fff',
    position: 'relative',
    marginBottom: 16,
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  shareButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 20,
    elevation: 2,
  },
  wishlistButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 20,
    elevation: 2,
  },
  productInfo: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1B1B1B',
    marginBottom: 8,
  },
  sizeContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  sizeOption: {
    borderWidth: 1,
    borderColor: '#EFEFEF',
    borderRadius: 8,
    padding: 12,
    marginRight: 12,
    minWidth: 100,
    opacity: 1,
  },
  sizeSelected: {
    borderColor: '#088a6a',
    backgroundColor: '#F5F9F7',
  },
  selectedText: {
    color: '#088a6a',
    fontWeight: '600',
  },
  sizeText: {
    fontSize: 14,
    color: '#1B1B1B',
    marginBottom: 4,
  },
  priceText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1B1B1B',
  },
  discountContainer: {
    marginBottom: 16,
  },
  discountText: {
    color: '#FF4B4B',
    fontSize: 14,
  },
  infoList: {
    marginBottom: 16,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 11
  },
  infoText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#666',
  },
  shippingText: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
});

export default ProductDetailScreen;