import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Platform } from 'react-native';
import {
  MaterialCommunityIcons,
  Ionicons,
  Feather,
} from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { 
  wp, hp, fontSize, spacing, borderRadius, iconSize, 
  isSmallDevice, getSafeAreaBottom, shadows 
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

  const tabBarHeight = hp(8) + (Platform.OS === 'ios' ? insets.bottom : 0);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#212529',
        tabBarInactiveTintColor: '#9ca3af',
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: '#ffffff',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: tabBarHeight,
          paddingBottom: Platform.OS === 'ios' ? insets.bottom : spacing.sm,
          paddingTop: spacing.sm,
          paddingHorizontal: spacing.md,
          borderTopLeftRadius: borderRadius.xl,
          borderTopRightRadius: borderRadius.xl,
          borderTopWidth: 0,
          ...shadows.medium,
        },
        tabBarLabelStyle: {
          fontSize: fontSize(11),
          fontWeight: '600',
          marginTop: -spacing.xs,
        },
        tabBarIconStyle: {
          marginTop: spacing.xs,
        },
        headerShown: false,
        tabBarItemStyle: {
          paddingVertical: spacing.xs,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: t("tabs.Home"),
          tabBarIcon: ({ color, focused }) => (
            <View style={{
              padding: spacing.xs,
              borderRadius: borderRadius.md,
              backgroundColor: focused ? 'rgba(33, 37, 41, 0.1)' : 'transparent',
            }}>
              <MaterialCommunityIcons
                name={focused ? "home" : "home-outline"}
                color={color}
                size={focused ? iconSize.lg : iconSize.md}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          title: t("tabs.Explore"),
          tabBarIcon: ({ color, focused }) => (
            <View style={{
              padding: spacing.xs,
              borderRadius: borderRadius.md,
              backgroundColor: focused ? 'rgba(33, 37, 41, 0.1)' : 'transparent',
            }}>
              <Feather
                name="plus-square"
                color={color}
                size={focused ? iconSize.lg : iconSize.md}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Marriage"
        component={Marriage}
        options={{
          title: t("tabs.Marriage"),
          tabBarIcon: ({ color, focused }) => (
            <View style={{
              padding: spacing.xs,
              borderRadius: borderRadius.md,
              backgroundColor: focused ? 'rgba(33, 37, 41, 0.1)' : 'transparent',
            }}>
              <Ionicons
                name={focused ? "people" : "people-outline"}
                color={color}
                size={focused ? iconSize.lg : iconSize.md}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: t("tabs.Profile"),
          tabBarIcon: ({ color, focused }) => (
            <View style={{
              padding: spacing.xs,
              borderRadius: borderRadius.md,
              backgroundColor: focused ? 'rgba(33, 37, 41, 0.1)' : 'transparent',
            }}>
              <Ionicons
                name={focused ? "person" : "person-outline"}
                color={color}
                size={focused ? iconSize.lg : iconSize.md}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;