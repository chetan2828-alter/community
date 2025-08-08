import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  ActivityIndicator,
  Platform,
  StatusBar,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import { Ionicons, Feather } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  colors, spacing, borderRadius, typography, iconSize, 
  shadows, layout, getSafeAreaTop 
} from '../../utils/responsiveHelper';
import styles from './ExploreStyles';

const Explore = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [caption, setCaption] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState('');
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [posting, setPosting] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('http://192.168.1.116:8080/api/fed-categories/feedcategories');
      const data = await response.json();
      const formatted = data.categories.map((cat) => ({
        label: cat,
        value: cat,
      }));
      setCategories(formatted);
    } catch (error) {
      console.error('Error fetching categories:', error);
    } finally {
      setLoadingCategories(false);
    }
  };

  const handleImagePick = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Required', 'Please grant permission to access your photo library.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 0.8,
      aspect: [1, 1],
    });

    if (!result.canceled) {
      const compressedImages = await Promise.all(
        result.assets.map(async (image) => {
          const manipulatedImage = await ImageManipulator.manipulateAsync(
            image.uri,
            [{ resize: { width: 1080 } }],
            { compress: 0.8, format: ImageManipulator.SaveFormat.JPEG }
          );
          return manipulatedImage;
        })
      );
      setSelectedImages(compressedImages);
    }
  };

  const removeImage = (index) => {
    setSelectedImages(prev => prev.filter((_, i) => i !== index));
  };

  const handlePost = async () => {
    if (!caption.trim()) {
      Alert.alert('Caption Required', 'Please add a caption to your post.');
      return;
    }
    
    if (!category) {
      Alert.alert('Category Required', 'Please select a category for your post.');
      return;
    }

    setPosting(true);

    try {
      const token = await AsyncStorage.getItem('token');
      const formData = new FormData();
      
      selectedImages.forEach((image, index) => {
        formData.append('images', {
          uri: image.uri,
          name: `image_${index}.jpg`,
          type: 'image/jpeg',
        });
      });
      
      formData.append('caption', caption);
      formData.append('category', category);
      formData.append('tags', tags);

      const response = await fetch('http://192.168.1.116:8080/api/posts', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      });

      if (response.ok) {
        Alert.alert('Success', 'Post created successfully!');
        // Reset form
        setSelectedImages([]);
        setCaption('');
        setCategory('');
        setTags('');
      } else {
        Alert.alert('Error', 'Failed to create post. Please try again.');
      }
    } catch (error) {
      console.error('Error posting:', error);
      Alert.alert('Error', 'Network error. Please check your connection.');
    } finally {
      setPosting(false);
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      
      <KeyboardAvoidingView 
        style={{ flex: 1 }} 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Create Post</Text>
          <TouchableOpacity 
            style={[styles.postButton, (!caption.trim() || !category) && styles.postButtonDisabled]}
            onPress={handlePost}
            disabled={!caption.trim() || !category || posting}
          >
            {posting ? (
              <ActivityIndicator size="small" color={colors.white} />
            ) : (
              <Text style={styles.postButtonText}>Share</Text>
            )}
          </TouchableOpacity>
        </View>

        <ScrollView 
          style={styles.scrollContainer}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Image Picker Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Photos</Text>
            
            {selectedImages.length > 0 ? (
              <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.imageScrollContainer}
              >
                {selectedImages.map((image, index) => (
                  <View key={index} style={styles.imageContainer}>
                    <Image source={{ uri: image.uri }} style={styles.selectedImage} />
                    <TouchableOpacity 
                      style={styles.removeImageButton}
                      onPress={() => removeImage(index)}
                    >
                      <Ionicons name="close" size={iconSize.sm} color={colors.white} />
                    </TouchableOpacity>
                  </View>
                ))}
                
                {selectedImages.length < 10 && (
                  <TouchableOpacity style={styles.addMoreButton} onPress={handleImagePick}>
                    <Ionicons name="add" size={iconSize.lg} color={colors.text.tertiary} />
                  </TouchableOpacity>
                )}
              </ScrollView>
            ) : (
              <TouchableOpacity style={styles.imagePicker} onPress={handleImagePick}>
                <Ionicons name="camera-outline" size={iconSize.xxl} color={colors.text.tertiary} />
                <Text style={styles.imagePickerText}>Add Photos</Text>
                <Text style={styles.imagePickerSubtext}>Share up to 10 photos</Text>
              </TouchableOpacity>
            )}
          </View>

          {/* Caption Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Caption</Text>
            <TextInput
              style={styles.captionInput}
              placeholder="What's on your mind?"
              placeholderTextColor={colors.text.tertiary}
              value={caption}
              onChangeText={setCaption}
              multiline
              maxLength={2200}
              textAlignVertical="top"
            />
            <Text style={styles.characterCount}>
              {caption.length}/2200
            </Text>
          </View>

          {/* Tags Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Tags</Text>
            <TextInput
              style={styles.input}
              placeholder="Add tags (comma separated)"
              placeholderTextColor={colors.text.tertiary}
              value={tags}
              onChangeText={setTags}
              autoCapitalize="none"
            />
          </View>

          {/* Category Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Category *</Text>
            {loadingCategories ? (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="small" color={colors.primary} />
              </View>
            ) : (
              <View style={styles.pickerContainer}>
                <RNPickerSelect
                  onValueChange={(value) => setCategory(value)}
                  items={categories}
                  placeholder={{ 
                    label: 'Select a category...', 
                    value: null,
                    color: colors.text.tertiary 
                  }}
                  style={{
                    inputIOS: styles.pickerInput,
                    inputAndroid: styles.pickerInput,
                    placeholder: { color: colors.text.tertiary },
                  }}
                  value={category}
                  useNativeAndroidPickerStyle={false}
                  Icon={() => (
                    <Ionicons 
                      name="chevron-down" 
                      size={iconSize.md} 
                      color={colors.text.tertiary} 
                      style={styles.pickerIcon}
                    />
                  )}
                />
              </View>
            )}
          </View>

          {/* Privacy Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Privacy</Text>
            <View style={styles.privacyOption}>
              <View style={styles.privacyInfo}>
                <Ionicons name="globe-outline" size={iconSize.md} color={colors.text.secondary} />
                <View style={styles.privacyTextContainer}>
                  <Text style={styles.privacyTitle}>Public</Text>
                  <Text style={styles.privacySubtitle}>Anyone can see this post</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={iconSize.sm} color={colors.text.tertiary} />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Explore;