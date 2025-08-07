import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Platform, StyleSheet } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';
import { 
  wp, hp, fontSize, spacing, borderRadius, iconSize, shadows,
  getSafeAreaBottom, colors, typography, layout
} from '../utils/responsiveHelper';
import HomeScreen from '../Screens/HomePage/Home';
import ProfileScreen from '../Screens/ProfilePage/Profile';
import Explore from '../Screens/ExplorePage/Explore';
import Marriage from '../Screens/MarriagePage/Marriage';
import { useTranslation } from 'react-i18next';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();

  const tabBarHeight = layout.tabBarHeight + (Platform.OS === 'ios' ? insets.bottom : spacing.md);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text.tertiary,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: Platform.OS === 'ios' ? 'rgba(255, 255, 255, 0.95)' : colors.white,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: tabBarHeight,
          paddingBottom: Platform.OS === 'ios' ? insets.bottom : spacing.md,
          paddingTop: spacing.md,
          paddingHorizontal: spacing.lg,
          borderTopWidth: StyleSheet.hairlineWidth,
          borderTopColor: colors.separator.nonOpaque,
          ...shadows.lg,
        },
        tabBarLabelStyle: {
          fontSize: typography.caption1,
          fontWeight: '600',
          letterSpacing: 0.1,
          marginTop: spacing.xs,
        },
        tabBarIconStyle: {
          marginTop: spacing.sm,
        },
        headerShown: false,
        tabBarItemStyle: {
          paddingVertical: spacing.sm,
          borderRadius: borderRadius.lg,
          marginHorizontal: spacing.xs,
        },
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          let IconComponent = Ionicons;
          
          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Explore':
              iconName = focused ? 'add-circle' : 'add-circle-outline';
              break;
            case 'Marriage':
              iconName = focused ? 'people' : 'people-outline';
              break;
            case 'Profile':
              iconName = focused ? 'person' : 'person-outline';
              break;
            default:
              iconName = 'circle';
          }

          return (
            <View style={[
              styles.iconContainer,
              focused && styles.iconContainerActive
            ]}>
              <IconComponent
                name={iconName}
                size={focused ? iconSize.lg : iconSize.md}
                color={color}
              />
            </View>
          );
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: t("tabs.Home"),
        }}
      />

      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          title: t("tabs.Explore"),
        }}
      />

      <Tab.Screen
        name="Marriage"
        component={Marriage}
        options={{
          title: t("tabs.Marriage"),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: t("tabs.Profile"),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    padding: spacing.sm,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: wp(10),
    minHeight: wp(10),
  },
  
  iconContainerActive: {
    backgroundColor: colors.primary + '15',
    transform: [{ scale: 1.1 }],
  },
});

export default TabNavigator;