import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const details = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style ={styles.details}>Details</Text>
      <Text style={styles.charmander}>
      Bulbasaur is a fictional Pokémon species in Nintendo and Game
       Freak's Pokémon franchise. Designed by Atsuko Nishida, Bulbasaur
        is a Grass and Poison-type, first appearing in Pocket Monsters:
         Red and Green (Pokémon Red and Blue outside Japan) as a starter Pokémon.</Text>
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
