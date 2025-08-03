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
import { 
  fontSize, 
  isSmallDevice, 
  spacing, 
  borderRadius, 
  shadowStyles 
} from '../../utils/responsiveHelper';

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

  const handleViewProfile = () => {
    console.log("Navigating with userId:", match.id);
    navigation.navigate("userprofile", { userId: match.id });
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
            uri: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg",
          }}
          style={styles.fullImage}
        />
      )}

      {/* Details */}
      <View style={styles.cardDetails}>
        <DetailRow 
          icon="person-outline" 
          label="Name" 
          value={`${match.firstname || 'N/A'} ${match.lastName || ''}`} 
        />
        <DetailRow icon="calendar-outline" label="Age" value={match.age || 'N/A'} />
        <DetailRow icon="male-female" label="Gender" value={match.gender || 'N/A'} />
        <DetailRow 
          icon="checkmark-circle-outline" 
          label="Status" 
          value={match.maritalStatus || 'N/A'} 
        />
      </View>

      {/* Action Buttons */}
      <View style={styles.actionsRow}>
        <TouchableOpacity
          style={styles.viewProfileButton}
          onPress={handleViewProfile}
          activeOpacity={0.8}
        >
          <Ionicons name="eye" size={18} color="#212529" />
          <Text style={styles.buttonText}>View Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.addButton}
          activeOpacity={0.8}
        >
          <Ionicons name="person-add" size={18} color="#212529" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const DetailRow = ({ icon, label, value }) => (
  <View style={styles.detailsRow}>
    <Ionicons name={icon} size={20} color="#495057" />
    <Text style={styles.detailsLabel}>{label}:</Text>
    <Text style={styles.detailsValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    marginVertical: hp('2%'),
    marginHorizontal: spacing.md,
    borderRadius: borderRadius.xl,
    overflow: "hidden",
    ...shadowStyles.medium,
  },
  fullImage: {
    width: "100%",
    height: hp(isSmallDevice ? '35%' : '42%'),
    resizeMode: "cover",
  },
  carouselContainer: {
    position: "relative",
  },
  carouselImage: {
    width,
    height: hp(isSmallDevice ? '35%' : '42%'),
    resizeMode: "cover",
  },
  imageCount: {
    position: "absolute",
    bottom: spacing.md,
    right: spacing.md,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    paddingHorizontal: spacing.sm,
    paddingVertical: hp('0.8%'),
    borderRadius: borderRadius.md,
  },
  imageCountText: {
    color: "#ffffff",
    fontSize: fontSize(14, 13, 14, 15),
    fontWeight: "700",
  },
  cardDetails: {
    paddingHorizontal: spacing.lg,
    paddingVertical: hp('2.5%'),
    backgroundColor: "#ffffff",
  },
  detailsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp('1.5%'),
    paddingVertical: hp('0.5%'),
  },
  detailsLabel: {
    marginLeft: spacing.sm,
    fontSize: fontSize(15, 14, 15, 16),
    fontWeight: "600",
    color: "#495057",
  },
  detailsValue: {
    marginLeft: spacing.sm,
    fontSize: fontSize(15, 14, 15, 16),
    fontWeight: "500",
    color: "#212529",
    flex: 1,
  },
  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: spacing.lg,
    paddingBottom: hp('2.5%'),
    backgroundColor: "#f8f9fa",
  },
  viewProfileButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: spacing.lg,
    paddingVertical: hp('1.5%'),
    borderRadius: borderRadius.xl,
    borderColor: "#212529",
    borderWidth: 2,
    ...shadowStyles.light,
    flex: 1,
    marginRight: spacing.md,
    justifyContent: 'center',
  },
  addButton: {
    backgroundColor: "#ffffff",
    padding: spacing.md,
    borderRadius: borderRadius.xl,
    borderWidth: 2,
    borderColor: "#212529",
    ...shadowStyles.light,
  },
  buttonText: {
    marginLeft: spacing.sm,
    fontSize: fontSize(14, 13, 14, 15),
    fontWeight: "700",
    color: "#212529",
  },
});

export default MarriageCard;