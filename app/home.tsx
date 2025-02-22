import { View,StyleSheet, ScrollView } from "react-native";
import { Link } from "expo-router";
import PoppinsText from "@/layout/PoppinsText";

const Home = () => {
    return (
        <ScrollView style={styles.scrollerContainer}
                    showsVerticalScrollIndicator={false}>
            <AccountCard/>

        </ScrollView>

    );
};

const styles = StyleSheet.create({
    scrollerContainer: {
        height:"100%",
        width:"100%",
        paddingTop: 20,


    }

});

export default Home;


const AccountCard=()=>{
    return(
        <View style={style.cardContainer}>
            <PoppinsText style={style.textContainer}>Your Account</PoppinsText>
            <PoppinsText style={{color:"black",fontWeight:"bold",textAlign:"center",fontSize:27,marginTop:30,}}>Rs.50,000.000</PoppinsText>
        </View>
    )
}

const style=StyleSheet.create({
    textContainer: {
        color:"black",
        fontWeight:"bold",
    },
    cardContainer: {
        width:"100%",
        height:147,
        backgroundColor:"orange",
        borderRadius:15,
        boxShadow:"white",
        paddingTop:15,
    }
})

