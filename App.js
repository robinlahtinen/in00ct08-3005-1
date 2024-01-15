import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

export default function App() {
    const [age, setAge] = useState('');
    const [limits, setLimits] = useState('');

    const calculate = () => {
        if (age !== '' && !isNaN(age)) {
            const ageNumber = parseFloat(age);
            const lower = Math.round((220 - ageNumber) * 0.65);
            const upper = Math.round((220 - ageNumber) * 0.85);
            setLimits(`Limits ${lower} - ${upper}`);
        } else {
            setLimits('Invalid age');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.description}>Enter your age</Text>
                <TextInput
                    style={styles.input}
                    value={age}
                    onChangeText={(text) => setAge(text)}
                    keyboardType='decimal-pad'
                    placeholder='e.g. 25'
                />
                <TouchableOpacity onPress={calculate} style={styles.customButton}>
                    <Text style={styles.buttonText}>Calculate</Text>
                </TouchableOpacity>
                <Text style={styles.result}>{limits}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#E0F2F1',
    },
    content: {
        marginTop: 150,
        width: 300,
        padding: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    description: {
        fontSize: 24,
        marginBottom: 10,
        color: '#009688',
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: '#009688',
        borderWidth: 2,
        marginBottom: 20,
        padding: 10,
        borderRadius: 5,
    },
    customButton: {
        backgroundColor: '#009688',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 18,
    },
    result: {
        fontSize: 18,
        marginTop: 20,
        color: '#009688',
    },
});
