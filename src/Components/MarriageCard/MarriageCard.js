import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { 
  wp, hp, fontSize, spacing, borderRadius, shadows,
  colors, typography, iconSize, isSmallDevice
} from '../../utils/responsiveHelper';
import { StyleSheet } from 'react-native';

const MarriageCard = ({ match }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation();

  const imagesAvailable = match.images?.length > 0;
  const isSingleImage = match.images?.length === 1;
  const totalImages = match.images?.length || 0;

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const cardWidth = wp(100) - spacing.lg; // Account for margins
    const newIndex = Math.round(contentOffsetX / cardWidth);
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
              snapToInterval={wp(100) - spacing.lg}
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
        <DetailRow icon="person-outline" label="Name" value={`${match.firstname || ''} ${match.lastName || ''}`} />
        <DetailRow icon="calendar-outline" label="Age" value={match.age} />
        <DetailRow icon="male-female" label="Gender" value={match.gender} />
        <DetailRow icon="checkmark-circle-outline" label="Status" value={match.maritalStatus} />
      </View>

      {/* Action Buttons */}
      <View style={styles.actionsRow}>
        <TouchableOpacity
          style={styles.viewProfileButton}
          onPress={() => {
            console.log("Navigating with userId:", match.id);
            navigation.navigate("userprofile", { userId: match.id });
          }}
          activeOpacity={0.8}
        >
          <Ionicons name="eye" size={iconSize.sm} color={colors.primary} />
          <Text style={styles.buttonText}>View Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.addButton} activeOpacity={0.8}>
          <Ionicons name="person-add" size={iconSize.sm} color={colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const DetailRow = ({ icon, label, value }) => (
  <View style={styles.detailsRow}>
    <Ionicons name={icon} size={iconSize.md} color={colors.gray[600]} />
    <Text style={styles.detailsLabel}>{label}:</Text>
    <Text style={styles.detailsValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    marginVertical: spacing.md,
    marginHorizontal: spacing.md,
    borderRadius: borderRadius.xl,
    overflow: "hidden",
    ...shadows.large,
  },
  fullImage: {
    width: "100%",
    height: hp(isSmallDevice ? 35 : 42),
    resizeMode: "cover",
  },
  carouselContainer: {
    position: "relative",
  },
  carouselImage: {
    width: wp(100) - spacing.lg,
    height: hp(isSmallDevice ? 35 : 42),
    resizeMode: "cover",
  },
  imageCount: {
    position: "absolute",
    bottom: spacing.md,
    right: spacing.md,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.md,
  },
  imageCountText: {
    color: colors.white,
    fontSize: fontSize(12),
    fontWeight: "600",
  },
  cardDetails: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
    backgroundColor: colors.white,
  },
  detailsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing.md,
  },
  detailsLabel: {
    marginLeft: spacing.sm,
    fontSize: typography.body,
    fontWeight: "600",
    color: colors.gray[700],
    minWidth: wp(15),
  },
  detailsValue: {
    marginLeft: spacing.sm,
    fontSize: typography.body,
    fontWeight: "500",
    color: colors.primary,
    flex: 1,
  },
  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.lg,
    backgroundColor: colors.gray[50],
  },
  viewProfileButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.xl,
    borderColor: colors.primary,
    borderWidth: 2,
    flex: 1,
    marginRight: spacing.md,
    justifyContent: 'center',
    ...shadows.small,
  },
  addButton: {
    backgroundColor: colors.white,
    padding: spacing.md,
    borderRadius: borderRadius.xl,
    borderWidth: 2,
    borderColor: colors.primary,
    ...shadows.small,
  },
  buttonText: {
    marginLeft: spacing.sm,
    fontSize: typography.body,
    fontWeight: "600",
    color: colors.primary,
  },
});

export default MarriageCard;