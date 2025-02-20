import {View,Text,StyleSheet} from 'react-native';
import {Link} from "expo-router";

const Index=()=>{

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Loshani Ramsha</Text>
            <Link href="/home" style={styles.link}>
                Go to Home
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {// Equivalent to Tailwind bg-gray-200
        backgroundColor: "#101010",
        height:"100%",
    },
    text: {
        color: "#fb0720", // Equivalent to Tailwind text-red-600
        fontSize: 18,
        fontWeight: "bold",

    },
    link: {
        color: "#e8c207",
        fontSize: 18,
        textDecorationLine: "underline",
    },
});

export default Index;