import React, { useEffect, useRef, useState } from 'react';
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  FlatList, 
  StyleSheet, 
  Dimensions, 
  Animated 
} from 'react-native';
import { Linking } from 'react-native';
import { 
  widthPercentageToDP as wp, 
  heightPercentageToDP as hp 
} from 'react-native-responsive-screen';
import { fontSize, isSmallDevice } from '../../utils/responsiveHelper';

const { width: screenWidth } = Dimensions.get('window'); // Get screen width for responsive design

const Banner = () => {
  const [banners, setBanners] = useState([]);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);
  let currentIndex = 0;

  // Fetch banners from API
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch('http://192.168.1.116:3000/banner');
        const data = await response.json();
        if (Array.isArray(data)) {
          setBanners(data);
        }
      } catch (error) {
        console.error('Error fetching banners:', error);
      }
    };
    fetchBanners();
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (flatListRef.current && banners.length > 1) {
        currentIndex = (currentIndex + 1) % banners.length;
        flatListRef.current.scrollToIndex({ index: currentIndex, animated: true });
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [banners]);

  // Handle Banner Press
  const handleBannerPress = (url) => {
    if (url) {
      Linking.openURL(url).catch((err) => console.error('Error opening URL:', err));
    }
  };

  return (
    <View style={styles.container}>
      {banners.length > 0 ? (
        <FlatList
          ref={flatListRef}
          data={banners}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          // renderItem={({ item }) => (
          //   <TouchableOpacity style={styles.bannerContainer} onPress={() => handleBannerPress(item.websiteUrl)}>
          //     <Image source={{ uri: item.imageUrl }} style={styles.bannerImage} resizeMode="cover" />
          //     <View style={styles.textOverlay}>
          //       <Text style={styles.headline}>{item.headline}</Text>
          //     </View>
          //   </TouchableOpacity>
          // )}

          renderItem={({ item, index }) => (
            <TouchableOpacity style={styles.bannerContainer} onPress={() => handleBannerPress(item.websiteUrl)}>
              <Image source={{ uri: item.imageUrl }} style={styles.bannerImage} resizeMode="cover" />
              <View style={styles.textOverlay}>
                <Text style={styles.headline}>{item.headline}</Text>
              </View>
              {/* Carousel Counter */}
              <View style={styles.carouselCounter}>
                <Text style={styles.counterText}>{index + 1}/{banners.length}</Text>
              </View>
            </TouchableOpacity>
          )}
          
        />
      ) : (
        <Text style={styles.noDataText}>No banners available</Text>
      )}
    </View>
  );
};

// // const styles = StyleSheet.create({
// //   container: {
// //     marginVertical: 10,
// //   },
// //   bannerContainer: {
// //     width: screenWidth - 30, // Adjust width to fit screen with padding
// //     height: 200,
// //     borderRadius: 10,
// //     overflow: 'hidden',
// //     marginHorizontal: 15,
// //   },
// //   bannerImage: {
// //     width: '100%',
// //     height: '100%',
// //   },
// //   textOverlay: {
// //     position: 'absolute',
// //     bottom: 0,
// //     left: 0,
// //     right: 0,
// //     backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark overlay for text
// //     padding: 10,
// //   },
// //   headline: {
// //     color: '#FFF',
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //   },
// //   noDataText: {
// //     textAlign: 'center',
// //     color: '#888',
// //     fontSize: 16,
// //     marginTop: 20,
// //   },
// // });  // creatign an styling liek an namo app 

