import {Slot} from "expo-router";
import {View,StyleSheet,StatusBar} from "react-native";
import {Colors} from "@expo/config-plugins/build/android";

const height=StatusBar.currentHeight

console.log(height);
const Layout=()=>{
  return <View style={style.container}>
    <StatusBar barStyle="light-content" backgroundColor="#101010" />
    <Slot/>
  </View>

}
const style=StyleSheet.create({
  container: {
   paddingTop:24,
    flex:1,
    backgroundColor:"#101010"
  }
})
export default Layout;