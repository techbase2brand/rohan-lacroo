import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

const CustomTextInput = ({ placeholder, value, onChangeText, textInputHeading, multiPlaceholders }) => {
    const placeholderText = multiPlaceholders ? multiPlaceholders.join('\n') : placeholder;
    return (
        <View style={styles.inputContainer}>
            {textInputHeading && <Text style={styles.heading}>{textInputHeading}</Text>}
            <TextInput
                style={styles.input}
                placeholder={placeholderText} 
                value={value}
                onChangeText={onChangeText}
                multiline={true}
                numberOfLines={4}
                textAlignVertical="top"
                placeholderTextColor="#aaa" 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        // paddingHorizontal: 10,
        paddingVertical: 5,
        marginVertical:5
    },
    heading: {
        fontSize: 16,
        marginBottom: 5,
        color: '#333',
    },
    input: {
        height: 90,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 15,
        paddingTop: 10,
        backgroundColor: '#fff',
        fontSize: 16,
        textAlignVertical: 'top',
    },
    placeholderText: {
        color: '#aaa', // Change this color as needed
        marginTop: 5,
    },
});

export default CustomTextInput;
