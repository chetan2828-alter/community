import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./AuthStyles";
import { useMemberStatus } from "../../context/MemberStatusContext";
import { useAuth } from "../../context/AuthContext";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { colors, iconSize } from "../../utils/responsiveHelper";

const API_BASE = "http://192.168.1.116:8080/api/auth";

const Auth = () => {
  const { memberStatus } = useMemberStatus();
  const { login } = useAuth();
  const navigation = useNavigation();

  const [isLogin, setIsLogin] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsLogin(memberStatus === "existing");
  }, [memberStatus]);

  const resetForm = () => {
    setMobileNumber("");
    setPassword("");
    setConfirmPassword("");
    setFirstName("");
    setLastName("");
    setGender("");
    setError("");
    setTermsAccepted(false);
  };

  const validateForm = () => {
    if (!termsAccepted) {
      setError("Please accept the terms and conditions");
      return false;
    }

    if (!mobileNumber.trim() || !password.trim()) {
      setError("Please fill in all required fields");
      return false;
    }

    if (!isLogin) {
      if (!firstName.trim() || !lastName.trim() || !gender) {
        setError("Please fill in all required fields");
        return false;
      }
      
      if (password !== confirmPassword) {
        setError("Passwords do not match");
        return false;
      }
      
      if (password.length < 6) {
        setError("Password must be at least 6 characters");
        return false;
      }
    }

    return true;
  };

  const handleLogin = async () => {
    if (!validateForm()) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_BASE}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phoneNumber: mobileNumber,
          password,
        }),
      });

      if (!response.ok) {
        const errMessage = await response.text();
        setError(errMessage || "Login failed");
        return;
      }

      const data = await response.json();
      const token = data.token;
      const userId = data.userId;

      if (token && userId) {
        await AsyncStorage.setItem("token", token);
        await AsyncStorage.setItem("userId", userId.toString());
        login();
        resetForm();
        navigation.reset({
          index: 0,
          routes: [{ name: "TabNavigator" }],
        });
      } else {
        setError("Invalid response from server");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    if (!validateForm()) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_BASE}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          gender,
          firstName,
          lastName,
          phoneNumber: mobileNumber,
          password,
          role: "USER",
        }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        setError(errorMessage || "Registration failed");
        return;
      }

      const data = await response.json();
      const token = data.token;

      if (token) {
        await AsyncStorage.setItem("token", token);
        login();
        resetForm();
        navigation.reset({
          index: 0,
          routes: [{ name: "TabNavigator" }],
        });
      } else {
        setError("Registration successful but no token received");
      }
    } catch (error) {
      console.error("Registration error:", error);
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const CustomCheckbox = ({ value, onValueChange }) => {
    return (
      <TouchableOpacity
        style={[styles.checkbox, value && styles.checkboxChecked]}
        onPress={() => onValueChange(!value)}
        activeOpacity={0.7}
      >
        {value && (
          <Ionicons name="checkmark" size={iconSize.sm} color={colors.white} />
        )}
      </TouchableOpacity>
    );
  };

  const { t } = useTranslation();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <StatusBar 
        barStyle="dark-content" 
        backgroundColor={colors.background.grouped}
        translucent={false}
      />
      
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>
            <Text style={styles.logoBold}>MY</Text>
            <Text style={styles.logoLight}> Community</Text>
          </Text>

          <View style={styles.toggleContainer}>
            <TouchableOpacity
              style={[styles.toggle, isLogin && styles.activeToggle]}
              onPress={() => setIsLogin(true)}
              activeOpacity={0.8}
            >
              <Text style={[styles.toggleText, isLogin && styles.activeToggleText]}>
                {t("Login")}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.toggle, !isLogin && styles.activeToggle]}
              onPress={() => setIsLogin(false)}
              activeOpacity={0.8}
            >
              <Text style={[styles.toggleText, !isLogin && styles.activeToggleText]}>
                {t("Register")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Scrollable Form */}
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.formContainer}>
            {!isLogin && (
              <View style={styles.formSection}>
                <Text style={styles.sectionTitle}>Personal Information</Text>
                
                <Text style={styles.sectionTitle}>Select Gender</Text>
                <View style={styles.genderToggleContainer}>
                  <TouchableOpacity
                    style={[
                      styles.genderOption,
                      gender === "male" && styles.genderSelected,
                    ]}
                    onPress={() => setGender("male")}
                    activeOpacity={0.8}
                  >
                    <Text
                      style={
                        gender === "male"
                          ? styles.genderSelectedText
                          : styles.genderText
                      }
                    >
                      Male
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.genderOption,
                      gender === "female" && styles.genderSelected,
                    ]}
                    onPress={() => setGender("female")}
                    activeOpacity={0.8}
                  >
                    <Text
                      style={
                        gender === "female"
                          ? styles.genderSelectedText
                          : styles.genderText
                      }
                    >
                      Female
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.inputRow}>
                  <View style={styles.nameInputContainer}>
                    <TextInput
                      placeholder="First Name"
                      style={styles.nameInput}
                      value={firstName}
                      onChangeText={setFirstName}
                      autoCapitalize="words"
                      returnKeyType="next"
                    />
                  </View>
                  <View style={styles.nameInputContainer}>
                    <TextInput
                      placeholder="Last Name"
                      style={styles.nameInput}
                      value={lastName}
                      onChangeText={setLastName}
                      autoCapitalize="words"
                      returnKeyType="next"
                    />
                  </View>
                </View>
              </View>
            )}

            <View style={styles.formSection}>
              <Text style={styles.sectionTitle}>Account Details</Text>
              
              <View style={styles.inputContainer}>
                <Ionicons name="phone-portrait-outline" size={iconSize.md} color={colors.text.tertiary} />
                <TextInput
                  placeholder="Mobile number"
                  keyboardType="phone-pad"
                  style={styles.input}
                  value={mobileNumber}
                  onChangeText={setMobileNumber}
                  autoComplete="tel"
                  returnKeyType="next"
                />
              </View>

              <View style={styles.inputContainer}>
                <Ionicons name="lock-closed-outline" size={iconSize.md} color={colors.text.tertiary} />
                <TextInput
                  placeholder="Password"
                  secureTextEntry={!passwordVisible}
                  style={styles.input}
                  value={password}
                  onChangeText={setPassword}
                  autoComplete="password"
                  returnKeyType={isLogin ? "done" : "next"}
                />
                <TouchableOpacity
                  style={styles.eyeButton}
                  onPress={() => setPasswordVisible(!passwordVisible)}
                  activeOpacity={0.6}
                >
                  <Ionicons
                    name={passwordVisible ? "eye-outline" : "eye-off-outline"}
                    size={iconSize.md}
                    color={colors.text.tertiary}
                  />
                </TouchableOpacity>
              </View>

              {!isLogin && (
                <View style={styles.inputContainer}>
                  <Ionicons name="lock-closed-outline" size={iconSize.md} color={colors.text.tertiary} />
                  <TextInput
                    placeholder="Confirm password"
                    secureTextEntry={!confirmPasswordVisible}
                    style={styles.input}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    returnKeyType="done"
                  />
                  <TouchableOpacity
                    style={styles.eyeButton}
                    onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                    activeOpacity={0.6}
                  >
                    <Ionicons
                      name={confirmPasswordVisible ? "eye-outline" : "eye-off-outline"}
                      size={iconSize.md}
                      color={colors.text.tertiary}
                    />
                  </TouchableOpacity>
                </View>
              )}
            </View>

            {error ? <Text style={styles.errorText}>{error}</Text> : null}
            }

            <View style={styles.termsContainer}>
              <CustomCheckbox 
                value={termsAccepted} 
                onValueChange={setTermsAccepted} 
              />
              <Text style={styles.termsText}>
                I agree to the{" "}
                <Text
                  style={styles.termsLink}
                  onPress={() => navigation.navigate("PrivacyPolicy")}
                >
                  Privacy Policy
                </Text>{" "}
                and{" "}
                <Text
                  style={styles.termsLink}
                  onPress={() => navigation.navigate("TermsConditions")}
                >
                  Terms & Conditions
                </Text>
              </Text>
            </View>

            <TouchableOpacity
              style={[
                styles.actionButton, 
                (!termsAccepted || loading) && styles.disabledButton
              ]}
              onPress={isLogin ? handleLogin : handleRegister}
              disabled={!termsAccepted || loading}
              activeOpacity={0.8}
            >
              {loading ? (
                <ActivityIndicator color={colors.white} size="small" />
              ) : (
                <Text style={styles.actionButtonText}>
                  {isLogin ? "Sign In" : "Create Account"}
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Auth;