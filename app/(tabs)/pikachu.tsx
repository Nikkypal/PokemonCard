import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const details = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style ={styles.details}>Details</Text>
      <Text style={styles.charmander}>
      Designed by Atsuko Nishida and Ken Sugimori, Pikachu first 
      appeared in the 1996 Japanese video games Pokémon Red and 
      Pokémon Green created by Game Freak and Nintendo, which were 
      released outside of Japan in 1998 as Pokémon Red and Pokémon Blue.
       Pikachu is a yellow, mouse-like creature with electrical abilities.</Text>
      </SafeAreaView>
  )
}

export default details

const styles = StyleSheet.create({
    container :{
        flex :1,
        backgroundColor:"@f5f5f5",
        alignItems:"center",
        paddingTop: Platform.OS === 'android'? 20 : 0
      },
    details:{
        fontSize:22,
        fontWeight:"bold",
        flexDirection:"row",
    backgroundColor:"white",
   },
   charmander:{
    flexDirection:"row",
    fontSize:23,
        fontWeight:"regular",
        padding:10
   }
})
