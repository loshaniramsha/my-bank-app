import { View, Animated, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { themeColors } from "@/layout/theme/color";
import PoppinsText from "@/layout/poppins-text";
import { useRouter } from "expo-router";
import React from "react";

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

const MobileMenu = () => {
    const router = useRouter();

    return (
        <AnimatedScrollView
            showsVerticalScrollIndicator={false}
            style={styles.container}
        >
            {/* Profile Information */}
            <View style={styles.profileContainer}>
                {/* Add profile details here */}
            </View>

            {/* Menu Items */}
            <View style={styles.menuContainer}>
                <MenuItem title="Home" icon="home" pressFunction={() => router.push("/")}/>
                <MenuItem title="Account Summery" icon="hourglass" pressFunction={() => router.push("/")} />
                <MenuItem title="Fund Transfers" icon="arrow-switch" pressFunction={() => router.push("/")} />
                <MenuItem title="Bill Payment" icon="checklist" pressFunction={() => router.push("/")} />
                <MenuItem title="My Payees" icon="people" pressFunction={() => router.push("/")} />
                <MenuItem title="Saved Billers" icon="file-symlink-file" pressFunction={() => router.push("/")} />
                <MenuItem title="Bank Rate" icon="graph" pressFunction={() => router.push("/")} />
                <MenuItem title="Location" icon="location" pressFunction={() => router.push("/")} />
                <MenuItem title="Setting" icon="gear" pressFunction={() => router.push("/")} />
                <MenuItem title="Contacts" icon="mail" pressFunction={() => router.push("/")} />
                <MenuItem title="About Us" icon="code-of-conduct" pressFunction={() => router.push("/")} />
                <MenuItem title="FAQ" icon="comment-discussion" pressFunction={() => router.push("/")} />
                <MenuItem title="Terms & Condition" icon="light-bulb" pressFunction={() => router.push("/")} />
                <MenuItem title="Privacy Policy" icon="shield-check" pressFunction={() => router.push("/")} />
                <MenuItem title="Log Out" icon="sign-out" pressFunction={() => router.push("/")} />

                {/* Add more MenuItems if needed */}
            </View>
        </AnimatedScrollView>
    );
};


export default MobileMenu;

/* Define Menu Item Interface */
interface IMenuItem {
    title: string;
    pressFunction: () => void;
    icon: React.ComponentProps<typeof Octicons>["name"];
}

/* Define Menu Item Component */
const MenuItem: React.FC<IMenuItem> = ({ title, icon, pressFunction }) => {
    return (
        <TouchableOpacity onPress={pressFunction} style={styles.menuItem}>
            <View style={styles.menuItemContent}>
                <Octicons name={icon} size={20} color={themeColors.icon} />
                <PoppinsText style={styles.menuText}>{title}</PoppinsText>
            </View>
            <Octicons name="chevron-right" size={20} color={themeColors.icon} />
        </TouchableOpacity>
    );
};

/* Styles */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#101010",
        paddingVertical: 20,
    },
    profileContainer: {
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    menuContainer: {
        marginTop: 20,
        marginBottom: 10,
        paddingHorizontal: 20,
    },
    menuItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#272727",
    },
    menuItemContent: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1, // Ensures the text and icon are spaced properly
    },
    menuText: {
        marginLeft: 10,
        color: "white",
        fontSize: 16,
        fontWeight: "500",
    },
});
