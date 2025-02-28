import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import PoppinsText from "@/layout/poppins-text";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";

const bankAccountArray = ["666666666666", "555555555555", "444444444444", "333333333333", "222222222222"];

// Sample transaction data
const transactionsData = {
    "888888888888": [
        { id: 1, type: "Deposit", amount: "+$500", date: "2025-02-26" },
        { id: 2, type: "Withdrawal", amount: "-$200", date: "2025-02-25" },
    ],
    "666666666666": [
        { id: 3, type: "Deposit", amount: "+$700", date: "2025-02-20" },
        { id: 4, type: "Transfer", amount: "-$100", date: "2025-02-18" },
    ],
    "555555555555": [
        { id: 5, type: "Deposit", amount: "+$300", date: "2025-02-15" },
    ],
    "444444444444": [
        { id: 1, type: "Deposit", amount: "+$500", date: "2025-02-26" },
        { id: 2, type: "Withdrawal", amount: "-$200", date: "2025-02-25" },
    ],
    "333333333333": [
        { id: 1, type: "Deposit", amount: "+$500", date: "2025-02-26" },
        { id: 2, type: "Withdrawal", amount: "-$200", date: "2025-02-25" },
    ],
    "222222222222": [
        { id: 1, type: "Deposit", amount: "+$500", date: "2025-02-26" },
        { id: 2, type: "Withdrawal", amount: "-$200", date: "2025-02-25" },
    ],
};

const AccountSummary = () => {
    const router = useRouter();
    const [showOtherAccounts, setShowOtherAccounts] = useState(false);
    const [activeAccount, setActiveAccount] = useState("888888888888");

    const handleAccountSelect = (account: string) => {
        setActiveAccount(account);
        setShowOtherAccounts(false);
    };

    return (
        <View style={style.container}>
            {/* Account Selection */}
            <View style={style.accountContainer}>
                <AntDesign onPress={() => router.back()} name="left" size={24} color="orange" />

                <TouchableOpacity style={style.accountDetails} onPress={() => setShowOtherAccounts(!showOtherAccounts)}>
                    <PoppinsText style={style.accountText}>{activeAccount}</PoppinsText>
                    <AntDesign name="caretdown" size={20} color="orange" />
                </TouchableOpacity>
            </View>

            {/* Other Accounts Dropdown */}
            {showOtherAccounts && (
                <View style={style.otherAccount}>
                    <ScrollView>
                        {bankAccountArray.map((acc, index) => (
                            <TouchableOpacity key={index} style={style.accountOption} onPress={() => handleAccountSelect(acc)}>
                                <PoppinsText style={style.accountText}>{acc}</PoppinsText>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
            )}

            {/* Transaction Summary */}
            <PoppinsText style={style.transactionTitle}>Transaction Summary</PoppinsText>
            <ScrollView showsVerticalScrollIndicator={false} style={style.accountInformation}>
                {transactionsData[activeAccount]?.length > 0 ? (
                    transactionsData[activeAccount].map((transaction) => (
                        <View key={transaction.id} style={style.transactionItem}>
                            <PoppinsText style={style.transactionType}>{transaction.type}</PoppinsText>
                            <PoppinsText style={style.transactionAmount}>{transaction.amount}</PoppinsText>
                            <PoppinsText style={style.transactionDate}>{transaction.date}</PoppinsText>
                        </View>
                    ))
                ) : (
                    <PoppinsText style={style.noTransactions}>No transactions available</PoppinsText>
                )}
            </ScrollView>
        </View>
    );
};

/* Styles */
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#101010",
        padding: 15,
    },
    accountContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#272727",
        padding: 15,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    accountDetails: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
        gap: 10,
    },
    accountText: {
        fontSize: 18,
        color: "#ffffff",
        fontWeight: "700",
        textAlign: "center",
    },
    otherAccount: {
        position: "absolute",
        top: 80, // Adjusted position
        left: 15,
        right: 15,
        backgroundColor: "#3a3838",
        borderRadius: 8,
        padding: 10,
        zIndex: 100,
        maxHeight: 200, // Scrollable dropdown
    },
    accountOption: {
        paddingVertical: 8,
        alignItems: "center",
    },
    transactionTitle: {
        fontSize: 20,
        fontWeight: "700",
        color: "white",
        marginVertical: 10,
    },
    accountInformation: {
        width: "100%",
        backgroundColor: "#272727",
        padding: 15,
        borderRadius: 10,
        maxHeight: 300,
    },
    transactionItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: "#444",
        paddingVertical: 10,
    },
    transactionType: {
        fontSize: 16,
        color: "#ffffff",
    },
    transactionAmount: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#00FF00", // Green for deposits
    },
    transactionDate: {
        fontSize: 14,
        color: "#bbb",
    },
    noTransactions: {
        fontSize: 16,
        color: "#bbb",
        textAlign: "center",
        marginTop: 10,
    },
});

export default AccountSummary;













/*
import {View, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
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
                {/!* Back Button *!/}
                <AntDesign onPress={() => router.back()} name="left" size={24} color="orange" />

                {/!* Account Details *!/}
                <View style={style.accountDetails}>
                    <PoppinsText style={style.accountText}>{activeAccount}</PoppinsText>

                    {/!* Dropdown Button *!/}
                    <TouchableOpacity onPress={() => setShowOtherAccounts(!showOtherAccounts)}>
                        <AntDesign name="caretdown" size={24} color="orange" />
                    </TouchableOpacity>

                    {/!* Other Accounts Dropdown *!/}
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
            {/!*account information*!/}
            <PoppinsText>
                Transaction Summary
            </PoppinsText>
            <ScrollView showsVerticalScrollIndicator={false} style={style.accountInformation}>

            </ScrollView>


        </View>
    );
};

/!* Styles *!/
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
    accountInformation:{
        width:"100%"

    }
});

export default AccountSummary;

*/
