import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import { ADD_FILE_ICON, CHECK_ICON, CLOSE_BLACK_ICON, DOLLAR_ICON, HASH_ICON, PLUS_IMAGE, SCALE_ICON } from '../../assests/images';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../utils';

const AddActivityModal = ({ visible, onClose, onAdd,from }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
        //   onRequestClose={onClose} 
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.ModalHeader}>
                        <Image source={ADD_FILE_ICON} style={{ width: 24, height: 24, marginRight: 20, resizeMode: "contain" }} />
                        <View >
                            <Text style={styles.modalText}>Add Activity to Prestart</Text>
                        </View>
                    </View>

                    {/*Activity  */}
                    <View style={{ marginTop: 20, width: "100%" }}>
                        <Text style={{ fontSize: 14, color: "#344054", fontWeight: "500" }}>Activity</Text>
                        <View style={styles.textInputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Type activity description"
                            // editable={false}
                            />
                        </View>
                    </View>
                    {/*Cost Code  */}
                    <View style={{ marginTop: 20, width: "100%" }}>

                        <Text style={{ fontSize: 14, color: "#344054", fontWeight: "500" }}>Cost Code</Text>
                        <View style={styles.textInputContainer}>
                            <Image source={HASH_ICON} style={{ width: 15, height: 15, marginHorizontal: 4 }} />

                            <TextInput
                                style={styles.input}
                                placeholder="12220 - Brick Paving Brickwork and Traffic Islands"
                            // editable={false}
                            />
                        </View>

                    </View>
                    {/*Sub Code  */}
                    <View style={{ marginTop: 20, width: "100%" }}>
                        <Text style={{ fontSize: 14, color: "#344054", fontWeight: "500" }}>Sub Code</Text>
                        <View style={styles.textInputContainer}>
                            <Image source={HASH_ICON} style={{ width: 15, height: 15, marginHorizontal: 4 }} />
                            <TextInput
                                style={styles.input}
                                placeholder="GG5"
                            // editable={false}
                            />
                        </View>
                    </View>
                    {/*Target Quantity and Unit*/}
                    <View style={{ flexDirection: "row", gap: 10 }}>

                        {/*Target Quantity*/}
                        <View style={{ marginTop: 20, width: "50%" }}>
                            <Text style={{ fontSize: 14, color: "#344054", fontWeight: "500" }}>Target Quantity</Text>
                            <View style={styles.textInputContainer}>
                                <Image source={SCALE_ICON} style={{ width: 18, height: 18, marginHorizontal: 4 }} />
                                <TextInput
                                    style={styles.input}
                                    placeholder="25"
                                // editable={false}
                                />
                            </View>
                        </View>

                        {/*Unit*/}
                        <View style={{ marginTop: 20, width: "50%" }}>
                            <Text style={{ fontSize: 14, color: "#344054", fontWeight: "500" }}>Unit</Text>
                            <View style={styles.textInputContainer}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Linear Metres"
                                // editable={false}
                                />
                            </View>
                        </View>
                    </View>

                    {/*Target Rate and Unit*/}
                    <View style={{ flexDirection: "row", gap: 10 }}>

                        {/*Target Rate*/}
                        <View style={{ marginTop: 20, width: "50%" }}>
                            <Text style={{ fontSize: 14, color: "#344054", fontWeight: "500" }}>Target Rate</Text>
                            <View style={styles.textInputContainer}>
                                <Image source={DOLLAR_ICON} style={{ width: 15, height: 15, marginHorizontal: 4, resizeMode: "contain" }} />
                                <TextInput
                                    style={styles.input}
                                    placeholder="100"
                                // editable={false}
                                />
                            </View>
                        </View>

                        {/*Unit*/}
                        <View style={{ marginTop: 20, width: "50%" }}>
                            <Text style={{ fontSize: 14, color: "#344054", fontWeight: "500" }}>Unit</Text>
                            <View style={styles.textInputContainer}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="LM"
                                // editable={false}
                                />
                            </View>
                        </View>
                    </View>


                    <View style={styles.modalButtons}>
                        <TouchableOpacity style={[styles.button, { width: "30%", paddingHorizontal: 10, flexDirection: "row" }]} onPress={onClose}>
                            <Image source={CLOSE_BLACK_ICON} style={{ width: 18, height: 18, marginRight: 4, alignSelf: "center" }} />
                            <Text style={[styles.buttonText, { color: "#475467" }]}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: '#155eef', paddingHorizontal: 15, flexDirection: "row", width: "70%", alignItems: "center", justifyContent: "center" }]} onPress={onAdd}>
                            <Image source={CHECK_ICON} style={{ width: 13, height: 13, marginRight: 4, alignSelf: "center" }} />
                            <Text style={styles.buttonText}>Add Activity to {from}</Text>
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
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
        marginLeft: 4,
        padding: 10
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
});




export default AddActivityModal