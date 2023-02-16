
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
  Button,ActivityIndicator,
  
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { color } from 'react-native-reanimated';
import ForgotPass from './ForgotPass';
import manager from '../CustomClasses/apiManager'
import Axios from 'axios'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


  
function Login({ navigation, }){
  const [email, setEmail] = useState("clint.yvonne@example.com");
  const [password, setPassword] = useState("NotAnIssue@1");
  const [loading, setLoading] = useState(false);
  var loginResp = {};

  const axiosApiCall = () => {
    setLoading(true);
    Axios({
      "method": "POST",
      "url": "https://dev-ambassador-api.getambassador.dev/auth/ambassador/?host=deepchestnutstrongdev.getambassador.dev",
      data:  {
        "email": email,
        "password": password,
        "device_id":"4343434343432312243434",
         "device_type":"0",
         "fp": {}
      }
    })
      .then((response) => {
        loginResp =  response
        let token = loginResp.data.token
        console.log("@response",loginResp)
        manager.storeData('@token',token)
        manager.storeData('@isLogin',"1")
        let vll = manager.getData('@isLogin')
        console.log("vll",vll)
        setLoading(false);
        navigation.navigate('Home', {resp: loginResp })
      })
      .catch((error) => {
        console.log("@@---",error.response)
        setLoading(false);
      })
  }

  if(loading){
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large"/>
        </View>
    );
 }
  
  return(
    <SafeAreaView style={styles.container}> 
     <ScrollView style={styles.scrollView_style}>
   
      <View style={styles.main_style}>
       <Image style={styles.tinyLogo} source={require('../assets/avatar.png')}/>
      <TextInput style={styles.txt_style}  
           placeholder="Email"  
           onChangeText={(email) => setEmail(email)}
      /> 
       <TextInput style={styles.txt_style}  
           placeholder="Password"  
           onChangeText={(password) => setPassword(password)}
      />  
       
       <TouchableOpacity style={styles.loginBtn}  onPress={axiosApiCall}>
        <Text style={styles.loginText}>Sign In</Text> 
      </TouchableOpacity >

        <View style ={{marginTop:15}}>
         <Button onPress={()=>navigation.navigate('ForgotPass')} title="Forgot Paasword" color="blue"/>
        </View>

        <HStack m={20} spacing={5
        }>
        <Text style={{fontSize:18}}>Don't have an account</Text>
        <TouchableOpacity  onPress={() => navigation.navigate('SignUp')}>
          <Text style={{fontSize:18,color:'blue',fontWeight:"bold"}}>Sign up</Text> 
        </TouchableOpacity >
        <Text style={{fontSize:18}}>now</Text>
        </HStack>
  
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
   color: 'black',
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
      marginTop:80,
      marginBottom: 20,
      borderRadius: 100 / 2,
     },
});

export default Login;
