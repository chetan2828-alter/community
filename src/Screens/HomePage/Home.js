import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PostCard from '../../Components/PostCard/PostCard';
import TopBar from '../../Components/TopBar/TopBar';
import { colors, spacing } from '../../utils/responsiveHelper';

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('Home');

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <TopBar 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory}
      />
      
      <View style={styles.contentContainer}>
        <PostCard activeCategory={activeCategory} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[50],
  },
  contentContainer: {
    flex: 1,
  },
});

export default Home;