import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import PoppinsText from '@/layout/poppins-text';
import { useRouter } from 'expo-router';

const BillPayment = () => {
    const router = useRouter();
    const [billerName, setBillerName] = useState('');
    const [amount, setAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');

    const handlePayment = () => {
        if (!billerName.trim() || !amount.trim() || !paymentMethod.trim()) {
            alert('All fields are required.');
            return;
        }

        // Simulate a payment processing
        alert('Payment Successful!');
        router.replace('/drower/home'); // Redirect to home page after payment
    };

    return (
        <View style={styles.container}>
            <PoppinsText style={styles.title}>Bill Payment</PoppinsText>

            <TextInput
                style={styles.input}
                placeholder="Biller Name"
                placeholderTextColor="#bbb"
                value={billerName}
                onChangeText={setBillerName}
            />

            <TextInput
                style={styles.input}
                placeholder="Amount"
                placeholderTextColor="#bbb"
                keyboardType="numeric"
                value={amount}
                onChangeText={setAmount}
            />

            <TextInput
                style={styles.input}
                placeholder="Payment Method"
                placeholderTextColor="#bbb"
                value={paymentMethod}
                onChangeText={setPaymentMethod}
            />

            <TouchableOpacity style={styles.authButton} onPress={handlePayment}>
                <PoppinsText style={styles.authText}>Pay Bill</PoppinsText>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#101010',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'orange',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        backgroundColor: '#272727',
        color: '#fff',
        fontSize: 16,
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
    },
    authButton: {
        backgroundColor: 'orange',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',
    },
    authText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#101010',
    },
});

export default BillPayment;
