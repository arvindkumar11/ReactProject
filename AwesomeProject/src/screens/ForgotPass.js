
import React,{ useState } from 'react';
import { Stack, HStack, VStack } from 'react-native-flex-layout';


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
import { color } from 'react-native-reanimated';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
  
function ForgotPass({ navigation }){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return(
    <SafeAreaView style={styles.container}> 
     <ScrollView style={styles.scrollView_style}>
      <View style={styles.main_style}>
       <Image style={styles.tinyLogo} source={require('../assets/avatar.png')}/>
      <TextInput style={styles.txt_style}  
           placeholder="Email"  
           onChangeText={(email) => setPassword(email)}
      /> 
       <TouchableOpacity style={styles.loginBtn}  onPress={""}>
        <Text style={styles.loginText}>Send </Text> 
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
  loginBtn: {
    width: "80%",
    borderRadius: 10,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#FF1493",
  },
  loginText:{
    alignItems: "center",
    color:"white",
    fontSize:17,
  },
 main_style:{
    height: '100%', 
    width: '100%', 
    backgroundColor: 'white', 
    alignItems: 'center'
   },
   scrollView_style:{
    height: '100%', 
    width: '100%', 
    backgroundColor:'#fff',
   },
 txt_style:{
  fontSize: 20,
  color: 'white',
  marginTop: 15,
   width:'80%',
   height:45,
   borderWidth:1,
   borderRadius: 10,
   borderColor:'gray',
   padding:10,
  },

    tinyLogo: {
      width: 100,
      height: 100,
      marginTop:100,
      marginBottom: 20,
      borderRadius: 100 / 2,
     },
});

export default ForgotPass;
