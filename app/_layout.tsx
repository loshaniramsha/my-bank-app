import { Slot } from "expo-router";
import { View, StyleSheet, StatusBar } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "@expo-google-fonts/poppins";
import { Poppins_400Regular,Poppins_500Medium,Poppins_600SemiBold,Poppins_700Bold} from "@expo-google-fonts/poppins";

import { useEffect, useCallback } from "react";

SplashScreen.preventAutoHideAsync(); // Prevents splash screen from auto-hiding before fonts are ready

const Layout = () => {
    const [fontsLoaded] = useFonts({
        Poppins: Poppins_400Regular, // ✅ Correct way to load the font
        Poppins_500Medium:Poppins_500Medium,
        Poppins_600SemiBold:Poppins_600SemiBold,
        Poppins_700Bold:Poppins_700Bold

    });


    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync(); // Hides splash screen when fonts are loaded
        }
    }, [fontsLoaded]);

    useEffect(() => {
        if (fontsLoaded) {
            console.log("Fonts Loaded Successfully");
        } else {
            console.log("Fonts Not Loaded");
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null; // Prevents rendering until fonts are loaded
    }

    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
            <StatusBar barStyle="light-content" backgroundColor="#101010" />
            <Slot />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 24,
        flex: 1,
        backgroundColor: "#101010",
    },
});

export default Layout;
