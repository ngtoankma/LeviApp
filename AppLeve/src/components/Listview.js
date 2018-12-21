
import React, { Component } from 'react';
import { View,Text,ListView,Image } from 'react-native';
export default class Listview extends Component {
  constructor(props){
    super(props);
    this.state={
      dataSource: new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2})
    }
  }
  state = {  }
  render() {
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(r)=>
            <View>
            <Text>{r.ten}</Text>
             <Image source={{uri:r.hinh}} style={{width:70,height:70}} />
            
            </View>
           
          }
        />
      </View>
    )
  }
  componentDidMount(){
    // load data
    // var mang = ['111','222','333','dddd'];
    fetch('http://192.168.0.7/PHPService/service.php')
    .then((response)=>response.json())
    .then((responseJson)=>{
      console.log(responseJson);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseJson),
        
      })
    })
    .catch((error)=>{
      console.log(error);
    });
    
  }
}