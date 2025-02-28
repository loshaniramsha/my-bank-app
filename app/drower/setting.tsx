import { View, StyleSheet, Switch, TouchableOpacity } from "react-native";
import PoppinsText from "@/layout/poppins-text";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

const Setting = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);

    return (
        <View style={styles.container}>
            {/* Header */}
            <PoppinsText style={styles.header}>Settings</PoppinsText>

            {/* User Profile */}
            <View style={styles.profileSection}>
                <Ionicons name="person-circle" size={50} color="orange" />
                <View style={styles.profileInfo}>
                    <PoppinsText style={styles.userName}>John Doe</PoppinsText>
                    <PoppinsText style={styles.userEmail}>johndoe@example.com</PoppinsText>
                </View>
            </View>

            {/* Settings Options */}
            <View style={styles.settingsContainer}>
                {/* Security */}
                <TouchableOpacity style={styles.settingItem}>
                    <AntDesign name="lock" size={24} color="orange" />
                    <PoppinsText style={styles.settingText}>Change Password</PoppinsText>
                </TouchableOpacity>

                <TouchableOpacity style={styles.settingItem}>
                    <MaterialIcons name="security" size={24} color="orange" />
                    <PoppinsText style={styles.settingText}>Enable Two-Factor Authentication</PoppinsText>
                </TouchableOpacity>

                {/* Notifications */}
                <View style={styles.settingItem}>
                    <MaterialIcons name="notifications-active" size={24} color="orange" />
                    <PoppinsText style={styles.settingText}>Notifications</PoppinsText>
                    <Switch
                        value={isNotificationsEnabled}
                        onValueChange={(value) => setIsNotificationsEnabled(value)}
                    />
                </View>

                {/* Theme Selection */}
                <View style={styles.settingItem}>
                    <Ionicons name="moon" size={24} color="orange" />
                    <PoppinsText style={styles.settingText}>Dark Mode</PoppinsText>
                    <Switch value={isDarkMode} onValueChange={(value) => setIsDarkMode(value)} />
                </View>

                {/* Logout */}
                <TouchableOpacity style={[styles.settingItem, styles.logoutButton]}>
                    <AntDesign name="logout" size={24} color="red" />
                    <PoppinsText style={[styles.settingText, { color: "red" }]}>Log Out</PoppinsText>
                </TouchableOpacity>
            </View>
        </View>
    );
};

/* Styles */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#101010",
        padding: 20,
    },
    header: {
        fontSize: 22,
        fontWeight: "bold",
        color: "orange",
        textAlign: "center",
        marginBottom: 20,
    },
    profileSection: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#272727",
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
    },
    profileInfo: {
        marginLeft: 10,
    },
    userName: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#ffffff",
    },
    userEmail: {
        fontSize: 14,
        color: "#bbb",
    },
    settingsContainer: {
        backgroundColor: "#272727",
        borderRadius: 10,
        paddingVertical: 10,
    },
    settingItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#444",
    },
    settingText: {
        fontSize: 16,
        color: "#ffffff",
        flex: 1,
        marginLeft: 10,
    },
    logoutButton: {
        borderTopWidth: 1,
        borderTopColor: "#444",
        marginTop: 10,
    },
});

export default Setting;
