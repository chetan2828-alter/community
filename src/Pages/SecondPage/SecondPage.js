import React, { useState } from "react";
import { View, Text, TouchableOpacity, StatusBar, ActivityIndicator } from "react-native";
import { RadioButton } from "react-native-paper";
import styles from "./SecondPageStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useMemberStatus } from "../../context/MemberStatusContext";
import { useTranslation } from 'react-i18next';
import { colors } from "../../utils/responsiveHelper";

const SecondPage = ({ navigation }) => {
  const [selectedMemberStatus, setSelectedMemberStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const { setMemberStatus } = useMemberStatus();

  const handleSubmit = () => {
    if (selectedMemberStatus) {
      setSubmitting(true);
      setMemberStatus(selectedMemberStatus);
      
      setTimeout(() => {
        navigation.navigate("Auth");
        setSubmitting(false);
      }, 500);
    } else {
      alert("Please select a member status before proceeding.");
    }
  };

  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage('gj');
    } else {
      i18n.changeLanguage('en');
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background.primary} />
      
      <View style={styles.content}>
        <Text style={styles.title}>{t('MemberStatus')}</Text>
        <Text style={styles.subtitle}>{t('existingOrNewMember')}</Text>
        
        <View style={styles.radioGroup}>
          {/* Existing member option */}
          <TouchableOpacity
            style={[
              styles.radioButtonContainer,
              selectedMemberStatus === "existing" && styles.radioButtonSelected
            ]}
            onPress={() => setSelectedMemberStatus("existing")}
            activeOpacity={0.8}
          >
            <View pointerEvents="none">
              <RadioButton
                value="existing"
                status={selectedMemberStatus === "existing" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.text.tertiary}
              />
            </View>
            <Text style={[
              styles.radioButtonText,
              selectedMemberStatus === "existing" && styles.radioButtonTextSelected
            ]}>
              {t('Already a Member')}
            </Text>
          </TouchableOpacity>

          {/* New member option */}
          <TouchableOpacity
            style={[
              styles.radioButtonContainer,
              selectedMemberStatus === "new" && styles.radioButtonSelected
            ]}
            onPress={() => setSelectedMemberStatus("new")}
            activeOpacity={0.8}
          >
            <View pointerEvents="none">
              <RadioButton
                value="new"
                status={selectedMemberStatus === "new" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.text.tertiary}
              />
            </View>
            <Text style={[
              styles.radioButtonText,
              selectedMemberStatus === "new" && styles.radioButtonTextSelected
            ]}>
              {t('New Member')}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Submit Button */}
        <TouchableOpacity 
          style={[
            styles.submitButton,
            (!selectedMemberStatus || submitting) && styles.submitButtonDisabled
          ]} 
          onPress={handleSubmit}
          disabled={!selectedMemberStatus || submitting}
          activeOpacity={0.8}
        >
          {submitting ? (
            <ActivityIndicator size="small" color={colors.white} />
          ) : (
            <Text style={styles.submitButtonText}>{t('submit')}</Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SecondPage;