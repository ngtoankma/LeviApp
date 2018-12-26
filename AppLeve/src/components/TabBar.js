import React,{Component} from 'react';
import {View,Text,TouchableOpacity,Dimensions,AsyncStorage,Image} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

let  dwidch = Dimensions.get('window').width;
export default class TabBar extends Component {
 constructor(props){
   super(props);
   this.state={
     selectedTab:'home'
   }
 }
  render(){
    return(
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="Home"
          renderIcon={() => <Image style={{width:20,height:20}} source={require('../isset/image/home_black.png')} />} // icon 
          renderSelectedIcon={() => <Image style={{width:20,height:20}} source={require('../isset/image/home_select.png')}/>} //icon selected
          badgeText="1"
          onPress={() => this.setState({ selectedTab: 'home' })}>
          <View style={{flex:1,backgroundColor:'yellow'}}></View>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'profile'}
          title="Profile"
          renderIcon={() => <Image source={require('../isset/image/profile_black.png')} />}
          renderSelectedIcon={() => <Image source={require('../isset/image/profile_slect.png')} />}
          // renderBadge={() => <CustomBadgeView />}
          onPress={() => this.setState({ selectedTab: 'profile' })}>
          <View style={{flex:1,backgroundColor:'red'}}></View>
        </TabNavigator.Item>
    </TabNavigator>
    )
  }
}