const styles = StyleSheet.create({
  container: {
    marginVertical: hp('2%'),
    alignItems: 'center', // Centering the banner
  },
  bannerContainer: {
    width: screenWidth - wp('10%'),
    height: hp(isSmallDevice ? '28%' : '30%'),
    borderRadius: wp('4%'),
    backgroundColor: '#FFF', // White background like a card
    shadowColor: '#000', // Shadow effect for elevation
    shadowOffset: { width: 0, height: hp('0.3%') },
    shadowOpacity: 0.2,
    shadowRadius: wp('1%'),
    elevation: 5, // For Android shadow
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerImage: {
    width: '92%',
    height: '92%',
    borderRadius: wp('2.5%'),
  },
  textOverlay: {
    position: 'absolute',
    bottom: wp('2.5%'),
    left: wp('2.5%'),
    right: wp('2.5%'),
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for text
    paddingVertical: hp('0.6%'),
    borderRadius: wp('1.2%'),
  },
  headline: {
    color: '#FFF',
    fontSize: fontSize(18),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  carouselCounter: {
    position: 'absolute',
    top: wp('2.5%'),
    right: wp('4%'),
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: wp('2%'),
    paddingVertical: hp('0.4%'),
    borderRadius: wp('4%'),
  },
  counterText: {
    color: '#FFF',
    fontSize: fontSize(14),
    fontWeight: 'bold',
  },
  noDataText: {
    textAlign: 'center',
    color: '#888',
    fontSize: fontSize(16),
    marginTop: hp('2.5%'),
  },
});


export default Banner;


///  implementing more desiginig with grok 

// import React, { useEffect, useRef, useState } from 'react';
// import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, Dimensions, Animated } from 'react-native';
// import { Linking } from 'react-native';

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// const Banner = () => {
//   const [banners, setBanners] = useState([]);
//   const scrollX = useRef(new Animated.Value(0)).current;
//   const flatListRef = useRef(null);
//   let currentIndex = 0;

//   // Fetch banners from API
//   useEffect(() => {
//     const fetchBanners = async () => {
//       try {
//         const response = await fetch('http://192.168.1.116:3000/banner');
//         const data = await response.json();
//         if (Array.isArray(data)) {
//           setBanners(data);
//         }
//       } catch (error) {
//         console.error('Error fetching banners:', error);
//       }
//     };
//     fetchBanners();
//   }, []);

//   // Auto-scroll with animation
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (flatListRef.current && banners.length > 1) {
//         currentIndex = (currentIndex + 1) % banners.length;
//         flatListRef.current.scrollToIndex({ index: currentIndex, animated: true });
//       }
//     }, 6000); // Reduced to 6s for more dynamic feel

//     return () => clearInterval(interval);
//   }, [banners]);

//   // Handle Banner Press
//   const handleBannerPress = (url) => {
//     if (url) {
//       Linking.openURL(url).catch((err) => console.error('Error opening URL:', err));
//     }
//   };

//   // Render each banner
//   const renderBanner = ({ item, index }) => {
//     const inputRange = [
//       (index - 1) * (screenWidth - 20),
//       index * (screenWidth - 20),
//       (index + 1) * (screenWidth - 20),
//     ];
//     const scale = scrollX.interpolate({
//       inputRange,
//       outputRange: [0.9, 1, 0.9],
//       extrapolate: 'clamp',
//     });

//     return (
//       <TouchableOpacity
//         style={styles.bannerContainer}
//         onPress={() => handleBannerPress(item.websiteUrl)}
//         activeOpacity={0.9}
//       >
//         <Animated.View style={[styles.imageWrapper, { transform: [{ scale }] }]}>
//           <Image
//             source={{ uri: item.imageUrl }}
//             style={styles.bannerImage}
//             resizeMode="contain" // Full image visibility
//           />
//           <View style={styles.textOverlay}>
//             <Text style={styles.headline}>{item.headline}</Text>
//           </View>
//           <View style={styles.carouselCounter}>
//             <Text style={styles.counterText}>{index + 1}/{banners.length}</Text>
//           </View>
//         </Animated.View>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       {banners.length > 0 ? (
//         <FlatList
//           ref={flatListRef}
//           data={banners}
//           keyExtractor={(item, index) => index.toString()}
//           horizontal
//           pagingEnabled
//           showsHorizontalScrollIndicator={false}
//           renderItem={renderBanner}
//           onScroll={Animated.event(
//             [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//             { useNativeDriver: true }
//           )}
//           scrollEventThrottle={16}
//         />
//       ) : (
//         <Text style={styles.noDataText}>No banners available</Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginVertical: 20,
//     alignItems: 'center',
//   },
//   bannerContainer: {
//     width: screenWidth - 20,
//     height: screenHeight * 0.38, // Slightly taller for prominence
//     marginHorizontal: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   imageWrapper: {
//     width: '100%',
//     height: '100%',
//     backgroundColor: '#F8F9FA', // Light gray for a soft base
//     borderRadius: 12,
//     overflow: 'hidden',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 3 },
//     shadowOpacity: 0.15,
//     shadowRadius: 6,
//     elevation: 4, // Subtle shadow for depth
//   },
//   bannerImage: {
//     width: '100%',
//     height: '75%', // Leaves space for text and counter
//     borderTopLeftRadius: 12,
//     borderTopRightRadius: 12,
//   },
//   textOverlay: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: 'rgba(0, 0, 0, 0.7)', // Darker overlay for contrast
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     borderBottomLeftRadius: 12,
//     borderBottomRightRadius: 12,
//   },
//   headline: {
//     color: '#FFF',
//     fontSize: 22, // Bold and prominent
//     fontWeight: '700',
//     textAlign: 'center',
//     textTransform: 'uppercase', // For a premium feel
//   },
//   carouselCounter: {
//     position: 'absolute',
//     top: 10,
//     right: 10,
//     backgroundColor: '#FF3366', // Vibrant pink for pop
//     paddingHorizontal: 12,
//     paddingVertical: 4,
//     borderRadius: 20,
//   },
//   counterText: {
//     color: '#FFF',
//     fontSize: 14,
//     fontWeight: '600',
//   },
//   noDataText: {
//     textAlign: 'center',
//     color: '#666',
//     fontSize: 16,
//     marginTop: 20,
//   },
// });

// export default Banner;