import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import CountryPicker from 'react-native-country-picker-modal';

const ghanaRegions = [
  'Ahafo',
  'Ashanti',
  'Bono',
  'Bono East',
  'Central',
  'Eastern',
  'Greater Accra',
  'Northern',
  'North East',
  'Oti',
  'Savannah',
  'Upper East',
  'Upper West',
  'Volta',
  'Western',
  'Western North'
];

const SignUpScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isFarmer, setIsFarmer] = useState(false);
  const [gender, setGender] = useState('');
  const [location, setLocation] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [countryCode, setCountryCode] = useState('GH');
  const [callingCode, setCallingCode] = useState('233');
  const [showCountryPicker, setShowCountryPicker] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const onSelectCountry = (country) => {
    setCountryCode(country.cca2);
    setCallingCode(country.callingCode[0]);
    setLocation('');
  };

  const handleSignUp = () => {
    console.log('Sign up:', {
      firstName,
      lastName,
      email,
      phone: `+${callingCode}${phone}`,
      password,
      isFarmer,
      gender,
      location,
      agreeToTerms,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            bounces={false}
          >
            <View style={styles.content}>
              <Image
                source={require('../../assets/SignUpImg.png')}
                style={styles.image}
                resizeMode="contain"
              />

              <Text style={styles.title}>Sign up</Text>
              <Text style={styles.subtitle}>Create a new account to continue</Text>

              <View style={styles.form}>
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>First Name</Text>
                  <TextInput
                    style={styles.input}
                    value={firstName}
                    onChangeText={setFirstName}
                    placeholder="Enter your first name"
                    placeholderTextColor="#333"
                    returnKeyType="next"
                  />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Last Name</Text>
                  <TextInput
                    style={styles.input}
                    value={lastName}
                    onChangeText={setLastName}
                    placeholder="Enter your last name"
                    placeholderTextColor="#333"
                    returnKeyType="next"
                  />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Email</Text>
                  <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="example@email.com"
                    placeholderTextColor="#333"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    returnKeyType="next"
                  />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Phone Number</Text>
                  <View style={styles.phoneInputContainer}>
                    <TouchableOpacity
                      style={styles.countryPickerButton}
                      onPress={() => setShowCountryPicker(true)}
                    >
                      <CountryPicker
                        withFilter
                        withFlag
                        withCallingCode
                        countryCode={countryCode}
                        visible={showCountryPicker}
                        onSelect={onSelectCountry}
                        onClose={() => setShowCountryPicker(false)}
                        countryCodes={['GH', 'NG']}
                      />
                      <Feather name="chevron-down" size={20} color="#088a6a" />
                    </TouchableOpacity>

                    <TextInput
                      style={styles.phoneInput}
                      value={phone}
                      onChangeText={setPhone}
                      placeholder="phone"
                      placeholderTextColor="#333"
                      keyboardType="phone-pad"
                      maxLength={10}
                      returnKeyType="next"
                    />
                  </View>
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Password</Text>
                  <View style={styles.passwordContainer}>
                    <TextInput
                      style={styles.passwordInput}
                      value={password}
                      onChangeText={setPassword}
                      placeholder="Enter your password"
                      placeholderTextColor="#333"
                      secureTextEntry={!showPassword}
                      returnKeyType="next"
                    />
                    <TouchableOpacity
                      style={styles.eyeIcon}
                      onPress={togglePasswordVisibility}
                    >
                      <Feather
                        name={showPassword ? 'eye' : 'eye-off'}
                        size={20}
                        color="#088a6a"
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Are you a farmer?</Text>
                  <View style={styles.radioContainer}>
                    <TouchableOpacity
                      style={[styles.radio, isFarmer && styles.radioSelected]}
                      onPress={() => setIsFarmer(true)}
                    >
                      <Text style={styles.radioText}>Yes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.radio, !isFarmer && styles.radioSelected]}
                      onPress={() => setIsFarmer(false)}
                    >
                      <Text style={styles.radioText}>No</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Gender</Text>
                  <View style={styles.radioContainer}>
                    <TouchableOpacity
                      style={[styles.radio, gender === 'male' && styles.radioSelected]}
                      onPress={() => setGender('male')}
                    >
                      <Text style={styles.radioText}>Male</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.radio, gender === 'female' && styles.radioSelected]}
                      onPress={() => setGender('female')}
                    >
                      <Text style={styles.radioText}>Female</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {countryCode === 'GH' && (
                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>Region</Text>
                    <View style={styles.pickerContainer}>
                      <ScrollView 
                        horizontal 
                        showsHorizontalScrollIndicator={false}
                        style={styles.regionPicker}
                      >
                        {ghanaRegions.map((region) => (
                          <TouchableOpacity
                            key={region}
                            style={[
                              styles.regionButton,
                              location === region && styles.regionButtonSelected
                            ]}
                            onPress={() => setLocation(region)}
                          >
                            <Text style={[
                              styles.regionButtonText,
                              location === region && styles.regionButtonTextSelected
                            ]}>
                              {region}
                            </Text>
                          </TouchableOpacity>
                        ))}
                      </ScrollView>
                    </View>
                  </View>
                )}

                <View style={styles.termsContainer}>
                  <TouchableOpacity
                    style={styles.checkbox}
                    onPress={() => setAgreeToTerms(!agreeToTerms)}
                  >
                    {agreeToTerms && (
                      <Feather name="check" size={16} color="#00A67E" />
                    )}
                  </TouchableOpacity>
                  <Text style={styles.termsText}>
                    By ticking you agree to our{' '}
                    <Text style={styles.termsLink}>Terms and Policies</Text>
                  </Text>
                </View>

                <TouchableOpacity
                  style={[
                    styles.signUpButton,
                    !agreeToTerms && styles.signUpButtonDisabled,
                  ]}
                  onPress={handleSignUp}
                  disabled={!agreeToTerms}
                >
                  <Text style={styles.signUpButtonText}>Sign up</Text>
                </TouchableOpacity>

                <View style={styles.loginContainer}>
                  <Text style={styles.loginText}>Already have an Account? </Text>
                  <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.loginLink}>Log in</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
  },
  form: {
    gap: 16,
  },
  inputContainer: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#000',
  },
  phoneInputContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  countryPickerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    gap: 8,
  },
  phoneInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#000',
  },
  passwordContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
  },
  passwordInput: {
    flex: 1,
    padding: 12,
    fontSize: 16,
    color: '#000',
  },
  eyeIcon: {
    padding: 12,
    justifyContent: 'center',
  },
  radioContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  radio: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    minWidth: 80,
    alignItems: 'center',
  },
  radioSelected: {
    backgroundColor: '#088a6a',
    borderColor: '#088a6a',
  },
  radioText: {
    color: '#333',
    fontSize: 16,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
  },
  regionPicker: {
    padding: 8,
  },
  regionButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginHorizontal: 4,
    backgroundColor: '#f0f0f0',
  },
  regionButtonSelected: {
    backgroundColor: '#088a6a',
  },
  regionButtonText: {
    color: '#333',
    fontSize: 14,
  },
  regionButtonTextSelected: {
    color: '#fff',
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#00A67E',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  termsText: {
    fontSize: 14,
    color: '#666',
  },
  termsLink: {
    color: '#00A67E',
    textDecorationLine: 'underline',
  },
  signUpButton: {
    backgroundColor: '#00A67E',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 24,
  },
  signUpButtonDisabled: {
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  loginText: {
    color: '#666',
    fontSize: 14,
  },
  loginLink: {
    color: '#00A67E',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default SignUpScreen;