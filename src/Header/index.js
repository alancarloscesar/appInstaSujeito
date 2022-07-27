import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity,Image } from 'react-native';

export default function Header() {
 return (
   <View style={styles.header}>
       <StatusBar  />

       <TouchableOpacity>
           <Image
           source={require('../img/logo.png')}
           style={styles.logo}
           />
       </TouchableOpacity>

       <TouchableOpacity>
           <Image
           source={require('../img/send.png')}
           style={styles.send}
           />
       </TouchableOpacity>

   </View>
  );
}

const styles = StyleSheet.create({
    header:{
        height: 55,
        backgroundColor:'#fff',
        flexDirection:'row',
        marginTop:'7%',
        alignItems:'center',
        justifyContent:'space-between',
        paddingStart:15,
        paddingEnd:15,
        borderBottomWidth:0.2,
        shadowColor:'#000',
        elevation: 7

    },
    send:{
        width: 24,
        height: 24
    }
})