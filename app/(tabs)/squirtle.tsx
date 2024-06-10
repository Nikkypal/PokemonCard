import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const details = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style ={styles.details}>Details</Text>
      <Text style={styles.charmander}>
        Squirtle's shell is a useful tool. It can withdraw 
        into the shell for protection or to sleep. The grooved, 
        rounded shape helps to reduce water resistance, allowing 
        the Pokémon to swim at high speeds. Squirtle can spray 
        foamy water from its mouth with great accuracy.</Text>
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
