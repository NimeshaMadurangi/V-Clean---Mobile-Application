// import React from 'react';
// import { View, Text, StyleSheet, Dimensions } from 'react-native';
// import Carousel from 'react-native-snap-carousel';
// import { Image } from 'react-native-svg';

// const { width: screenWidth } = Dimensions.get('window');

// export default function MyCarousel() {
//   const data = [
//     { title: 'Item 1'  },
//     { title: 'Item 2' },
//     { title: 'Item 3' },
//     { title: 'Item 4' },
//     // Add more items as needed
//   ];

//   const renderItem = ({ item }) => (
//     <View style={styles.item}>
//       <Text style={styles.title}>{item.title}</Text>
//       <Text style={{color:'red'}}>thushan</Text>
//     </View>
//   );

//   return (
//     <View style={[styles.container,{marginTop:150}]}>
//       <Carousel
//         layout={'default'}
//         data={data}
//         renderItem={renderItem}
//         sliderWidth={screenWidth}
//         itemWidth={screenWidth * 0.8} // Adjust the width of your items as needed
//         autoplay={true} // Enable autoplay
//         autoplayInterval={3000} // Set the interval for automatic move (in milliseconds)
//         loop={true} // Enable loop for continuous scrolling
//         scrollEnabled={true} // Enable manual scrolling
//         horizontal={true} // Set scroll direction to horizontal
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   item: {
//     width: screenWidth * 0.8, // Adjust the width of your items as needed
//     height: 200, // Adjust the height of your items as needed
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     elevation: 3,
//   },
//   title: {
//     fontSize: 24,
//     color:'black'
//   },
// });
