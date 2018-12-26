import React,{Component} from 'react';
import {View,Text,TouchableOpacity,Dimensions,AsyncStorage} from 'react-native';
let  dwidch = Dimensions.get('window').width;
export default class Asyncstorage extends Component {
  _save =async()=>
    {
      try{
        await AsyncStorage.setItem('@aaa:key','I like to save it.');
        await AsyncStorage.setItem('@v:key','I like to save it aaa.');

        console.log('save me');
      }catch(error){
        console.log(error);
      }
    }  
  _get= async()=>{
    try {
      const values = await AsyncStorage.getItem('@aaa:key')
      const values1 = await AsyncStorage.getItem('@v:key')
      console.log(values);
      console.log(values1);
    } catch (error) {
      
    }
  }
  render(){
    return(
      <View>
        <TouchableOpacity onPress={()=>{this._save()}}
         style={{width:dwidch,height:40,backgroundColor:'#ccc'}}> 
        <Text>Save</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>{this._get()}} style={{width:dwidch,height:40,backgroundColor:'blue'}}>
        <Text>Get</Text></TouchableOpacity>
      </View>
    )
  }
}
