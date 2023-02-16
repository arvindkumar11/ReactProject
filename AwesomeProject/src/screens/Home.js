import React,{ useState } from 'react';
import { Stack, HStack, VStack } from 'react-native-flex-layout';
import { DataTable } from 'react-native-paper';
import QRCode from 'react-native-qrcode-svg';
import manager from '../CustomClasses/apiManager'

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
  
function Home({ navigation, route}){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  var loginResp = route.params;
  console.log("@@Home1",loginResp)

  

  return (
    <SafeAreaView > 
    <ScrollView style={styles.scrollView_style}>
    <DataTable style={styles.container}>
      
      <DataTable.Row >
        <Text style={styles.textStyle}>Campaign URL</Text>
    
      </DataTable.Row>
      <DataTable.Row style={styles.rowStyle}>
        <TextInput style={styles.txt_style}>Campaign URL</TextInput>
    
      </DataTable.Row>

      <DataTable.Row style={styles.rowStyle }>
        <View style={styles.txt_style}>
         <HStack  style={{flexDirection:"row",justifyContent:'space-between'}}>
          <Text style={{fontSize:18,color:'gray',}}>All Campaigns</Text>
           <Image style={{width:22,height:22,}} source={require('../assets/down_icon.png')}/>
          </HStack> 
        </View>
      </DataTable.Row>

      <DataTable.Row style={styles.rowStyle}>
       <VStack>
        <HStack  spacing={'3%'}  style={{marginTop:10}}>
          <View style={styles.view_round}>
          <VStack style={styles.ImageContainer}>
          <Image style={styles.imageStayle} source={require('../assets/earn.png')}/>
          <Text style={styles.circleText}>Earned</Text>
          <Text style={styles.circleText}>$100.0</Text>
          </VStack>
          </View>
           <View style={styles.view_round}>
           <VStack style={styles.ImageContainer}>
          <Image style={styles.imageStayle} source={require('../assets/like.png')}/>
          <Text style={styles.circleText}>Awaiting Payout</Text>
          <Text style={styles.circleText}>$100.0</Text>
          </VStack>
          </View>
        </HStack>
        <HStack  spacing={'3%'}  style={{marginTop:8}}>
          <View style={styles.view_round}>
          <VStack style={styles.ImageContainer}>
          <Image style={styles.imageStayle} source={require('../assets/clock.png')}/>
          <Text style={styles.circleText}>Awaiting Approval</Text>
          <Text style={styles.circleText}>$100.0</Text>
          </VStack>
          </View>
           <View style={styles.view_round}>
           <VStack style={styles.ImageContainer}>
          <Image style={styles.imageStayle} source={require('../assets/cal.png')}/>
          <Text style={styles.circleText}>Paid To Data</Text>
          <Text style={styles.circleText}>$100.0</Text>
          </VStack>
          </View>
        </HStack>
        </VStack>  
      </DataTable.Row>
      
      <DataTable.Row style={styles.rowStyle }>
      <View style={styles.viewQR}>
          <VStack style={styles.ImageContainer}>
          <Text style={{marginTop:15,fontSize:18,fontWeight:'bold',color:'black'}}>
            My Campaign
          </Text>
          <Text style={{marginTop:15,fontSize:18,width:'90%',fontWeight:'400',color:'gray'}}>
            Testing purpose
          </Text>
          <HStack spacing={'20%'}>
      
          <TouchableOpacity style={styles.styleBtn}  onPress={() => navigation.navigate('Home')}>
           <Text style={styles.btnText}>Copy Link</Text> 
         </TouchableOpacity >

         <TouchableOpacity style={styles.styleBtn}  onPress={() => navigation.navigate('Home')}>
           <Text style={styles.btnText}>Share</Text> 
         </TouchableOpacity >

          </HStack>

          <View style={styles.imageQR} >
          <QRCode
           size ={windowWidth-160}
           value={'NA'}
           logoBackgroundColor='transparent'/>
          </View>
          <Text style={{marginTop:20,fontSize:17,color:'black'}}>
             Scan QR code to get shared link.
          </Text>
          </VStack>
      </View>  
      </DataTable.Row>

    </DataTable>
    </ScrollView>
    </SafeAreaView>  
)
  
};

const styles = StyleSheet.create({
  ImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
    container: {
      paddingTop: 10,
    },
    view_round:{
     width:'48.5%',
     height: undefined,
     aspectRatio: 1/0.82,
     backgroundColor:'#d3d3d3',
     borderRadius:10, 
     overflow:'hidden'
    },

    viewQR:{
      marginTop:20,
      width:'100%',
      height: 450,
      backgroundColor:'#d3d3d3',
      borderRadius:10, 
      overflow:'hidden'
     },
   
    txt_style:{
        fontSize: 20,
        color: 'gray',
         marginBottom: 12,
         left: 0,
         width:'100%',
         height:45,
         borderWidth:1,
         borderRadius: 10,
         borderColor:'gray',
         padding:10,
        },
    rowStyle: {
        borderBottomWidth: 0,
        marginTop:0,
      },
    tableHeader: {
      backgroundColor: '#DCDCDC',
    },
    textStyle:{
     color: 'black',
     fontSize:25,
     textAlign:"center",
     width: "100%",
     marginBottom:0,
    },
    circleText:{
      color: 'gray',
      fontSize:15,
      fontWeight:"bold",
      textAlign:"center",
      marginTop:6,
      width: "100%",
     },
    imageStayle:{
      width:'32%',
      height: undefined,
      marginTop:'11%',
      aspectRatio: 1/1,
      borderRadius: Dimensions.get('window').width,
    },
    styleBtn: {
      width: "35%",
      borderRadius: 22,
      height: 44,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      backgroundColor: "#027AFD",
    },
    btnText:{
      alignItems: "center",
      color:"white",
      fontSize:17,
    },

    imageQR:{
      justifyContent: 'center',
      alignItems: 'center',
      width:'80%',
      height: undefined,
      marginTop:'10%',
      aspectRatio: 1/0.78,
    },

  });
export default Home;
