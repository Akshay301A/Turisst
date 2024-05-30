import { TouchableOpacity, View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import app from './../../assets/Images/Login.jpg'
import Colors from '../../assets/Shared/Colors';
//import LoginButton from './../Components/LoginButton';

const myObject = { width: 400, height: 550 };


export default function Login() {
  return (
    <View style={{alignItems:'center'}}>
      <Image source={app}
      style = {styles.appImage}
      />
      <View style={{backgroundColor:Colors.white,
        padding:18,
        alignItems:'center',
        marginTop:-80,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
      }}>
        <Text style={styles.heading}>Ultimate AI TRAVEL GUIDE</Text>
        <Text style={styles.heading}>Plan your Trips</Text>
        <Text style={{textAlign:'center',marginTop:20,}}>
            Explore Beyond the Horizon
        </Text>
        <Text style={styles.loginButton}>Login With Google</Text>


        </View>

      </View>
  )
}

const styles = StyleSheet.create({
    appImage: {
        width:myObject.width,
        height:myObject.height,
        objectFit:'cover',
        marginTop:0,
        borderRadius:20,
        borderWidth:6,
        borderColor:'#000'
    },
    heading:{
        fontSize:24,
        fontWeight:'bold'
    },
    loginButton: {
        backgroundColor: Colors.PRIMARY, // Use your primary color
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 90, // Make it a rounded button
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonText: {
        fontSize: 17,
        color: Colors.white, // Use your white color
      },
    })