import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { ADD_FILE_ICON, CHECK_ICON, CLOSE_BLACK_ICON } from '../../assests/images';
import ModalDropdownComponent from '../ModalDropdownComponent';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../utils';
import { lightGrayOpacityColor, whiteColor } from '../../constant/Colors';
const AddResourceModal = ({ visible, onClose, onAdd }) => {
    const [selectedSupplier, setSelectedSupplier] = useState('');
    const [selectedResources, setSelectedResources] = useState('');
    const [selectedActivity, setSelectedActivity] = useState('');

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
                        <Image source={ADD_FILE_ICON} style={{ width: 24, height: 24, marginRight: 20,resizeMode:"contain" }} />
                        <View >
                            <Text style={styles.modalText}>Add Resource to Prestart</Text>
                        </View>
                    </View>

                    {/*Supplier  */}
                    <View style={{ marginTop: 20, width: "100%", }}>
                        <Text style={{ fontSize: 14, color: "#344054", fontWeight: "500" }}>Supplier</Text>
                        <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginTop: 10 }}>
                            <ModalDropdownComponent
                                options={['Type 1', 'Type 2']}
                                onSelect={(index, value) => setSelectedSupplier(value)}
                                optionBoxStyle={styles.dropdownStyle}
                            />
                        </View>
                    </View>
                    {/*Select Resource*/}
                    <View style={{ marginTop: 20, width: "100%" }}>
                        <Text style={{ fontSize: 14, color: "#344054", fontWeight: "500" }}>Select Resource</Text>
                        <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginTop: 10 }}>
                            <ModalDropdownComponent
                                options={['Type 1', 'Type 2']}
                                onSelect={(index, value) => setSelectedResources(value)}
                                optionBoxStyle={styles.dropdownStyle}
                            />
                        </View>

                    </View>
                    {/*Set Activity*/}
                    <View style={{ marginTop: 20, width: "100%" }}>
                        <Text style={{ fontSize: 14, color: "#344054", fontWeight: "500" }}>Set Activity</Text>
                        <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginTop: 10 }}>
                            <ModalDropdownComponent
                                options={['Type 1', 'Type 2']}
                                onSelect={(index, value) => setSelectedActivity(value)}
                                optionBoxStyle={styles.dropdownStyle}
                            />
                        </View>

                    </View>
                    <View style={styles.modalButtons}>
                        <TouchableOpacity style={[styles.button, { width: "30%", paddingHorizontal: 10, flexDirection: "row" }]} onPress={onClose}>
                            <Image source={CLOSE_BLACK_ICON} style={{ width: 18, height: 18, marginRight: 4, alignSelf: "center" }} />

                            <Text style={[styles.buttonText, { color: "#475467" }]}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: '#155eef', paddingHorizontal: 15, flexDirection: "row", width: "70%",alignItems:"center",justifyContent:"center" }]} onPress={onAdd}>
                            <Image source={CHECK_ICON} style={{ width: 15, height: 15, marginRight: 4, alignSelf: "center" }} />
                            <Text style={styles.buttonText}>Add Activity to Prestart</Text>
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
        padding: 20,
        alignItems: 'center',
    },
    ModalHeader: {
        flexDirection: 'row',
        // justifyContent:"center",
        // alignItems:"center"
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
    dropdownStyle: {
        backgroundColor: whiteColor,
        borderWidth: 1,
        borderColor: lightGrayOpacityColor,
        borderRadius: 5,
        width: wp(46.5),
        height: "auto"
    },
});




export default AddResourceModal