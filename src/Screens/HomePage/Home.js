import React, { useState } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PostCard from '../../Components/PostCard/PostCard';
import TopBar from '../../Components/TopBar/TopBar';
import { colors, spacing, layout } from '../../utils/responsiveHelper';

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('Home');

  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle="dark-content" 
        backgroundColor={colors.white}
        translucent={false}
      />
      
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <TopBar 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory}
          profileImage="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
        />
        
        <View style={styles.contentContainer}>
          <PostCard activeCategory={activeCategory} />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.grouped,
  },
  
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  
  contentContainer: {
    flex: 1,
    backgroundColor: colors.background.grouped,
  },
});

export default Home;