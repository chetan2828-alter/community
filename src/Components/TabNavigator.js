import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Platform } from 'react-native';
import { MaterialCommunityIcons, Ionicons, Feather } from '@expo/vector-icons';
import { 
  widthPercentageToDP as wp, 
  heightPercentageToDP as hp 
} from 'react-native-responsive-screen';
import { fontSize, isSmallDevice, spacing, borderRadius, getSafeAreaPadding } from '../utils/responsiveHelper';
import HomeScreen from '../Screens/HomePage/Home';
import ProfileScreen from '../Screens/ProfilePage/Profile';
import Explore from '../Screens/ExplorePage/Explore';
import Marriage from '../Screens/MarriagePage/Marriage';
import { useTranslation } from 'react-i18next';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { t } = useTranslation();
  const safeArea = getSafeAreaPadding();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#212529',
        tabBarInactiveTintColor: '#6c757d',
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: '#ffffff',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 12,
          height: hp(isSmallDevice ? '9%' : '10%'),
          paddingBottom: Platform.OS === 'ios' ? safeArea.bottom : hp('1.5%'),
          paddingTop: hp('1%'),
          borderTopLeftRadius: borderRadius.xl,
          borderTopRightRadius: borderRadius.xl,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -hp('0.5%') },
          shadowOpacity: 0.15,
          shadowRadius: wp('2%'),
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: fontSize(12),
          fontWeight: '600',
          marginTop: hp('0.2%'),
        },
        tabBarIconStyle: {
          marginTop: hp('0.5%'),
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: t("tabs.Home"),
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "home" : "home-outline"}
              color={color}
              size={focused ? (isSmallDevice ? 26 : 28) : (isSmallDevice ? 22 : 24)}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          title: t("tabs.Explore"),
          tabBarIcon: ({ color, focused }) => (
            <Feather
              name="plus-square"
              color={color}
              size={focused ? (isSmallDevice ? 24 : 26) : (isSmallDevice ? 20 : 22)}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Marriage"
        component={Marriage}
        options={{
          title: t("tabs.Marriage"),
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                borderRadius: borderRadius.md,
                backgroundColor: focused ? 'rgba(33, 37, 41, 0.08)' : 'transparent',
                padding: wp('1%'),
              }}
            >
              <Ionicons
                name={focused ? "people" : "people-outline"}
                color={color}
                size={focused ? (isSmallDevice ? 26 : 28) : (isSmallDevice ? 22 : 24)}
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
            <Ionicons
              name={focused ? "person" : "person-outline"}
              color={color}
              size={focused ? (isSmallDevice ? 24 : 26) : (isSmallDevice ? 20 : 22)}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;