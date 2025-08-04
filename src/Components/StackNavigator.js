
// import React from "react";
// import Welcome from "../Pages/Welcome/Welcome"
// import TabNavigator from "./TabNavigator";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { NavigationContainer } from "@react-navigation/native";
// import FirstPage from "../Pages/FirstPage/FirstPage";
// import SecondPage from "../Pages/SecondPage/SecondPage";
// import Auth from "../Pages/Auth/Auth";
// import Home from "../Screens/HomePage/Home";
// import Forms from "../Pages/Forms/Forms"

// import UserProfile from "../Pages/UsersProfilePage/UserProfile";
// import CommentPage from "../Pages/CommentPage/CommentPage";
// import SearchResults from "../Screens/MarriagePage/SearchResults"


// const stack = createNativeStackNavigator();

// const StackNavigator = () => {
//     return (
//         <NavigationContainer>
//         <stack.Navigator 
//         intialRouteName="FirstPage"
//         screenOptions={{
//           headerShown : false
//         }}>

        
//                 <stack.Screen name = "FirstPage" component = {FirstPage} />
//                 <stack.Screen name = "SecondPage" component = {SecondPage} />
//                 <stack.Screen name = "Auth" component = {Auth} />
//                  {/* // tesign for afyter login routing to hoem n all */}
//                 <stack.Screen name = "Home" component = {Home} /> 
//                 <stack.Screen name = "Forms" component = {Forms} /> 
//                 {/* testing only for the  custom page if user ne  kisi user name pe clcik kiya toh usko custome page profielw ala dikahana hai woh  */}
//                 <stack.Screen name = "userprofile" component = {UserProfile} />
                 
//                  <stack.Screen name = "SearchResults" component={SearchResults} />
//                 {/* // tesign for afyter login routing to hoem n all */}
//                 <stack.Screen name = "TabNavigator" component = {TabNavigator} />
        
//   {/* testig for cometn screen 
//    */}

// <stack.Screen name = "commentpage" component = {CommentPage} />


//                 </stack.Navigator>
//         </NavigationContainer>
       
//     )
// }

// export default StackNavigator

// ui by chetan changing for marriage search resutl


import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../Pages/Welcome/Welcome";
import FirstPage from "../Pages/FirstPage/FirstPage";
import SecondPage from "../Pages/SecondPage/SecondPage";
import Auth from "../Pages/Auth/Auth";
import Home from "../Screens/HomePage/Home";
import Forms from "../Pages/Forms/Forms";
import UserProfile from "../Pages/UsersProfilePage/UserProfile";
import CommentPage from "../Pages/CommentPage/CommentPage";
import TabNavigator from "./TabNavigator";
import SearchResults from "../Screens/MarriagePage/SearchResults";
import FamilyTreePopup from "./FamilyTree/FamilyTreePopup";

const Stack = createNativeStackNavigator(); // ✅ FIXED here

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="FirstPage"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="FirstPage" component={FirstPage} />
        <Stack.Screen name="SecondPage" component={SecondPage} />
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Forms" component={Forms} />
        <Stack.Screen name="userprofile" component={UserProfile} />
        <Stack.Screen name="SearchResults" component={SearchResults} />
        <Stack.Screen name="FamilyTree" component={FamilyTreePopup} />

        
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="commentpage" component={CommentPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
