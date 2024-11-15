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

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [countryCode, setCountryCode] = useState('IN');
  const [callingCode, setCallingCode] = useState('91');
  const [showCountryPicker, setShowCountryPicker] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const onSelectCountry = (country) => {
    setCountryCode(country.cca2);
    setCallingCode(country.callingCode[0]);
  };

  const handleSignUp = () => {
    console.log('Sign up:', {
      email,
      phone: `+${callingCode}${phone}`,
      password,
      agreeToTerms
    });
  navigation.navigate('SignUpVerification')
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
            {/* Previous code remains the same until phone input container */}



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
                  <Text style={styles.label}>Enter your email Id</Text>
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
                  <Text style={styles.label}>Enter your phone number</Text>
                  <View style={styles.phoneInputContainer}>
                    <TouchableOpacity
                      style={styles.countryPickerButton}
                      onPress={() => setShowCountryPicker(true)}
                    >
                      <CountryPicker
                        withFilter
                        withFlag
                        withCallingCode
                        withAlphaFilter
                        withCallingCodeButton
                        countryCode={countryCode}
                        visible={showCountryPicker}
                        onSelect={onSelectCountry}
                        onClose={() => setShowCountryPicker(false)}
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
                      returnKeyType="done"
                    />
                  </View>
                </View>

                {/* New Password Input Container */}
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Enter your password</Text>
                  <View style={styles.passwordContainer}>
                    <TextInput
                      style={styles.passwordInput}
                      value={password}
                      onChangeText={setPassword}
                      placeholder="Enter your password"
                      placeholderTextColor="#333"
                      secureTextEntry={!showPassword}
                      returnKeyType="done"
                    />
                    <TouchableOpacity
                      style={styles.eyeIcon}
                      onPress={togglePasswordVisibility}
                    >
                      <Feather
                        name={showPassword ? "eye" : "eye-off"}
                        size={20}
                        color="#088a6a"
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Rest of the code remains the same */}
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
                    !agreeToTerms && styles.signUpButtonDisabled
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
  // ... Previous styles remain the same ...

  // Add these new styles
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  passwordInput: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 16,
  },
  eyeIcon: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

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
    paddingHorizontal: 24,
  },
  image: {
    width: '100%',
    height: 250,
    marginBottom: 5
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 32,
    textAlign: 'center'
  },
  form: {
    flex: 1,
  },
  inputContainer: {
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
  },
  countryPickerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 12,
    borderRightWidth: 1,
    borderColor: '#333',
  },
  phoneInput: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 16,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#088a6a',
    borderRadius: 4,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  termsText: {
    fontSize: 14,
    flex: 1,
  },
  termsLink: {
    color: '#088a6a',
  },
  signUpButton: {
    height: 48,
    backgroundColor: '#088a6a',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  signUpButtonDisabled: {
    backgroundColor: '#cccc',
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: '#666',
  },
  loginLink: {
    color: '#088a6a',
    fontWeight: '500',
  },
});

export default SignUpScreen;