// import { Image, StyleSheet, Platform } from 'react-native';

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

// export default function HomeScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//       headerImage={
//         <Image
//           source={require('@/assets/images/partial-react-logo.png')}
//           style={styles.reactLogo}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Welcome!</ThemedText>
//         <HelloWave />
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 1: Try it</ThemedText>
//         <ThemedText>
//           Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
//           Press{' '}
//           <ThemedText type="defaultSemiBold">
//             {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
//           </ThemedText>{' '}
//           to open developer tools.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 2: Explore</ThemedText>
//         <ThemedText>
//           Tap the Explore tab to learn more about what's included in this starter app.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
//         <ThemedText>
//           When you're ready, run{' '}
//           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//         </ThemedText>
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });

import { StyleSheet, SafeAreaView,Platform, ScrollView,Button } from "react-native";
import PokmonCard from "./PokemonCard";
import { Component } from "react";
import { Link } from "expo-router"; 
export default  function App (){

  const charmandarData = {
    name: "Charmandar",
    image: require("../assets/charmander.jpg"),
    type:"Fire",
    hp: 39,
    moves: ["Scratch", "Ember","Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
  }
  const squirtleData = {
    name: "Squirtle",
    image: require("../assets/squirtle.jpg"),
    type:"Water",
    hp: 44,
    moves: ["Tackle", "Water Gun","Tail Whip ", "Withdraw"],
    weaknesses: ["Electric", "Grass"],
  }
  const bulbasaurData = {
    name: "Babbasaur",
    image: require("../assets/Bulbasaur.png"),
    type:"Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip","Growl", "Leech Seed"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  }
  const pikachuData = {
    name: "Pikachu",
    image: require("../assets/pikachu.jpg"),
    type:"Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt","Growl", "Tail Whip"],
    weaknesses: ["Ground"],
  }
  return <SafeAreaView style={styles.container}>
    <ScrollView > 
      <SafeAreaView style={styles.content}>
      <Link href ="./(tabs)/details">
      <PokmonCard {...charmandarData}/>
    </Link>
    </SafeAreaView>
    <SafeAreaView style={styles.content}>
    <Link  href="./(tabs)/squirtle">
    <PokmonCard {...squirtleData}/>
    </Link>
    </SafeAreaView> 
    <SafeAreaView style={styles.content}>
    <Link href="./(tabs)/bulbasaur">
    <PokmonCard {...bulbasaurData}/>
    </Link>
    </SafeAreaView >
    <SafeAreaView style={styles.content}>
    <Link href="./(tabs)/pikachu">
    <PokmonCard {...pikachuData}/>
    </Link>
    </SafeAreaView>
    </ScrollView>
  </SafeAreaView>
}

const styles = StyleSheet.create ({
  container :{
    flexDirection :"row",
    
    alignItems:"center",
    
    backgroundColor:"@f5f5f5",
    paddingTop: Platform.OS === 'android'? 15.0 : 0,
    
  },
  content:{
    flexDirection:"column",
    padding:10,
    alignItems:"center",
    justifyContent:"center",
  

  }
})
