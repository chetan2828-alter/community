

// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   Image,
//   Dimensions,
//   TouchableOpacity,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";

// const { width } = Dimensions.get("window");

// const MarriageCard = ({ match }) => {
//   const [currentIndex, setCurrentIndex] = useState(0); // State to track the current image index
//   const isSingleImage = match.images?.length === 1;
//   const totalImages = match.images?.length || 0;

//   const navigation = useNavigation();

//   const handleScroll = (event) => {
//     const contentOffsetX = event.nativeEvent.contentOffset.x;
//     const newIndex = Math.round(contentOffsetX / width); // Use Math.round to ensure proper snapping
//     setCurrentIndex(newIndex);
//   };

//   return (
//     <View style={styles.card}>
//       {/* Image Section */}
//       {isSingleImage ? (
//         <Image source={{ uri: match.images[0] }} style={styles.fullImage} />
//       ) : (
//         <View style={styles.carouselContainer}>
//           <FlatList
//             data={match.images}
//             horizontal
//             keyExtractor={(image, index) => `${image}-${index}`}
//             showsHorizontalScrollIndicator={false}
//             renderItem={({ item }) => (
//               <Image source={{ uri: item }} style={styles.carouselImage} />
//             )}
//             onScroll={handleScroll}
//             scrollEventThrottle={16}
//             pagingEnabled // Ensures snapping behavior
//             snapToInterval={width} // Snap to the width of the screen
//             decelerationRate="fast" // Smooth snapping behavior
//           />
//           {/* Image Count */}
//           <View style={styles.imageCount}>
//             <Text style={styles.imageCountText}>
//               {currentIndex + 1}/{totalImages}
//             </Text>
//           </View>
//         </View>
//       )}

//       {/* Details Section */}
//       <View style={styles.cardDetails}>
//         <View style={styles.detailsRow}>
//           <Ionicons name="person-outline" size={24} color="#555" />
//           <Text style={styles.detailsLabel}>Name:</Text>
//           <Text style={styles.detailsValue}>{match.name}</Text>
//         </View>
//         <View style={styles.detailsRow}>
//           <Ionicons name="calendar-outline" size={24} color="#555" />
//           <Text style={styles.detailsLabel}>Age:</Text>
//           <Text style={styles.detailsValue}>{match.age}</Text>
//         </View>
//         <View style={styles.detailsRow}>
//           <Ionicons name="male-female" size={24} color="#555" />
//           <Text style={styles.detailsLabel}>Gender:</Text>
//           <Text style={styles.detailsValue}>{match.gender}</Text>
//         </View>
//         <View style={styles.detailsRow}>
//           <Ionicons name="checkmark-circle-outline" size={24} color="#555" />
//           <Text style={styles.detailsLabel}>Status:</Text>
//           <Text style={styles.detailsValue}>{match.status}</Text>
//         </View>
//       </View>

//       {/* Action Buttons */}
//       <View style={styles.actionsRow}>
//         <TouchableOpacity
//           style={styles.viewProfileButton}
//           onPress={() => navigation.navigate("Profile", { match })}
//         >
//           <Ionicons name="eye" size={20} color="#fff" />
//           <Text style={styles.buttonText}>View Profile</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.addButton}>
//           <Ionicons name="person-add" size={20} color="#fff" />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: "#fff",
//     marginVertical: 15,
//     borderRadius: 18,
//     overflow: "hidden",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 6 },
//     shadowOpacity: 0.2,
//     shadowRadius: 10,
//     elevation: 5,
//   },
//   fullImage: {
//     width: "100%",
//     height: width * 0.75, // Ensures a 4:3 aspect ratio
//     resizeMode: "cover", // Fills the entire area
//   },
//   carouselContainer: {
//     position: "relative",
//   },
//   carouselImage: {
//     width,
//     height: width * 0.75, // Ensures a 4:3 aspect ratio
//     resizeMode: "cover",
//   },
//   imageCount: {
//     position: "absolute",
//     bottom: 10,
//     left: 10,
//     backgroundColor: "rgba(0, 0, 0, 0.6)",
//     padding: 8,
//     borderRadius: 8,
//   },
//   imageCountText: {
//     fontSize: 16,
//     color: "#fff",
//     fontWeight: "bold",
//   },
//   cardDetails: {
//     paddingHorizontal: 15,
//     paddingVertical: 20,
//     backgroundColor: "#fff",
//   },
//   detailsRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 12,
//   },
//   detailsLabel: {
//     fontSize: 16,
//     color: "#777",
//     fontWeight: "600",
//     marginLeft: 10,
//   },
//   detailsValue: {
//     fontSize: 16,
//     color: "#333",
//     fontWeight: "500",
//     marginLeft: 5,
//   },
//   actionsRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//   },
//   viewProfileButton: {
//     backgroundColor: "#008CBA",
//     flexDirection: "row",
//     alignItems: "center",
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     borderRadius: 25,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 6,
//     elevation: 5,
//     marginTop: -40,
//   },
//   addButton: {
//     backgroundColor: "#6a0dad", // Purple color
//     padding: 20,
//     borderRadius: 30,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 6,
//     elevation: 5,
//     marginTop : -40,
//   },
//   buttonText: {
//     color: "#fff",
//     fontWeight: "600",
//     fontSize: 14,
//     marginLeft: 8,
//   },
// });

