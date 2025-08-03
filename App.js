import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import StackNavigator from './src/Components/StackNavigator';
import { AuthProvider } from './src/context/AuthContext';
import { MemberStatusProvider } from './src/context/MemberStatusContext';
import './src/i18n/i18n.config';

export default function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <AuthProvider>
          <MemberStatusProvider>
            <StackNavigator />
          </MemberStatusProvider>
        </AuthProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}