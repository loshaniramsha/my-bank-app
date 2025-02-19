import {View,Text,StyleSheet} from 'react-native';

const Index=()=>{
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Loshani</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#476ab1", // Equivalent to Tailwind bg-gray-200
    },
    text: {
        color: "#04122e", // Equivalent to Tailwind text-red-600
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default Index;