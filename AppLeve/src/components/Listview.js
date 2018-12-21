
import React, { Component } from 'react';
import { View,Text,ListView,Image,RefreshControl,Dimensions,TouchableOpacity} from 'react-native';
let Dwith = Dimensions.get('window').width;
export default class Listview extends Component {
  constructor(props){
    super(props);
    this.state={
      refreshing:false,
      dataSource: new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2}),
      trang:0,
    }
  }

  state = {  }

  loadnewdata(){
    this.setState({
      refreshing:true,
    });

    fetch(`http://192.168.0.7/PHPService/service.php?trang=`+this.state.trang)
    .then((response)=>response.json())
    .then((responseJson)=>{
      console.log(responseJson);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseJson),
        refreshing:false,
        trang:this.state.trang+1
        
      })
    })
    .catch((error)=>{
      console.log(error);
    });
  }

  render() {
    return (
      <View style={{flex:1,left:0}}>
        <ListView style={{flex:1,width:Dwith}}
          refreshControl={
            <RefreshControl 
              refreshing={this.state.refreshing}
              onRefresh={this.loadnewdata.bind(this)}
             
            />
          }
          dataSource={this.state.dataSource}
          renderRow={(r)=>
            <View style={{paddingLeft:10,flex:1,borderBottomColor:'black',borderBottomWidth:1,left:0}}>
            <Text>{r.id}</Text>
            <Text>{r.ten}</Text>
             <Image source={{uri:r.hinh}} style={{width:100,height:70,flex:1}} />
              <Text>Hello</Text>
            </View>
           
          }
        />
        <TouchableOpacity onPress={this.loadnewdata.bind(this)}><Text>>>></Text></TouchableOpacity>
      </View>
    )
  }
  componentDidMount(){
    // load data
    // var mang = ['111','222','333','dddd'];
    var mang=[];
    fetch('http://192.168.0.7/PHPService/service.php?trang='+this.state.trang)
    .then((response)=>response.json())
    .then((responseJson)=>{
      console.log(responseJson);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseJson),
        trang:this.state.trang+1
      })
    })
    .catch((error)=>{
      console.log(error);
    });
    
  }
}