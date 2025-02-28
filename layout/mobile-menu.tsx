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
                <MenuItem title="AccountSummary" icon="hourglass" pressFunction={() => router.push("/drower/account-summary")} />
                <MenuItem title="Fund Transfers" icon="arrow-switch" pressFunction={() => router.push("/drower/fund-transfers")} />
                <MenuItem title="Bill Payment" icon="checklist" pressFunction={() => router.push("/drower/bill-payment")} />
                <MenuItem title="My Payees" icon="people" pressFunction={() => router.push("/drower/my-payees")} />
                <MenuItem title="Saved Billers" icon="file-symlink-file" pressFunction={() => router.push("/")} />
                <MenuItem title="Settings" icon="gear" pressFunction={() => router.push("/drower/setting")} />
                <MenuItem title="About Us" icon="code-of-conduct" pressFunction={() => router.push("/drower/about-us")} />
                <MenuItem title="Log Out" icon="sign-out" pressFunction={() => router.push("/")} />
            </View>
            {/*menu footer*/}
            <View style={{width:"100%",marginTop:5,borderTopColor:"gray",flexDirection:"row",justifyContent:"space-between"}}>
                <View/>
                <View style={styles.menuFooter}>
                    <PoppinsText style={styles.versionText}>v 2.3.9</PoppinsText>
                </View>

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
        fontSize: 16,
        fontWeight: "bold",
    },
    contactText: {
        color: "white",
        fontSize: 14,
        fontWeight: "500",
        marginTop: 2, // Adds spacing below the name
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
    /*menu footer*/
    menuFooter: {
        width: "100%",
        marginTop: 10,
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: "#272727",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    versionText: {
        fontSize: 10,
        color: "#e8dede",
        textAlign: "center",
    },

});
