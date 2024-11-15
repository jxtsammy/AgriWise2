import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Platform,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AppointmentBooking = ({ navigation }) => {
  const [state, setState] = useState('Daniel Amoako Kodua');
  const [district, setDistrict] = useState('Accra');
  const [visitType, setVisitType] = useState('visit');
  const [problem, setProblem] = useState('');

  // Sample data
  const states = ['Greater Accra', 'Ashanti Region', 'Volta Region', 'Western Region', 'Eastern Region'];
  const districts = ['Accra', 'Kumasi', 'Ho', 'Takoradi', 'Koforidua'];

  const handleSubmit = () => {
    console.log({
      state,
      district,
      visitType,
      problem,
    });
  };

  const CustomDropdown = ({ label, value, items, onValueChange, required = false }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
      <View style={styles.formGroup}>
        <Text style={styles.label}>{label} {required && '*'}</Text>
        <TouchableOpacity
          style={styles.dropdownButton}
          onPress={() => setIsVisible(true)}
        >
          <Text style={styles.dropdownButtonText}>{value}</Text>
          <Icon name="arrow-drop-down" size={24} color="#666" />
        </TouchableOpacity>

        <Modal
          visible={isVisible}
          transparent={true}
          animationType="none"
          onRequestClose={() => setIsVisible(false)}
        >
          <TouchableOpacity
            style={styles.modalOverlay}
            activeOpacity={1}
            onPress={() => setIsVisible(false)}
          >
            <View style={[
              styles.dropdownList,
              {
                top: Platform.select({
                  ios: 200,
                  android: 180,
                })
              }
            ]}>
              {items.map((item) => (
                <TouchableOpacity
                  key={item}
                  style={styles.dropdownItem}
                  onPress={() => {
                    onValueChange(item);
                    setIsVisible(false);
                  }}
                >
                  <Text style={styles.dropdownItemText}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Appointment booking</Text>
      </View>

      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.title}>Book your Appointment</Text>
          <Text style={styles.subtitle}>
            book your appointment to visit or to get call please enter the following details
          </Text>

          <View style={styles.form}>
            {/* State Selection */}
            <CustomDropdown
              label="Select the Region"
              value={state}
              items={states}
              onValueChange={setState}
              required
            />

            {/* District Selection */}
            <CustomDropdown
              label="Select the City"
              value={district}
              items={districts}
              onValueChange={setDistrict}
              required
            />

            {/* Visit Type Selection */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>Enter the Details *</Text>
              <View style={styles.radioGroup}>
                <TouchableOpacity
                  style={styles.radioButton}
                  onPress={() => setVisitType('visit')}
                >
                  <View style={styles.radio}>
                    {visitType === 'visit' && <View style={styles.radioSelected} />}
                  </View>
                  <Text style={styles.radioText}>To visit</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.radioButton}
                  onPress={() => setVisitType('call')}
                >
                  <View style={styles.radio}>
                    {visitType === 'call' && <View style={styles.radioSelected} />}
                  </View>
                  <Text style={styles.radioText}>For a call</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Problem Description */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>Enter the Problem *</Text>
              <TextInput
                style={styles.textInput}
                multiline
                numberOfLines={4}
                value={problem}
                onChangeText={setProblem}
                placeholder="Describe your problem"
              />
            </View>

            {/* Submit Button */}
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}
            >
              <Text style={styles.submitButtonText}>Book now</Text>
            </TouchableOpacity>
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
    backgroundColor: '#088a6a',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingTop: 55,

  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 5,
  },
  content: {
    padding: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
    marginBottom: 20,
  },
  form: {
    marginTop: 20,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-start',
  },
  dropdownList: {
    position: 'absolute',
    left: 20,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 5,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Elevation for Android
    elevation: 5,
    marginTop: 80
  },
  dropdownItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  },
  dropdownItemText: {
    fontSize: 16,
    color: '#333',
  },
  dropdownButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#fff',
  },
  dropdownButtonText: {
    fontSize: 16,
    color: '#333',
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 30,
  },
  radio: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#00a67d',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  radioSelected: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#00a67d',
  },
  radioText: {
    fontSize: 16,
    color: '#333',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#088a6a',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AppointmentBooking;