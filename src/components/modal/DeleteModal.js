import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { DELETE_ICON, LEFT_ARROW_ICON, WHITE_DELETE_ICON } from '../../assests/images';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../utils';

const DeleteModal = ({ visible, onClose, onDelete, from, date }) => {
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
                        <Image source={DELETE_ICON} style={{ width: hp(8), height: hp(8), resizeMode: "contain" }} />
                        <View >
                            {from === "Files" ? <>
                                <Text style={styles.modalText}>Are you sure you want to delete this file?</Text>
                                <Text style={[styles.modalText, { fontSize: 14, fontWeight: "400" }]}>This action cannot be reversed</Text>
                            </> :
                                <>
                                    <Text style={styles.modalText}>Delete {date ? date : "10 July, 2023"} {from}?</Text>
                                    <Text style={[styles.modalText, { fontSize: 14, fontWeight: "400" }]}>This action cannot be reversed</Text>
                                </>}
                        </View>

                    </View>
                    <View style={styles.modalButtons}>
                        <TouchableOpacity style={[styles.button, { borderWidth: 1, borderColor: "#FDA29B", flexDirection: "row", paddingHorizontal: 25, justifyContent: "center", alignItems: "center" }]} onPress={onClose}>
                            <Image source={LEFT_ARROW_ICON} style={{ width: 18, height: 18, marginRight: 4, alignSelf: "center" }} />
                            <Text style={[styles.buttonText, { color: "#b42318" }]}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: '#d92d20', flexDirection: "row", justifyContent: "center", alignItems: "center" }]} onPress={onDelete}>
                            <Image source={WHITE_DELETE_ICON} style={{ width: 20, height: 20, marginRight: 4,resizeMode:"contain" }} />
                            <Text style={styles.buttonText}>Delete {from}</Text>
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
    },
    ModalHeader: {
        flexDirection: 'row',
        alignItems: "center",
    },
    modalText: {
        fontSize: 18,
        color: "#101828",
        fontWeight: "600"
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 40
    },
    button: {
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: '48%',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14
    },
});


export default DeleteModal

