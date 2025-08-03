import React, { useState, useCallback } from 'react';
import { View, StyleSheet, RefreshControl } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PostCard from '../../Components/PostCard/PostCard';
import TopBar from '../../Components/TopBar/TopBar';
import { spacing, getSafeAreaPadding } from '../../utils/responsiveHelper';

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('Home');
  const [refreshing, setRefreshing] = useState(false);
  const safeArea = getSafeAreaPadding();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // Simulate refresh - you can add actual refresh logic here
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  // Reset to Home category when screen comes into focus
  useFocusEffect(
    useCallback(() => {
      setActiveCategory('Home');
    }, [])
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <TopBar 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory}
        profileImage="https://randomuser.me/api/portraits/men/1.jpg"
        onMessagePress={() => console.log('Message pressed')}
      />
      
      <View style={styles.contentContainer}>
        <PostCard 
          activeCategory={activeCategory}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor="#212529"
              colors={['#212529']}
            />
          }
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  contentContainer: {
    flex: 1,
    paddingBottom: getSafeAreaPadding().bottom + 60, // Account for tab bar
  },
});

export default Home;