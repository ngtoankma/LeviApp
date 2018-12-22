import React,{Component} from 'react'; //imp
import { View,Text,TextInput,Dimensions,TouchableOpacity } from 'react-native'; //imd
let Dwidth =Dimensions.get('window').width-20;
// ecl
export default class SideBar extends Component { 
  constructor(props){
    super(props);
    this.state={
      name:'',
      user:'',
      pass:'',
      reser:'..'
    }
  }

  _click(){

    fetch('http://192.168.0.7/PHPService/dangki.php',{
      method:'POST',
      headers: {
        Accept:'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        'name':this.state.name, //chuyen du lieu
        'user':this.state.user,
        'pass':this.state.pass,
      })
    }) //chuyen tham so
    .then((response)=>response.json())
    .then((responseJson)=>{
      this.setState({reser:responseJson.id})
    })
    .catch((error)=>{
      console.log(error);
    });

  }

  render(){
    return(
      <View style={{flex:1,alignContent:'center',alignItems:'center'}}>

        <Text>Name</Text>
        <TextInput placeholder='Ho ten'
        style={{borderColor:'black',borderWidth:1,height:50,width:Dwidth}}
         onChangeText={(name)=>this.setState({name})}
         value={this.state.name}
         ></TextInput>

        <Text>user</Text>
        <TextInput placeholder='User'
         style={{borderColor:'black',borderWidth:1,height:50,width:Dwidth}}
         onChangeText={(user)=>this.setState({user})}
         value={this.state.user}
         ></TextInput>

         <Text>Pass</Text>
        <TextInput placeholder='password'
        style={{borderColor:'black',borderWidth:1,height:50,width:Dwidth}}
         onChangeText={(pass)=>this.setState({pass})}
         value={this.state.pass}
         ></TextInput>

         <TouchableOpacity onPress={()=>{this._click()}} style={{width:Dwidth,height:50,backgroundColor:'#ccc'}}>
         <Text>Gui</Text></TouchableOpacity>

          <View  style={{width:Dwidth,height:50,backgroundColor:'yellow'}}>
            <Text>{this.state.reser}</Text>
          </View>

      </View>
    )
  }
};
