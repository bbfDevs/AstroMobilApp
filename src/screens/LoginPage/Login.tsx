import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

const Login: React.FC = () => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSend = () => {
        Alert.alert('Phone Number', phoneNumber);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Telefon Numarası"
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
            />
            <Button title="Gönder" onPress={handleSend} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
});

export default Login;