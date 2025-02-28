import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import { useRouter } from 'expo-router';
import PoppinsText from '@/layout/poppins-text';

const BankAppAuth = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);

    const handleSignIn = () => {
        if (!username.trim() || !password.trim()) {
            alert("All fields are required.");
            return;
        }
        alert("Login Successful!");
        router.replace('/drower/home'); // Redirect to Home after login
    };

    const handleSignUp = () => {
        if (!username.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
            alert("All fields are required.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        alert("Sign Up Successful!");
        router.replace('/drower/home'); // Redirect to Home after sign-up
    };

    return (
        <View style={styles.container}>
            <PoppinsText style={styles.title}>{isSignUp ? "Create Account" : "Sign In"}</PoppinsText>

            {isSignUp && (
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#bbb"
                    value={email}
                    onChangeText={setEmail}
                />
            )}

            <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="#bbb"
                value={username}
                onChangeText={setUsername}
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#bbb"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            {isSignUp && (
                <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    placeholderTextColor="#bbb"
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
            )}

            <TouchableOpacity
                style={styles.authButton}
                onPress={isSignUp ? handleSignUp : handleSignIn}
            >
                <PoppinsText style={styles.authText}>{isSignUp ? "Sign Up" : "Login"}</PoppinsText>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setIsSignUp(!isSignUp)}>
                <PoppinsText style={styles.linkText}>
                    {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
                </PoppinsText>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#101010",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "orange",
        marginBottom: 20,
    },
    input: {
        width: "100%",
        backgroundColor: "#272727",
        color: "#fff",
        fontSize: 16,
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
    },
    authButton: {
        backgroundColor: "orange",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        width: "100%",
    },
    authText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#101010",
    },
    linkText: {
        color: "orange",
        marginTop: 15,
        fontSize: 16,
        textDecorationLine: "underline",
    },
});

export default BankAppAuth;
