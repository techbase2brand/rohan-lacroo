import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import { ADD_FILE_BLACK_ICON, CHECK_ICON, SPLIT_DOCKET_ICON } from '../../assests/images';
import OperatorDocket from '../OperatorDocket';
import { widthPercentageToDP as wp } from '../../utils';
import { spacings } from '../../constant/Fonts';
const EditOperatorModal = ({ visible, onSplit, onSave, editOperatorDocket }) => {
    const [selectedUser, setSelectedUser] = useState('');
    const [activeTab, setActiveTab] = useState('Tab1');
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.ModalHeader}>
                        <Image source={ADD_FILE_BLACK_ICON} style={{ width: 24, height: 24, marginRight: 20 }} />
                        <View >
                            <Text style={styles.modalText}>{"Edit Docket"}</Text>
                        </View>
                    </View>

                    <OperatorDocket hideBUtton={true} />
                    <View style={[styles.modalButtons, { position: "absolute", bottom: 40, backgroundColor: "#fff", padding: 10 }]}>
                        <TouchableOpacity style={[styles.button, { width: "50%", borderWidth: 1, borderColor: "#84ADFF", paddingHorizontal: 10, justifyContent: "center", flexDirection: "row" }]} onPress={onSplit}>
                            <Image source={SPLIT_DOCKET_ICON} style={{ width: 18, height: 18, marginRight: 4, alignSelf: "center" }} />
                            <Text style={[styles.buttonText, { color: "#004EEB" }]}>Split Docket</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: '#155eef', paddingHorizontal: 15, flexDirection: "row", width: "50%", alignItems: "center", justifyContent: "center" }]} onPress={onSave}>
                            <Image source={CHECK_ICON} style={{ width: 15, height: 15, marginRight: 4, alignSelf: "center" }} />
                            <Text style={styles.buttonText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    modalContent: {
        width: wp(50),
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
        paddingTop: 20,
    },
    ModalHeader: {
        flexDirection: 'row',
        alignSelf: "flex-start"
    },

    textInputContainer: {
        width: "100%",
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center"
    },
    tabContainer: {
        width: "100%",
        flexDirection: 'row',
        marginTop: 10,
        backgroundColor: "#eaecf0",
        borderRadius: 5,
        padding: 2,
    },
    tabButton: {
        width: "50%",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomWidth: 2,
        borderBottomColor: 'transparent',
        borderRadius: 5,

    },
    activeTab: {
        backgroundColor: "#fff",
    },
    tabText: {
        fontSize: 14,
        color: '#888',
        textAlign: "center"
    },
    activeTabText: {
        fontSize: 14,
        color: '#344054',
        textAlign: "center"

    },
    contentContainer: {
        width: "100%",
        height: "80%"
    },
    contentText: {
        fontSize: 18,
    },
    input: {
        marginLeft: 4
    },
    modalText: {
        fontSize: 18,
        // marginBottom: 20,
        color: "#101828",
        fontWeight: "600"
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 40,
        gap: 10
    },
    button: {
        padding: 10,
        borderRadius: 5,

    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,

    },
    picker: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,

    },
});

export default EditOperatorModal;