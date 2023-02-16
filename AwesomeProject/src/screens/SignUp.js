
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Dimensions,
  Text,
  useColorScheme,
  View, Image, StyleSheet, TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


function SignUp({ navigation }){
  
  return(
    <SafeAreaView style={styles.container}> 
    <ScrollView style={styles.scrollView_style}>
      <View style={styles.main_style}>
      <Image style={styles.tinyLogo} source={require('../assets/avatar.png')}/>

      <Text style={styles.HeadingText}>EARN REWARD</Text> 

      <View style={styles.sepratorLine}></View>

      <Text style={styles.subHeadText}>Sign up today and start earning rewards for referring your friends and family!</Text> 

      <Text style={styles.HeadingText}>Refer and Earn!</Text> 

      <Text style={styles.subHeadText}>Help us grow and earn rewards!</Text> 

      <TextInput style={styles.txt_style}  
           placeholder="First name"  
           onChangeText={(text) => this.setState({text})}
      /> 
      <TextInput style={styles.txt_style}  
           placeholder="Last name"  
           onChangeText={(text) => this.setState({text})}
      /> 
      
      <TextInput style={styles.txt_style}  
           placeholder="Email"  
           onChangeText={(text) => this.setState({text})}
      /> 
      
      <TouchableOpacity style={styles.signInBtn}  onPress={ "navigation.goBack"}>
        <Text style={styles.signUpText}>Become a Partner!</Text> 
      </TouchableOpacity >

      <TouchableOpacity style={styles.loginBtn}  onPress={ navigation.goBack}>
        <Text style={styles.loginText}>Log in</Text> 
      </TouchableOpacity >
    
      </View>
    </ScrollView>
    </SafeAreaView>   
   
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  scrollView_style:{
    height: '100%', 
    width: '100%', 
    backgroundColor:'#fff',
   },
  buttonContainer: {
    backgroundColor: 'blue',
    borderRadius: 10,
    width:'80%',
    height:42,
    marginTop:20,
  },
 main_style:{
    height: '100%', 
    width: '100%', 
    backgroundColor: 'white', 
    alignItems: 'center'
   },
 txt_style:{
  fontSize: 17,
  color: 'white',
  marginTop: 15,
  width:'80%',
  height:45,
  borderWidth:1,
  borderRadius: 10,
  borderColor:'gray',
  padding:10,
  },
  button_style:{
    fontSize: 20,
    width:windowWidth-50,
    height:45,
    padding:10,
    marginTop: 0,
    backgroundColor:"blue",
    
    },
 
    tinyLogo: {
     width: 100,
     height: 100,
     marginTop:40,
     marginBottom:20,
   },
   signInBtn: {
    width: "80%",
    borderRadius: 10,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#FF1493",
  },
  loginBtn: {
    width: "80%",
    borderRadius: 10,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderWidth:1,
    borderColor:'gray',
    marginBottom: 50,
  },
   signUpText:{
    alignItems: "center",
    color:"white",
    fontSize:17,
  },
  loginText:{
    alignItems: "center",
    color:"black",
    fontSize:17,
  },

  HeadingText:{
    color:"black",
    fontSize:17,
    marginTop:20,
    fontWeight:"bold",
    justifyContent: 'flex-start',
    textAlign: 'left',
    width: "80%",
  },

  subHeadText:{
    color:"black",
    fontSize:15,
    marginTop:2,
    justifyContent: 'flex-start',
    textAlign: 'left',
    marginBottom:15,
    width: "80%",
  },

  sepratorLine:{
    height: 1,
    width: '80%',
    backgroundColor: '#909090',
    marginTop:20,
    marginBottom:20,
  },

});

export default SignUp;
