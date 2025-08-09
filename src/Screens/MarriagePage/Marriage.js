import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Keyboard,
  StatusBar,
  ActivityIndicator,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { colors } from "../../utils/responsiveHelper";
import styles from "./MarriageStyles";

const Marriage = () => {
  const [ageFrom, setAgeFrom] = useState("");
  const [ageTo, setAgeTo] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    setIsFormValid(
      gender !== "" &&
      status !== "" &&
      ageFrom !== "" &&
      ageTo !== "" &&
      Number(ageFrom) <= Number(ageTo) &&
      Number(ageFrom) >= 18 &&
      Number(ageTo) <= 80
    );
  }, [ageFrom, ageTo, gender, status]);

  useFocusEffect(
    useCallback(() => {
      setAgeFrom("");
      setAgeTo("");
      setGender("");
      setStatus("");
      setLoading(false);
    }, [])
  );

  const fetchMatches = async () => {
    if (!isFormValid) return;

    Keyboard.dismiss();
    setLoading(true);

    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) {
        Alert.alert("Authentication Error", "Please login first");
        return;
      }

      const response = await fetch(
        `http://192.168.1.116:8080/api/users/filter?${new URLSearchParams({
          gender: gender.charAt(0).toUpperCase() + gender.slice(1),
          maritalStatus: status.charAt(0).toUpperCase() + status.slice(1),
          ageFrom,
          ageTo
        }).toString()}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch matches");
      }

      const data = await response.json();
      navigation.navigate("SearchResults", { matches: data });
    } catch (error) {
      Alert.alert("Error", error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background.primary} />
      
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Find Your Match</Text>
          <Text style={styles.subtitle}>Enter your preferences to find compatible matches</Text>
        </View>

        {/* Gender Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>I'm looking for *</Text>
          <View style={styles.genderRow}>
            {["male", "female"].map((option) => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.genderButton,
                  gender === option && styles.genderButtonSelected
                ]}
                onPress={() => setGender(option)}
                activeOpacity={0.8}
              >
                <MaterialCommunityIcons
                  name={`gender-${option}`}
                  size={24}
                  color={gender === option ? colors.white : colors.text.primary}
                />
                <Text
                  style={[
                    styles.genderText,
                    gender === option && styles.genderTextSelected
                  ]}
                >
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Age Range */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Age Range *</Text>
          <View style={styles.ageRow}>
            <View style={styles.ageInputContainer}>
              <TextInput
                style={styles.ageInput}
                placeholder="From"
                placeholderTextColor={colors.text.tertiary}
                value={ageFrom}
                onChangeText={setAgeFrom}
                keyboardType="numeric"
                maxLength={2}
              />
            </View>
            <Text style={styles.ageSeparator}>to</Text>
            <View style={styles.ageInputContainer}>
              <TextInput
                style={styles.ageInput}
                placeholder="To"
                placeholderTextColor={colors.text.tertiary}
                value={ageTo}
                onChangeText={setAgeTo}
                keyboardType="numeric"
                maxLength={2}
              />
            </View>
          </View>
          <Text style={styles.helperText}>Age range: 18-80 years</Text>
        </View>

        {/* Marital Status */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Marital Status *</Text>
          <View style={styles.radioGroup}>
            {[
              { value: "single", label: "Single" },
              { value: "widowed", label: "Widowed" },
              { value: "divorcee", label: "Divorced" }
            ].map((option) => (
              <TouchableOpacity
                key={option.value}
                style={[
                  styles.radioOption,
                  status === option.value && styles.radioOptionSelected
                ]}
                onPress={() => setStatus(option.value)}
                activeOpacity={0.8}
              >
                <RadioButton 
                  value={option.value}
                  status={status === option.value ? 'checked' : 'unchecked'}
                  color={colors.primary}
                  uncheckedColor={colors.text.tertiary}
                />
                <Text style={[
                  styles.radioText,
                  status === option.value && styles.radioTextSelected
                ]}>
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Search Button */}
        <TouchableOpacity
          style={[
            styles.searchButton,
            (!isFormValid || loading) && styles.searchButtonDisabled
          ]}
          onPress={fetchMatches}
          disabled={!isFormValid || loading}
          activeOpacity={0.9}
        >
          {loading ? (
            <ActivityIndicator size="small" color={colors.white} />
          ) : (
            <Text style={styles.searchButtonText}>Find Matches</Text>
          )}
        </TouchableOpacity>
        
        {!isFormValid && ageFrom && ageTo && (
          <Text style={styles.validationText}>
            Please ensure all fields are filled and age range is valid (18-80)
          </Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Marriage;