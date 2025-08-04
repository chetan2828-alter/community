
// use these  to start from first page 
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import TabNavigator from '././src/Components/TabNavigator';
// import FirstPage from './src/Pages/FirstPage/FirstPage';

// import SecondPage from './src/Pages/SecondPage/SecondPage';
// import StackNavigator from './src/Components/StackNavigator';
// import Home from './src/Screens/HomePage/Home';
// import { MemberStatusProvider } from './src/context/MemberStatusContext';

// const Stack = createStackNavigator();

// function App  ()  {
//   return (
//     <MemberStatusProvider>
//    <StackNavigator>

//    </StackNavigator>
//    </MemberStatusProvider>
//   );
// };

// export default App;

// directl redirectiung to the hoem tab developing purpose only 

// import { StyleSheet } from 'react-native';
// import StackNavigator from './src/Components/StackNavigator';
// import TabNavigator from './src/Components/TabNavigator';
// import { NavigationContainer } from '@react-navigation/native';
// export default function App() {
//   return (
//     // <StackNavigator></StackNavigator>
//     <NavigationContainer>
//     <TabNavigator></TabNavigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex:1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


//usign for the navigation for implemenitn g logout button 

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from '././src/Components/TabNavigator';
import FirstPage from './src/Pages/FirstPage/FirstPage';

import SecondPage from './src/Pages/SecondPage/SecondPage';
import StackNavigator from './src/Components/StackNavigator';
import Home from './src/Screens/HomePage/Home';
import { MemberStatusProvider } from './src/context/MemberStatusContext';
import { AuthProvider } from './src/context/AuthContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // ✅ Add this


const Stack = createStackNavigator();

function App  ()  {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <AuthProvider>
    <MemberStatusProvider>
   <StackNavigator>

   </StackNavigator>
   </MemberStatusProvider>
   </AuthProvider>
    </GestureHandlerRootView>
  );
};

export default App;

