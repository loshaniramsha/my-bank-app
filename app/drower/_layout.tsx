
import {Drawer} from "expo-router/drawer"
import {Animated} from "react-native";
import ScrollView = Animated.ScrollView;
import MobileMenu from "@/layout/mobile-menu";

const DrawerLayout=()=>{
    return <Drawer drawerContent={MobileMenu} screenOptions={{headerShown:false,drawerStyle:{
        width:240,
        }
    }}/>;
};
export default DrawerLayout;
