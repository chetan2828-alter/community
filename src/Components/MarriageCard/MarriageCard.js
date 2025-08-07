import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { 
  wp, hp, fontSize, spacing, borderRadius, shadows,
  colors, typography, iconSize, layout
} from '../../utils/responsiveHelper';

const MarriageCard = ({ match }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation();

  const imagesAvailable = match.images?.length > 0;
  const isSingleImage = match.images?.length === 1;
  const totalImages = match.images?.length || 0;

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const cardWidth = wp(100) - (spacing.xl * 2);
    const newIndex = Math.round(contentOffsetX / cardWidth);
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
              snapToInterval={wp(100) - (spacing.xl * 2)}
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
        <View style={styles.placeholderContainer}>
          <Ionicons name="person-outline" size={iconSize.xxl} color={colors.text.tertiary} />
          <Text style={styles.placeholderText}>No photo</Text>
        </View>
      )}

      {/* Profile Details */}
      <View style={styles.cardDetails}>
        <View style={styles.nameSection}>
          <Text style={styles.name}>
            {`${match.firstname || ''} ${match.lastName || ''}`.trim() || 'Unknown'}
          </Text>
          <View style={styles.verifiedBadge}>
            <Ionicons name="checkmark-circle" size={iconSize.sm} color={colors.success} />
          </View>
        </View>

        <View style={styles.detailsGrid}>
          <DetailRow 
            icon="calendar-outline" 
            label="Age" 
            value={match.age ? `${match.age} years` : 'N/A'} 
          />
          <DetailRow 
            icon="person-outline" 
            label="Gender" 
            value={match.gender || 'N/A'} 
          />
          <DetailRow 
            icon="heart-outline" 
            label="Status" 
            value={match.maritalStatus || 'N/A'} 
          />
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionsRow}>
        <TouchableOpacity
          style={styles.viewProfileButton}
          onPress={handleViewProfile}
          activeOpacity={0.8}
        >
          <Feather name="user" size={iconSize.sm} color={colors.primary} />
          <Text style={styles.viewProfileText}>View Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.interestButton} 
          activeOpacity={0.8}
        >
          <Ionicons name="heart-outline" size={iconSize.sm} color={colors.white} />
          <Text style={styles.interestText}>Interest</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const DetailRow = ({ icon, label, value }) => (
  <View style={styles.detailsRow}>
    <Ionicons name={icon} size={iconSize.sm} color={colors.text.tertiary} />
    <Text style={styles.detailsLabel}>{label}</Text>
    <Text style={styles.detailsValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    marginVertical: spacing.lg,
    marginHorizontal: spacing.xl,
    borderRadius: borderRadius.xl,
    overflow: "hidden",
    ...shadows.lg,
  },
  
  fullImage: {
    width: "100%",
    height: hp(45),
    resizeMode: "cover",
  },
  
  carouselContainer: {
    position: "relative",
  },
  
  carouselImage: {
    width: wp(100) - (spacing.xl * 2),
    height: hp(45),
    resizeMode: "cover",
  },
  
  placeholderContainer: {
    width: "100%",
    height: hp(45),
    backgroundColor: colors.background.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  placeholderText: {
    fontSize: typography.subhead,
    color: colors.text.tertiary,
    marginTop: spacing.md,
    fontWeight: '500',
  },
  
  imageCount: {
    position: "absolute",
    top: spacing.lg,
    right: spacing.lg,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.xl,
    ...shadows.md,
  },
  
  imageCountText: {
    color: colors.white,
    fontSize: typography.caption1,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  
  cardDetails: {
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.xl,
    backgroundColor: colors.white,
  },
  
  nameSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  
  name: {
    fontSize: typography.title2,
    fontWeight: "700",
    color: colors.text.primary,
    flex: 1,
    letterSpacing: -0.3,
  },
  
  verifiedBadge: {
    marginLeft: spacing.sm,
  },
  
  detailsGrid: {
    gap: spacing.lg,
  },
  
  detailsRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    backgroundColor: colors.background.secondary,
    borderRadius: borderRadius.lg,
  },
  
  detailsLabel: {
    marginLeft: spacing.md,
    fontSize: typography.subhead,
    fontWeight: "600",
    color: colors.text.secondary,
    minWidth: wp(18),
  },
  
  detailsValue: {
    marginLeft: spacing.md,
    fontSize: typography.subhead,
    fontWeight: "500",
    color: colors.text.primary,
    flex: 1,
  },
  
  actionsRow: {
    flexDirection: "row",
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.xl,
    backgroundColor: colors.white,
    gap: spacing.lg,
  },
  
  viewProfileButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.lg,
    borderRadius: borderRadius.xl,
    borderColor: colors.primary,
    borderWidth: 2,
    flex: 1,
    justifyContent: 'center',
    ...shadows.sm,
  },
  
  viewProfileText: {
    marginLeft: spacing.md,
    fontSize: typography.subhead,
    fontWeight: "600",
    color: colors.primary,
    letterSpacing: 0.1,
  },
  
  interestButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.lg,
    borderRadius: borderRadius.xl,
    justifyContent: 'center',
    minWidth: wp(28),
    ...shadows.md,
  },
  
  interestText: {
    marginLeft: spacing.md,
    fontSize: typography.subhead,
    fontWeight: "600",
    color: colors.white,
    letterSpacing: 0.1,
  },
});

export default MarriageCard;