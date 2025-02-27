import { View, Animated, TouchableOpacity, StyleSheet, ScrollView, Image, Alert } from "react-native";
import { Ionicons, Octicons } from "@expo/vector-icons";

import * as ImagePicker from "expo-image-picker";
import { themeColors } from "@/layout/theme/color";
import PoppinsText from "@/layout/poppins-text";
import { useRouter } from "expo-router";
import React, { useState } from "react";

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

const MobileMenu = () => {
    const router = useRouter();
    const [profileImage, setProfileImage] = useState<string | null>(
        "https://s3.amazonaws.com/rcp-prod-uploads/images/ddec8e4e126b2ec132ee54bacf8a0da79abe293auI.png"
    );

    const onChangeProfile = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
            Alert.alert("Permission Denied", "You need to allow access to the gallery to change the profile picture.");
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1], // Keeps the image square
            quality: 1,
        });

        if (!result.canceled) {
            setProfileImage(result.assets[0].uri);
        }
    };

    return (
        <AnimatedScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            {/* Profile Information */}
            <View style={styles.profileContainer}>
                <View style={styles.imageWrapper}>
                    <Image
                        style={styles.profileImage}
                        source={{ uri: 'https://s3.amazonaws.com/rcp-prod-uploads/images/ddec8e4e126b2ec132ee54bacf8a0da79abe293auI.png' }}
                    />
                    <TouchableOpacity style={styles.cameraIcon} onPress={onChangeProfile}>
                        <Ionicons name="camera-reverse-outline" size={18} color="white" />
                    </TouchableOpacity>
                </View>
                <PoppinsText style={styles.profileText}>Loshani Ramsha</PoppinsText>
            </View>

            {/* Menu Items */}
            <View style={styles.menuContainer}>
                <MenuItem title="Home" icon="home" pressFunction={() => router.push("/")} />
                <MenuItem title="Account Summary" icon="hourglass" pressFunction={() => router.push("/")} />
                <MenuItem title="Fund Transfers" icon="arrow-switch" pressFunction={() => router.push("/")} />
                <MenuItem title="Bill Payment" icon="checklist" pressFunction={() => router.push("/")} />
                <MenuItem title="My Payees" icon="people" pressFunction={() => router.push("/")} />
                <MenuItem title="Saved Billers" icon="file-symlink-file" pressFunction={() => router.push("/")} />
                <MenuItem title="Bank Rate" icon="graph" pressFunction={() => router.push("/")} />
                <MenuItem title="Location" icon="location" pressFunction={() => router.push("/")} />
                <MenuItem title="Settings" icon="gear" pressFunction={() => router.push("/")} />
                <MenuItem title="Contacts" icon="mail" pressFunction={() => router.push("/")} />
                <MenuItem title="About Us" icon="code-of-conduct" pressFunction={() => router.push("/")} />
                <MenuItem title="FAQ" icon="comment-discussion" pressFunction={() => router.push("/")} />
                <MenuItem title="Terms & Conditions" icon="light-bulb" pressFunction={() => router.push("/")} />
                <MenuItem title="Privacy Policy" icon="shield-check" pressFunction={() => router.push("/")} />
                <MenuItem title="Log Out" icon="sign-out" pressFunction={() => router.push("/")} />
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
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
    },
    imageWrapper: {
        position: "relative",
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: "orange",
    },
    cameraIcon: {
        position: "absolute",
        bottom: 5,
        right: 5,
        backgroundColor: "black",
        borderRadius: 12,
        padding: 4,
    },
    profileText: {
        color: "white",
        fontSize: 14,
        fontWeight: "600",
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
        flex: 1,
    },
    menuText: {
        marginLeft: 10,
        color: "white",
        fontSize: 16,
        fontWeight: "500",
    },
});




/*
import { View, Animated, TouchableOpacity, StyleSheet, ScrollView,Image } from "react-native";
import {Ionicons, Octicons} from "@expo/vector-icons";
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
            {/!* Profile Information *!/}
            <View style={styles.profileContainer}>
                {/!* Add profile details here *!/}
                <Image
                    style={styles.profileImage}
                    source={{ uri: 'https://s3.amazonaws.com/rcp-prod-uploads/images/ddec8e4e126b2ec132ee54bacf8a0da79abe293auI.png' }}
                />
                <TouchableOpacity style={styles.cameraIcon} onPress={onChangeProfile}>
                    <Ionicons name="camera-reverse-outline" size={20} color="white" />
                </TouchableOpacity>
                <PoppinsText style={styles.profileText}>
                    Loshani Ramsha
                </PoppinsText>
            </View>


            {/!* Menu Items *!/}
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

                {/!* Add more MenuItems if needed *!/}
            </View>
        </AnimatedScrollView>
    );
};


export default MobileMenu;

/!* Define Menu Item Interface *!/
interface IMenuItem {
    title: string;
    pressFunction: () => void;
    icon: React.ComponentProps<typeof Octicons>["name"];
}

/!* Define Menu Item Component *!/
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

/!* Styles *!/
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#101010",
        paddingVertical: 20,
    },
    profileContainer: {
        padding: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    profileImage: {
        width: 75,
        height: 75,
        borderRadius: 38.5, // Makes it circular
        borderWidth: 2,
        borderColor: "orange", // Optional: adds an orange border
    },
    cameraIcon: {
        position: "absolute",
        bottom: 0,
        right: 0,
        backgroundColor: "black", // Background for visibility
        borderRadius: 15, // Circular icon background
        padding: 5,
    },
    profileText: {
        color: "white",
        marginLeft:6,
        fontSize: 12, // Adjust font size for better visibility
        fontWeight: "600", // Makes text slightly bold
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
*/
