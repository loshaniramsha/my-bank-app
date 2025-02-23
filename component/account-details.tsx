
import {View, StyleSheet, TouchableOpacity} from "react-native";
import PoppinsText from "@/layout/poppins-text";
import {Entypo, EvilIcons, FontAwesome5} from "@expo/vector-icons";
import {useNavigation} from "expo-router";

interface INavigation{openDrawer:()=>void }

const AccountDetails = () => {
    const navigation:INavigation=useNavigation();

    return (
        <View style={styles.container}>
            {/* Greeting & Menu Icon */}
            <View style={styles.header}>
                <TouchableOpacity onPress={navigation.openDrawer}>
                    <Entypo name="menu" size={28} color="balck" style={styles.menuIcon} />
                </TouchableOpacity>

                <PoppinsText style={styles.greetingText}>
                    Hi <PoppinsText style={styles.nameText}>Loshani</PoppinsText>
                </PoppinsText>
                <TouchableOpacity>
                    <FontAwesome5  name="bell" size={24} color="black" />
                </TouchableOpacity>

            </View>

            {/* Account Card */}
            <View style={styles.cardDetails}>
                <PoppinsText style={styles.textContainer}>Your Account</PoppinsText>
                <PoppinsText style={styles.amountText}>Rs.50,000.00</PoppinsText>
            </View>
        </View>
    );
};

/*Style Section*/
const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingVertical: 20,
        paddingHorizontal: 15,
        backgroundColor: "orange",
        alignItems: "center",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-between",
        marginBottom: 15,
    },
    menuIcon: {
        marginRight: 10,
    },
    greetingText: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
    },
    nameText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
    cardDetails: {
        width: "90%",
        height: 160,
        backgroundColor: "#101010",
        borderRadius: 15,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 8,
    },
    textContainer: {
        color: "orange",
        fontWeight: "bold",
        fontSize: 18,
    },
    amountText: {
        color: "orange",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 30,
        marginTop: 10,
    },
});

export default AccountDetails;

