import React from 'react';
import { Text,Image, ImageBackground,StyleSheet, View } from 'react-native';

function WelcomeScreens(props) {
    return (
    <ImageBackground 
    
    style={styles.background}
    source={{uri:"https://i.pinimg.com/originals/49/73/5b/49735b38c27ca67787e201a8f4b0fd6d.jpg"}}>
        <View style={styles.logoContainer}>
        <Image style={styles.logo} source={{uri:"https://th.bing.com/th/id/R.bdb8948679e424c6d21af5a8b6d3aa6f?rik=IQA1MY2%2b5KA1Qg&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2014%2f03%2fvector-leaf-icon_156068.png&ehk=mbRfgfI14wou2tR%2fe0vh%2bKXEcj8x5HTODsL5V3Gj%2bgg%3d&risl=&pid=ImgRaw&r=0"}}/>
        <Text style={{color:"yellow",fontSize:20}}>Go,Vegan</Text>
            
        </View>
        <View style={styles.loginButton}></View>
        <View style={styles.RegisterButton}></View>
    </ImageBackground>
    
    );
}

const styles = StyleSheet.create({
   background:{
     flex:1,
     justifyContent:"flex-end",
     alignItems:"center"
   },
   loginButton:{
    width:'100%',
    height:70,
    backgroundColor:"yellow"
   },
   RegisterButton:{
    width:'100%',
    height:70,
    backgroundColor:"lightgreen"
   },
   logo:{
    width:"100",
    height:"100",
    position:"absolute",
    top:50
   },
   logoContainer:{
    
    position:"absolute",
    top:70,
    alignItems:"center"
   }
})

export default WelcomeScreens;