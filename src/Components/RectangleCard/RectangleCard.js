import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Animated,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { colors } from '../../utils/responsiveHelper';
import styles from './RectangleCardStyles';

const RectangleCard = ({ activeCategory, setActiveCategory }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();
  const scrollX = new Animated.Value(0);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://192.168.1.116:8080/api/fed-categories/feedcategories');
        const data = await response.json();
        if (Array.isArray(data.categories)) {
          setCategories(data.categories);
          // Set first category as default if none selected
          if (!activeCategory && data.categories.length > 0) {
            setActiveCategory(data.categories[0]);
          }
        } else {
          console.error("Invalid format from API:", data);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const renderItem = ({ item, index }) => {
    const isActive = activeCategory === item;
    
    return (
      <TouchableOpacity
        style={[
          styles.rectangleCard,
          isActive ? styles.activeCard : styles.inactiveCard,
        ]}
        onPress={() => setActiveCategory(item)}
        activeOpacity={0.8}
      >
        <Text style={[
          styles.cardText,
          isActive ? styles.activeText : styles.inactiveText,
        ]}>
          {t(`categories.${item}`, item)}
        </Text>
        {isActive && <View style={styles.activeIndicator} />}
      </TouchableOpacity>
    );
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="small" color={colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item}-${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        decelerationRate="fast"
        snapToInterval={120}
        snapToAlignment="start"
      />
    </View>
  );
};

export default RectangleCard;