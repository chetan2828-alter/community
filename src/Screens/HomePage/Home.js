// import React, { useState } from 'react';
// import { View, ScrollView, StyleSheet } from 'react-native';
// import CircleCard from '../../Components/CircleCard/CircleCard'; // Import CircleCard component
// import PostCard from '../../Components/PostCard/PostCard'; // Import PostCard component
// import { categories, data } from '../../dummyData'; // Import categories and data

// // Home Component
// export default function Home() {
//   const [activeCategory, setActiveCategory] = useState('Fruits'); // Default category

//   return (
//     <View style={styles.container}>
//       {/* Horizontal Scrollable Circle Cards */}
//       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>
//         {categories.map((category) => (
//           <CircleCard
//             key={category.id}
//             category={category}
//             activeCategory={activeCategory}
//             setActiveCategory={setActiveCategory}
//           />
//         ))}
//       </ScrollView>

//       {/* Divider Line Below Circle Cards */}
//       <View style={styles.divider} />

//       {/* Post Cards Display (Scrollable) */}
//       <ScrollView style={styles.postContainer}>
//         <PostCard data={data[activeCategory]} />
//       </ScrollView>
//     </View>
//   );
// }

// // Styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 20,
//     backgroundColor: '#f4f4f4',
//   },
//   categoryContainer: {
//     marginTop:40,
//     flexDirection: 'row',
//     marginBottom: -700, // Reduced margin to decrease space below circle cards
//   },
//   divider: {
//     height: 1,
//     backgroundColor: '#ccc',
//     marginVertical: 5, // Reduced space around the divider line
//   },
//   postContainer: {
//     flex: 1,
//     marginBottom: 10,
//   },
// });

// uppar wala ok hai according to  fruits k example k liey yeh neeche wala server fiel se data le raha 

// import React, { useState } from 'react';
// import { View, StyleSheet, ScrollView } from 'react-native';
// import CircleCard from '../../Components/CircleCard/CircleCard'; // Adjust this import based on your folder structure
// import PostCard from '../../Components/PostCard/PostCard';    // Adjust this import based on your folder structure

// const Home = () => {
//   const [activeCategory, setActiveCategory] = useState('Home'); // Default category is "Home"

//   return (
//     <ScrollView style={styles.container}>
//       <CircleCard activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
//       <PostCard activeCategory={activeCategory} />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f4f4f4',
//   },
// });

// export default Home;

// yeh uppar wala all set hai but now we are adding divider soo ..

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CircleCard from '../../Components/CircleCard/CircleCard'; // Adjust this import based on your folder structure
import PostCard from '../../Components/PostCard/PostCard';    // Adjust this import based on your folder structure
import TabNavigator from '../../Components/TabNavigator';
import TopBar from '../../Components/TopBar/TopBar';
import ReactangleCard from '../../Components/RectangleCard/RectangleCard';
import Banner from '../../Components/Banner/Banner';


const Home = () => {
  const [activeCategory, setActiveCategory] = useState('Home'); // Default category is "Home"

  return (
    <>
   
  <TopBar activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
  

    <View style={styles.container}>
      {/* <View style={styles.circleCardContainer}>
        <CircleCard activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      </View> */}
      {/* <View >
        <ReactangleCard activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      </View> */}
    
      {/* <ScrollView contentContainerStyle={styles.scrollView}> // virtualized erorr showing so commenting these part  */}
      {/* <Banner/> */}
   <View style={{ flex: 1 }}>
  <PostCard activeCategory={activeCategory} />
</View>

      {/* </ScrollView> */}
   
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  circleCardContainer: {
    marginTop: 40,  // Gap of 30 from the top
  },

  scrollView: {
    paddingHorizontal: 10, // To ensure spacing around post cards
    paddingBottom: 100,  // Add space at the bottom for better UI
  },
  divider: {
    borderBottomWidth: 1,   // Thin divider line
    borderBottomColor: '#ddd', // Light grey color for divider
    marginHorizontal: 16,  // Ensuring margin on both sides
    marginVertical: 16,   // Space between CircleCard and PostCard
  },
});

export default Home;
