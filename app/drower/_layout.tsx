
import {Drawer} from "expo-router/drawer"
import {Animated} from "react-native";
import ScrollView = Animated.ScrollView;

const DrawerLayout=()=>{
    return <Drawer drawerContent={MobileMenu} screenOptions={{headerShown:false,drawerStyle:{
        width:100,
        }
    }}/>;
};
export default DrawerLayout;

const MobileMenu=()=>{
    return <ScrollView style={{width:"100%",flex:1,backgroundColor:"red"}}></ScrollView>
}