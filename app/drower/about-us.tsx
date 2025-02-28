import { View, StyleSheet, Image } from "react-native";
import PoppinsText from "@/layout/poppins-text";
import {AntDesign} from "@expo/vector-icons";
import {router} from "expo-router";


const AboutUs = () => {
    return (

        <View style={styles.container}>
            <AntDesign onPress={() => router.back()} name="left" size={24} color="orange" />
            {/* Bank Logo */}
            <View style={styles.logoContainer}>
                <Image source={{ uri: "https://assets-global.website-files.com/600089199ba28edd49ed9587/630509619125b04166f1f544_Bank_14C_0805.png" }} style={styles.logo} />
                <PoppinsText style={styles.bankName}>Bank BCC</PoppinsText>
            </View>


            {/* Introduction */}
            <PoppinsText style={styles.introText}>
                Welcome to Bank Bcc, your trusted financial partner. We are committed to providing secure, fast,
                and innovative banking solutions to enhance your financial experience.
            </PoppinsText>

            {/* Mission & Vision */}
            <View style={styles.section}>
                <PoppinsText style={styles.sectionTitle}>Our Mission</PoppinsText>
                <PoppinsText style={styles.sectionText}>
                    To empower individuals and businesses with seamless, digital banking services that ensure financial growth and stability.
                </PoppinsText>
            </View>

            <View style={styles.section}>
                <PoppinsText style={styles.sectionTitle}>Our Vision</PoppinsText>
                <PoppinsText style={styles.sectionText}>
                    To be the leading digital-first bank, offering secure and innovative financial solutions for a smarter future.
                </PoppinsText>
            </View>

            {/* Why Choose Us */}
            <View style={styles.section}>
                <PoppinsText style={styles.sectionTitle}>Why Choose Us?</PoppinsText>
                <PoppinsText style={styles.bullet}>✅ Secure & Reliable Transactions</PoppinsText>
                <PoppinsText style={styles.bullet}>✅ 24/7 Customer Support</PoppinsText>
                <PoppinsText style={styles.bullet}>✅ Fast & Easy Fund Transfers</PoppinsText>
                <PoppinsText style={styles.bullet}>✅ User-Friendly Mobile Banking</PoppinsText>
            </View>

            {/* Contact Info */}
            <View style={styles.section}>
                <PoppinsText style={styles.sectionTitle}>Contact Us</PoppinsText>
                <PoppinsText style={styles.sectionText}>📍 123 Bank Street, Colombo</PoppinsText>
                <PoppinsText style={styles.sectionText}>📞 +94 77 123 4567</PoppinsText>
                <PoppinsText style={styles.sectionText}>✉ support@yourbank.com</PoppinsText>
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
    logoContainer: {
        alignItems: "center",
        marginBottom: 20,
    },
    logo: {
        width: 80,
        height: 80,
        resizeMode: "contain",
    },
    bankName: {
        fontSize: 22,
        fontWeight: "bold",
        color: "orange",
        marginTop: 10,
    },
    introText: {
        fontSize: 16,
        color: "#bbb",
        textAlign: "center",
        marginBottom: 20,
    },
    section: {
        marginBottom: 20,
        padding: 15,
        backgroundColor: "#272727",
        borderRadius: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "orange",
        marginBottom: 5,
    },
    sectionText: {
        fontSize: 16,
        color: "#ffffff",
    },
    bullet: {
        fontSize: 16,
        color: "#00FF00",
        marginTop: 5,
    },
});

export default AboutUs;
