import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView
} from 'react-native';

const OTPVerificationScreen = ({ navigation }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(20);
  const inputRefs = useRef([]);

  // Countdown timer for resend
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleOtpChange = (text, index) => {
    // Ensure only numbers are accepted
    if (/^[0-9]$/.test(text) || text === '') {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      // Move to the next input box if filled
      if (text && index < 3) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleResendCode = () => {
    setTimer(20); // Reset timer
    // Logic to resend the OTP code can be implemented here
  };

  const handleVerify = () => {
    const otpCode = otp.join('');
    console.log("OTP Entered:", otpCode);
    // Add OTP verification logic here
    navigation.navigate('Home')
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      <Image
        source={require('../../assets/VerificationImg.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>OTP Verification</Text>
      <Text style={styles.subtitle}>We have sent the code verification</Text>

      <View style={styles.otpContainer}>
        {otp.map((value, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputRefs.current[index] = ref)}
            style={styles.otpInput}
            value={value}
            onChangeText={(text) => handleOtpChange(text, index)}
            keyboardType="numeric"
            maxLength={1}
          />
        ))}
      </View>

      {timer > 0 ? (
        <Text style={styles.resendText}>
          Re-send Authorization code in <Text style={styles.timerText}>{timer} Sec</Text>
        </Text>
      ) : (
        <TouchableOpacity onPress={handleResendCode}>
          <Text style={styles.resendButton}>Resend Code</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
        <Text style={styles.verifyButtonText}>Verify now</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  backButton: {
    alignSelf: 'flex-start',
    padding: 10
  },
  backText: {
    fontSize: 30,
    color: '#00A67E',
    fontWeight: 'bold'
  },
  image: {
    width: '100%',
    height: 280,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 32,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '70%',
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#088a6a',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 18,
  },
  resendText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  timerText: {
    color: '#00A67E',
  },
  resendButton: {
    fontSize: 14,
    color: '#088a6a',
    marginBottom: 20,
  },
  verifyButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#088a6a',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OTPVerificationScreen;
