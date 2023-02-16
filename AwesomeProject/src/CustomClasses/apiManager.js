
import Axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from "react";

 class AppManager {

    static storeData = async (key,token) => {
        try {
          console.log("Data Save")
          await AsyncStorage.setItem(key, token)
        } catch (e) {
            console.log("Data Not Save")
        }
      }

      static getData = async (key) => {
        try {
          const value = await AsyncStorage.getItem(key)
          if(value !== null) {
            console.log("AsyncStorage token",key,value)
            return value
          }
        } catch(e) {
            console.log("error reading value")
        }
      }

    static postApiCall = async (email,password) => {
       
        console.log(email,password)
     
        const promise =  new  Promise(async (resolve, reject) => {

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
            console.log("@11",response)
            resolve(response) 
          })
          .catch((error) => {
            console.log("@@---",error.response)
            console.log("@@---",error)
            reject(error)
          })
      }
    )}
}

export default AppManager;