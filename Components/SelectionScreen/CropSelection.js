import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const SCREEN_WIDTH = Dimensions.get('window').width;
const CONTAINER_PADDING = 24;
const GRID_SPACING = 12;
const NUM_COLUMNS = 4;
const ITEM_WIDTH = (SCREEN_WIDTH - (CONTAINER_PADDING * 2) - (NUM_COLUMNS - 1) * GRID_SPACING) / NUM_COLUMNS;

const crops = [
  { id: 1, name: 'Tomato', icon: '🍅' },
  { id: 2, name: 'Green Chili', icon: '🌶️' },
  { id: 3, name: 'Red Chili', icon: '🌶️' },
  { id: 4, name: 'Onion', icon: '🧅' },
  { id: 5, name: 'Okra', icon: '🥬' },
  { id: 6, name: 'Brinjal', icon: '🍆' },
  { id: 7, name: 'Cabbage', icon: '🥬' },
  { id: 8, name: 'Mushroom', icon: '🍄' },
  { id: 9, name: 'Carrot', icon: '🥕' },
  { id: 10, name: 'Apple', icon: '🍎' },
  { id: 11, name: 'Beans', icon: '🫘' },
  { id: 12, name: 'Banana', icon: '🍌' },
  { id: 13, name: 'Capsicum', icon: '🫑' },
  { id: 14, name: 'Citrus', icon: '🍊' },
  { id: 15, name: 'Grape', icon: '🍇' },
  { id: 16, name: 'Mango', icon: '🥭' },
];

const CropSelector = ({ onNext, onSkip, navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCrops, setSelectedCrops] = useState([]);

  const filteredCrops = crops.filter(crop =>
    crop.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCropSelect = (crop) => {
    if (selectedCrops.find(selected => selected.id === crop.id)) {
      setSelectedCrops(selectedCrops.filter(selected => selected.id !== crop.id));
    } else if (selectedCrops.length < 8) {
      setSelectedCrops([...selectedCrops, crop]);
    }
  };

  const renderCropItem = ({ item }) => {
    const isSelected = selectedCrops.find(crop => crop.id === item.id);

    return (
      <TouchableOpacity
        style={[
          styles.cropItem,
          isSelected && styles.selectedCropItem
        ]}
        onPress={() => handleCropSelect(item)}
      >
        <Text style={styles.cropIcon}>{item.icon}</Text>
        <Text style={styles.cropName}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Select your Crop</Text>
          <Text style={styles.subtitle}>Get special advisory for your crop</Text>
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <MaterialIcons
            name="search"
            size={24}
            color="#9CA3AF"
            style={styles.searchIcon}
          />
        </View>

        <Text style={styles.limitText}>
          You can add maximum of 8 crops
        </Text>

        <FlatList
          data={filteredCrops}
          renderItem={renderCropItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={NUM_COLUMNS}
          columnWrapperStyle={styles.row}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.gridContainer}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              onSkip?.();
              navigation.navigate('Home');
            }}
            style={styles.skipButton}
          >
            <Text style={styles.skipButtonText}>Skip</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              onNext?.(selectedCrops);
              if (selectedCrops.length > 0) {
                navigation.navigate('NavBar');
              }
            }}
            style={[
              styles.nextButton,
              selectedCrops.length === 0 && styles.disabledButton
            ]}
            disabled={selectedCrops.length === 0}
          >
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    padding: CONTAINER_PADDING,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 8,
    color: '#111827',
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
  },
  searchContainer: {
    marginBottom: 20,
    position: 'relative',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#10B981',
    borderRadius: 30,
    padding: 16,
    paddingRight: 48,
    fontSize: 16,
  },
  searchIcon: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
  limitText: {
    fontSize: 15,
    color: '#6B7280',
    marginBottom: 20,
  },
  gridContainer: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: GRID_SPACING,
  },
  cropItem: {
    width: ITEM_WIDTH,
    aspectRatio: 1,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
    marginBottom: 20
  },
  selectedCropItem: {
    borderWidth: 2,
    borderColor: '#10B981',
    backgroundColor: '#ECFDF5',
  },
  cropIcon: {
    fontSize: 36,
    marginBottom: 8,
  },
  cropName: {
    fontSize: 10,
    textAlign: 'center',
    color: '#374151',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    marginTop: 'auto',
  },
  skipButton: {
    padding: 12,
  },
  skipButtonText: {
    color: '#088a6a',
    fontSize: 16,
    fontWeight: '500',
  },
  nextButton: {
    backgroundColor: '#088A6A',
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 10,
  },
  disabledButton: {
    opacity: 0.5,
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default CropSelector;