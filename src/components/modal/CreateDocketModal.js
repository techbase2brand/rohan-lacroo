import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import { ADD_FILE_BLACK_ICON } from '../../assests/images';
import LabourDocket from '../LabourDocket';
import OperatorDocket from '../OperatorDocket';
import { widthPercentageToDP as wp } from '../../utils';
const CreateDocketModal = ({ visible, onClose, onAdd }) => {
    const [selectedUser, setSelectedUser] = useState('');
    const [activeTab, setActiveTab] = useState('Tab1');
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
        //   onRequestClose={onClose} // Handle back button on Android
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.ModalHeader}>
                        <Image source={ADD_FILE_BLACK_ICON} style={{ width: 24, height: 24, marginRight: 20 }} />
                        <View >
                            {activeTab == 'Tab1' ? <Text style={styles.modalText}>Create Docket</Text> : <Text style={styles.modalText}>Create Operator Docket</Text>}
                        </View>
                    </View>

                    {/* Tabs */}
                    <View>

                        <Text style={{ fontSize: 14, color: "#344054", fontWeight: "500", marginTop: 20 }}>Docket Type</Text>
                        <View style={styles.tabContainer}>

                            <TouchableOpacity
                                style={[
                                    styles.tabButton,
                                    activeTab === 'Tab1' && styles.activeTab
                                ]}
                                onPress={() => setActiveTab('Tab1')}
                            >
                                <Text style={activeTab === 'Tab1' ? styles.activeTabText : styles.tabText}>Labour</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[
                                    styles.tabButton,
                                    activeTab === 'Tab2' && styles.activeTab
                                ]}
                                onPress={() => setActiveTab('Tab2')}
                            >
                                <Text style={activeTab === 'Tab2' ? styles.activeTabText : styles.tabText}>Operator/Plant</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Tab Content */}
                    <View style={styles.contentContainer}>
                        {activeTab === 'Tab1' ? (
                            <LabourDocket onClose={onClose} onAdd={onAdd} />
                        ) : (
                            <OperatorDocket onClose={onClose} onAdd={onAdd} />
                        )}
                    </View>

                    {/* <View style={styles.modalButtons}>
                        <TouchableOpacity style={[styles.button, { width: "30%", paddingHorizontal: 10, flexDirection: "row" }]} onPress={onClose}>
                            <Image source={require('../assests/x.png')} style={{ width: 18, height: 18, marginRight: 4, alignSelf: "center" }} />

                            <Text style={[styles.buttonText, { color: "#475467" }]}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: '#155eef', paddingHorizontal: 15, flexDirection: "row", width: "70%" }]} onPress={onDelete}>
                            <Image source={require('../assests/tick_icon.png')} style={{ width: 15, height: 15, marginRight: 4, alignSelf: "center" }} />
                            <Text style={styles.buttonText}>Add Activity to Prestart</Text>
                        </TouchableOpacity>
                    </View> */}
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
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: wp(50),
        backgroundColor: 'white',
        borderRadius: 10,
        // padding: 20,
        paddingHorizontal: 10,
        alignItems: 'center',
        paddingTop: 20
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

export default CreateDocketModal