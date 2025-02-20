import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Link } from "expo-router";

const Home = () => {
    return (
        <ScrollView style={styles.scrollerContainer}
                    showsVerticalScrollIndicator={false}>

        </ScrollView>

    );
};

const styles = StyleSheet.create({
    scrollerContainer: {
        height:"100%",


    }

});

export default Home;

