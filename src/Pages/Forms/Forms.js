import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { colors } from '../../utils/responsiveHelper';
import styles from './FormsStyles';

const Forms = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    maritalStatus: '',
    dob: '',
    height: '',
    weight: '',
    bloodGroup: '',
    fatherName: '',
    motherName: '',
    address: '',
    emergencyContact: '',
  });

  const steps = [
    {
      title: 'Personal Details',
      fields: ['firstName', 'lastName', 'gender', 'maritalStatus', 'dob'],
      required: ['firstName', 'lastName', 'gender', 'dob']
    },
    {
      title: 'Physical Attributes', 
      fields: ['height', 'weight', 'bloodGroup'],
      required: ['height', 'weight', 'bloodGroup']
    },
    {
      title: 'Family Details',
      fields: ['fatherName', 'address', 'emergencyContact'],
      required: ['fatherName', 'address', 'emergencyContact']
    }
  ];

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateStep = (stepIndex) => {
    const step = steps[stepIndex];
    const missingFields = step.required.filter(field => !formData[field].trim());
    
    if (missingFields.length > 0) {
      Alert.alert('Required Fields', `Please fill in: ${missingFields.join(', ')}`);
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;

    setLoading(true);

    try {
      const mobile = await AsyncStorage.getItem('tempMobileNumber');
      const password = await AsyncStorage.getItem('tempPassword');

      if (!mobile || !password) {
        Alert.alert('Error', 'Missing mobile number or password.');
        return;
      }

      const finalData = {
        phoneNumber: mobile,
        password,
        role: 'USER',
        ...formData,
      };

      const response = await fetch('http://192.168.1.116:8080/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(finalData),
      });

      if (response.ok) {
        await AsyncStorage.removeItem('tempMobileNumber');
        await AsyncStorage.removeItem('tempPassword');
        
        Alert.alert(
          'Success',
          'Registration completed successfully!',
          [{ text: 'OK', onPress: () => navigation.navigate('TabNavigator') }]
        );
      } else {
        const message = await response.text();
        Alert.alert('Error', message || 'Registration failed');
      }
    } catch (error) {
      Alert.alert('Error', 'Network error occurred');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const renderPersonalDetails = () => (
    <View style={styles.stepContainer}>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Name *</Text>
        <View style={styles.nameRow}>
          <View style={styles.nameInputContainer}>
            <TextInput
              style={styles.nameInput}
              placeholder="First Name"
              placeholderTextColor={colors.text.tertiary}
              value={formData.firstName}
              onChangeText={(text) => updateField('firstName', text)}
              autoCapitalize="words"
              returnKeyType="next"
            />
          </View>
          <View style={styles.nameInputContainer}>
            <TextInput
              style={styles.nameInput}
              placeholder="Last Name"
              placeholderTextColor={colors.text.tertiary}
              value={formData.lastName}
              onChangeText={(text) => updateField('lastName', text)}
              autoCapitalize="words"
              returnKeyType="next"
            />
          </View>
        </View>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Gender *</Text>
        <View style={styles.genderContainer}>
          {['Male', 'Female'].map((option) => (
            <TouchableOpacity
              key={option}
              style={[
                styles.genderOption,
                formData.gender === option && styles.genderOptionSelected
              ]}
              onPress={() => updateField('gender', option)}
              activeOpacity={0.8}
            >
              <Text style={[
                styles.genderText,
                formData.gender === option && styles.genderTextSelected
              ]}>
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Marital Status</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={formData.maritalStatus}
            onValueChange={(value) => updateField('maritalStatus', value)}
            style={styles.picker}
          >
            <Picker.Item label="Select Status" value="" />
            <Picker.Item label="Single" value="Single" />
            <Picker.Item label="Married" value="Married" />
            <Picker.Item label="Divorced" value="Divorced" />
            <Picker.Item label="Widowed" value="Widowed" />
          </Picker>
        </View>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Date of Birth *</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="DD/MM/YYYY"
            placeholderTextColor={colors.text.tertiary}
            value={formData.dob}
            onChangeText={(text) => updateField('dob', text)}
            keyboardType="numeric"
          />
        </View>
      </View>
    </View>
  );

  const renderPhysicalAttributes = () => (
    <View style={styles.stepContainer}>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Height *</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="e.g., 5.8 ft"
            placeholderTextColor={colors.text.tertiary}
            value={formData.height}
            onChangeText={(text) => updateField('height', text)}
            keyboardType="numeric"
          />
        </View>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Weight *</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="e.g., 70 kg"
            placeholderTextColor={colors.text.tertiary}
            value={formData.weight}
            onChangeText={(text) => updateField('weight', text)}
            keyboardType="numeric"
          />
        </View>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Blood Group *</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={formData.bloodGroup}
            onValueChange={(value) => updateField('bloodGroup', value)}
            style={styles.picker}
          >
            <Picker.Item label="Select Blood Group" value="" />
            <Picker.Item label="A+" value="A+" />
            <Picker.Item label="A-" value="A-" />
            <Picker.Item label="B+" value="B+" />
            <Picker.Item label="B-" value="B-" />
            <Picker.Item label="AB+" value="AB+" />
            <Picker.Item label="AB-" value="AB-" />
            <Picker.Item label="O+" value="O+" />
            <Picker.Item label="O-" value="O-" />
          </Picker>
        </View>
      </View>
    </View>
  );

  const renderFamilyDetails = () => (
    <View style={styles.stepContainer}>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Father's Name *</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Father's full name"
            placeholderTextColor={colors.text.tertiary}
            value={formData.fatherName}
            onChangeText={(text) => updateField('fatherName', text)}
            autoCapitalize="words"
          />
        </View>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Mother's Name</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Mother's full name"
            placeholderTextColor={colors.text.tertiary}
            value={formData.motherName}
            onChangeText={(text) => updateField('motherName', text)}
            autoCapitalize="words"
          />
        </View>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Address *</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Full address"
            placeholderTextColor={colors.text.tertiary}
            value={formData.address}
            onChangeText={(text) => updateField('address', text)}
            multiline
            numberOfLines={3}
            textAlignVertical="top"
          />
        </View>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Emergency Contact *</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Emergency contact number"
            placeholderTextColor={colors.text.tertiary}
            value={formData.emergencyContact}
            onChangeText={(text) => updateField('emergencyContact', text)}
            keyboardType="phone-pad"
          />
        </View>
      </View>
    </View>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 0: return renderPersonalDetails();
      case 1: return renderPhysicalAttributes();
      case 2: return renderFamilyDetails();
      default: return null;
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background.primary} />
      
      <KeyboardAvoidingView 
        style={{ flex: 1 }} 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Complete Profile</Text>
          <Text style={styles.stepIndicator}>
            Step {currentStep + 1} of {steps.length}
          </Text>
        </View>

        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={styles.progressTrack}>
            <View 
              style={[
                styles.progressFill,
                { width: `${((currentStep + 1) / steps.length) * 100}%` }
              ]} 
            />
          </View>
        </View>

        {/* Step Title */}
        <View style={styles.stepHeader}>
          <Text style={styles.stepTitle}>{steps[currentStep].title}</Text>
          <Text style={styles.stepSubtitle}>
            Please fill in the required information
          </Text>
        </View>

        {/* Form Content */}
        <ScrollView 
          style={styles.scrollContainer}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {renderStepContent()}
        </ScrollView>

        {/* Navigation Buttons */}
        <View style={styles.navigationContainer}>
          {currentStep > 0 && (
            <TouchableOpacity 
              style={styles.secondaryButton} 
              onPress={handlePrevious}
              activeOpacity={0.8}
            >
              <Text style={styles.secondaryButtonText}>Previous</Text>
            </TouchableOpacity>
          )}
          
          <TouchableOpacity
            style={[
              styles.primaryButton,
              currentStep === 0 && styles.primaryButtonFull
            ]}
            onPress={currentStep === steps.length - 1 ? handleSubmit : handleNext}
            disabled={loading}
            activeOpacity={0.8}
          >
            {loading ? (
              <ActivityIndicator size="small" color={colors.white} />
            ) : (
              <Text style={styles.primaryButtonText}>
                {currentStep === steps.length - 1 ? 'Complete' : 'Next'}
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Forms;