// export default MarriageCard;


/// older one these with proper backend 

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { 
  widthPercentageToDP as wp, 
  heightPercentageToDP as hp 
} from 'react-native-responsive-screen';
import { fontSize, isSmallDevice } from '../../utils/responsiveHelper';

const { width } = Dimensions.get("window");

const MarriageCard = ({ match }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation();

  const imagesAvailable = match.images?.length > 0;
  const isSingleImage = match.images?.length === 1;
  const totalImages = match.images?.length || 0;

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffsetX / width);
    setCurrentIndex(newIndex);
  };

  return (
    <View style={styles.card}>
      {/* Image Section */}
      {imagesAvailable ? (
        isSingleImage ? (
          <Image source={{ uri: match.images[0] }} style={styles.fullImage} />
        ) : (
          <View style={styles.carouselContainer}>
            <FlatList
              data={match.images}
              horizontal
              keyExtractor={(image, index) => `${image}-${index}`}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <Image source={{ uri: item }} style={styles.carouselImage} />
              )}
              onScroll={handleScroll}
              scrollEventThrottle={16}
              pagingEnabled
              snapToInterval={width}
              decelerationRate="fast"
            />
            <View style={styles.imageCount}>
              <Text style={styles.imageCountText}>
                {currentIndex + 1}/{totalImages}
              </Text>
            </View>
          </View>
        )
      ) : (
        <Image
          source={{
            uri: "https://dummyimage.com/600x400/cccccc/000000&text=No+Image",
          }}
          style={styles.fullImage}
        />
      )}

      {/* Details */}
      <View style={styles.cardDetails}>
        <DetailRow icon="person-outline" label="Name" value={`${match.firstname} ${match.lastName}`} />
        <DetailRow icon="calendar-outline" label="Age" value={match.age} />
        <DetailRow icon="male-female" label="Gender" value={match.gender} />
        <DetailRow icon="checkmark-circle-outline" label="Status" value={match.maritalStatus} />
      </View>

      {/* Buttons */}
      <View style={styles.actionsRow}>
        {/* <TouchableOpacity
          style={styles.viewProfileButton}
          onPress={() => navigation.navigate("userprofile", { match })}
        >
          <Ionicons name="eye" size={18} color="#000" />
          <Text style={styles.buttonText}>View Profile</Text>
        </TouchableOpacity> */}

        {/* // implementing clcik feature of view profile  */}
      

       <TouchableOpacity
  style={styles.viewProfileButton}
  onPress={() => {
    console.log("Navigating with userId:", match.id); // ✅ Debug log
    navigation.navigate("userprofile", { userId: match.id });
  }}
>
  <Ionicons name="eye" size={18} color="#000" />
  <Text style={styles.buttonText}>View Profile</Text>
</TouchableOpacity>



        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="person-add" size={18} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const DetailRow = ({ icon, label, value }) => (
  <View style={styles.detailsRow}>
    <Ionicons name={icon} size={20} color="#555" />
    <Text style={styles.detailsLabel}>{label}:</Text>
    <Text style={styles.detailsValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    marginVertical: hp('2%'),
    marginHorizontal: wp('3%'),
    borderRadius: wp('4.5%'),
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: hp('0.7%') },
    shadowOpacity: 0.2,
    shadowRadius: wp('3%'),
    elevation: 6,
  },
  fullImage: {
    width: "100%",
    height: hp(isSmallDevice ? '35%' : '40%'),
    resizeMode: "cover",
  },
  carouselContainer: {
    position: "relative",
  },
  carouselImage: {
    width,
    height: hp(isSmallDevice ? '35%' : '40%'),
    resizeMode: "cover",
  },
  imageCount: {
    position: "absolute",
    bottom: wp('2.5%'),
    right: wp('2.5%'),
    backgroundColor: "#000000aa",
    paddingHorizontal: wp('2%'),
    paddingVertical: hp('0.5%'),
    borderRadius: wp('3%'),
  },
  imageCountText: {
    color: "#fff",
    fontSize: fontSize(14),
    fontWeight: "600",
  },
  cardDetails: {
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('2.2%'),
    backgroundColor: "#fff",
  },
  detailsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp('1.2%'),
  },
  detailsLabel: {
    marginLeft: wp('2%'),
    fontSize: fontSize(15),
    fontWeight: "600",
    color: "#333",
  },
  detailsValue: {
    marginLeft: wp('1.5%'),
    fontSize: fontSize(15),
    fontWeight: "500",
    color: "#000",
  },
  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp('4%'),
    paddingBottom: hp('2%'),
    backgroundColor: "#f9f9f9",
  },
  viewProfileButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: wp('3.5%'),
    paddingVertical: hp('1%'),
    borderRadius: wp('7.5%'),
    borderColor: "#000",
    borderWidth: 1.3,
  },
  addButton: {
    backgroundColor: "#fff",
    padding: wp('3%'),
    borderRadius: wp('7.5%'),
    borderWidth: 1.3,
    borderColor: "#000",
  },
  buttonText: {
    marginLeft: wp('1.5%'),
    fontSize: fontSize(14),
    fontWeight: "600",
    color: "#000",
  },
});

export default MarriageCard;
