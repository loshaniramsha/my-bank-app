import {Animated, Dimensions, StyleSheet, TouchableOpacity, View} from "react-native";
import ScrollView = Animated.ScrollView;
import DrawerLayout from "@/app/drower/_layout";
import AccountDetails from "@/component/account-details";
import {AntDesign} from "@expo/vector-icons";
import PoppinsText from "@/layout/poppins-text";

const { width: dWidth } = Dimensions.get("window");

const Home = () => {
    return (
        <ScrollView style={styles.scrollerContainer} showsVerticalScrollIndicator={false}>
            <DrawerLayout/>
            {/* Account Card */}
            {/*<AccountCard />*/}
            <AccountDetails/>
            {/* Service Section */}
            <ServiceSection />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollerContainer: {
        backgroundColor: "#101010",
        height: "100%",
        width: "100%",
        paddingTop: 20,
    },
});

export default Home;

/* Service Section */
const ServiceSection = () => {
    return (
        <View style={style.serviceSection}>
            <ServiceBlock name="mobile1" title="Reload" />
            <ServiceBlock name="creditcard" title="Bill Pay" />
            <ServiceBlock name="shoppingcart" title="Shopping" />
            <ServiceBlock name={"bank"} title="Bank Deposite"/>
        </View>
    );
};



/* Service Block */
// @ts-ignore
const ServiceBlock = ({ name, title }) => {
    return (
        <TouchableOpacity style={style.serviceBlock}>
            <AntDesign style={{ marginTop: 10, marginBottom: 3 }} name={name} size={37} color="orange" />
            <PoppinsText style={{ marginTop: 7 ,color:"white"}}>{title}</PoppinsText>
        </TouchableOpacity>
    );
};

/* Styles */
const style = StyleSheet.create({
    textContainer: {
        color: "black",
        fontWeight: "bold",
    },
    cardContainer: {
        width: "100%",
        height: 147,
        backgroundColor: "orange",
        borderRadius: 15,
        paddingTop: 15,
        alignItems: "center",
        justifyContent: "center",
    },
    serviceSection: {
        width: "100%",
        color:"white",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 17,
        paddingTop:7,
        paddingHorizontal: 10,
    },
    serviceBlock: {
        width: dWidth / 2 - 25,
        height: 90,
        backgroundColor: "#272727",
        borderRadius: 7,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
    },
});

