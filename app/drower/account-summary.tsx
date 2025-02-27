import { View, StyleSheet, TouchableOpacity } from "react-native";
import PoppinsText from "@/layout/poppins-text";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { SetStateAction, useState} from "react";

const bankAccountArray = ["666666666666", "555555555555", "444444444444","333333333333","222222222222"];

const AccountSummary = () => {
    const router = useRouter();
    const [showOtherAccounts, setShowOtherAccounts] = useState(false);
    const [activeAccount, setActiveAccount] = useState("888888888888");

    const handleAccountSelect = (account: SetStateAction<string>) => {
        setActiveAccount(account); // Set selected account as active
        setShowOtherAccounts(false); // Close dropdown
    };

    return (
        <View style={style.container}>
            <View style={style.accountContainer}>
                {/* Back Button */}
                <AntDesign onPress={() => router.back()} name="left" size={24} color="orange" />

                {/* Account Details */}
                <View style={style.accountDetails}>
                    <PoppinsText style={style.accountText}>{activeAccount}</PoppinsText>

                    {/* Dropdown Button */}
                    <TouchableOpacity onPress={() => setShowOtherAccounts(!showOtherAccounts)}>
                        <AntDesign name="caretdown" size={24} color="orange" />
                    </TouchableOpacity>

                    {/* Other Accounts Dropdown */}
                    {showOtherAccounts && (
                        <View style={style.otherAccount}>
                            {bankAccountArray.map((acc, index) => (
                                <TouchableOpacity key={index} onPress={() => handleAccountSelect(acc)}>
                                    <PoppinsText style={style.accountText}>{acc}</PoppinsText>
                                </TouchableOpacity>
                            ))}
                        </View>
                    )}
                </View>
            </View>
        </View>
    );
};

/* Styles */
const style = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        backgroundColor: "#101010",
    },
    accountContainer: {
        width: "95%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#272727",
        padding: 15,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
        marginHorizontal: 10,
        marginTop: 10,
    },
    accountDetails: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
    },
    accountText: {
        fontSize: 18,
        color: "#ffffff",
        fontWeight: "700",
        textAlign: "center",
        marginLeft: 10,
        paddingVertical: 5, // Better touch area
    },
    otherAccount: {
        position: "absolute",
        top: 40,
        right: 0,
        width: 160,
        backgroundColor: "#3a3838",
        borderRadius: 8,
        padding: 10,
        zIndex: 50,
    },
});

export default AccountSummary;

