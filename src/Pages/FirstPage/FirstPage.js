import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  ActivityIndicator,
  StatusBar,
  Alert 
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import styles from './FirstPageStyles';
import { useTranslation } from 'react-i18next';
import { colors, iconSize } from '../../utils/responsiveHelper';

const API_URL = "http://192.168.1.116:8080/api/communities/names";

const FirstPage = () => {
  const [selectedSamaj, setSelectedSamaj] = useState('');
  const [samajList, setSamajList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const fetchSamajNames = async () => {
      try {
        const response = await fetch(API_URL);
        const json = await response.json();

        if (response.ok && json.communities) {
          setSamajList(json.communities);
        } else {
          console.error("Invalid response format:", json);
          // Fallback to default communities
          setSamajList(['Halari Visa Samaj', 'Patel Samaj', 'Gujarati Samaj']);
        }
      } catch (error) {
        console.error("Error fetching communities:", error);
        // Fallback to default communities
        setSamajList(['Halari Visa Samaj', 'Patel Samaj', 'Gujarati Samaj']);
      } finally {
        setLoading(false);
      }
    };

    fetchSamajNames();
  }, []);

  const handleNavigate = () => {
    if (selectedSamaj) {
      setSubmitting(true);
      setTimeout(() => {
        navigation.navigate('SecondPage', { samaj: selectedSamaj });
        setSubmitting(false);
      }, 500);
    } else {
      Alert.alert('Selection Required', 'Please select your Samaj to continue.');
    }
  };

  const changeLanguage = () => {
    const newLang = i18n.language === "en" ? "gj" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background.primary} />
      
      <View style={styles.content}>
        <Text style={styles.title}>{t('samajname')}</Text>
        <Text style={styles.subtitle}>Select your community to get started</Text>

        <View style={styles.pickerSection}>
          <View style={styles.pickerContainer}>
            <Ionicons 
              name="people-outline" 
              size={iconSize.md} 
              color={colors.primary} 
              style={styles.icon} 
            />

            {loading ? (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="small" color={colors.primary} />
                <Text style={styles.loadingText}>Loading communities...</Text>
              </View>
            ) : (
              <Picker
                selectedValue={selectedSamaj}
                onValueChange={(itemValue) => setSelectedSamaj(itemValue)}
                style={styles.picker}
              >
                <Picker.Item 
                  label={t("samajDropdown.selectSamaj")} 
                  value="" 
                  color={colors.text.tertiary}
                />
                {samajList.map((name, index) => (
                  <Picker.Item 
                    key={index} 
                    label={name} 
                    value={name}
                    color={colors.text.primary}
                  />
                ))}
              </Picker>
            )}
          </View>
        </View>

        <TouchableOpacity 
          style={[
            styles.button,
            (!selectedSamaj || submitting) && styles.buttonDisabled
          ]} 
          onPress={handleNavigate}
          disabled={!selectedSamaj || submitting}
          activeOpacity={0.8}
        >
          {submitting ? (
            <ActivityIndicator size="small" color={colors.white} />
          ) : (
            <Text style={styles.buttonText}>{t('continue')}</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.changeLanguageButton} 
          onPress={changeLanguage}
          activeOpacity={0.8}
        >
          <Ionicons 
            name="language-outline" 
            size={iconSize.sm} 
            color={colors.primary} 
            style={styles.languageIcon}
          />
          <Text style={styles.changeLanguageText}>{t('changeLanguage')}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FirstPage;