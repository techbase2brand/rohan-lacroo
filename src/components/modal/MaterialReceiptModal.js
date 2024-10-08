import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Image, TextInput, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { ADD_FILE_BLACK_ICON, ADD_IMAGE_ICON, CHECK_ICON, CLOSE_BLACK_ICON, DOLLAR_ICON, HASH_ICON } from '../../assests/images';
import ModalDropdownComponent from '../ModalDropdownComponent';
import Button from '../Button';
import { ADD_IMAGE, PHOTOS } from '../../constant/Constant';
import { spacings, style } from '../../constant/Fonts';
import { blackColor, lightGrayOpacityColor, whiteColor } from '../../constant/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../utils';
import { ScrollView } from 'react-native-gesture-handler';
import { launchImageLibrary } from 'react-native-image-picker';
const MaterialReceiptModal = ({ visible, onClose, onAdd }) => {
    const [supplier, setSupplier] = useState('');
    const [materialItem, setMaterialItem] = useState('');
    const [images, setImages] = useState(Array(3).fill(null));
    const handleAddImage = async () => {
        // Check for an available slot
        const emptyIndex = images.findIndex((img) => img === null);
        if (emptyIndex === -1) {
            Alert.alert("Limit reached", "You can only add up to 3 images.");
            return;
        }

        // Launch the image picker
        const result = await launchImageLibrary({
            mediaType: 'photo',
            includeBase64: false, // Change based on your requirements
            quality: 1,
        });

        if (result.didCancel) {
            console.log('User cancelled image picker');
        } else if (result.error) {
            console.error('ImagePicker Error: ', result.error);
        } else {
            const source = result.assets[0].uri; // Get the selected image URI
            const newImages = [...images];
            newImages[emptyIndex] = source;
            console.log(newImages)// Add the image to the first available slot
            setImages(newImages); // Update the state
        }
    };
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.ModalHeader}>
                        <Image source={ADD_FILE_BLACK_ICON} style={{ width: 24, height: 24, marginRight: 20 }} />
                        <View >
                            <Text style={styles.modalText}>Create Material Receipt</Text>
                        </View>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {/*Supplier  */}
                        <View style={{ marginTop: 20, width: "100%", }}>
                            <Text style={{ fontSize: 14, color: "#344054", fontWeight: "500" }}>Supplier</Text>
                            <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginTop: 10 }}>
                                <ModalDropdownComponent
                                    options={['Type 1', 'Type 2']}
                                    onSelect={(index, value) => setSupplier(value)}
                                    optionBoxStyle={styles.dropdownStyle}
                                />
                            </View>
                        </View>
                        {/*Material Item Description*/}
                        <View style={{ marginTop: 20, width: "100%" }}>
                            <Text style={{ fontSize: 14, color: "#344054", fontWeight: "500" }}>Select Material Item Description</Text>
                            <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginTop: 10 }}>
                                <ModalDropdownComponent
                                    options={['Type 1', 'Type 2']}
                                    onSelect={(index, value) => setMaterialItem(value)}
                                    optionBoxStyle={styles.dropdownStyle}
                                />
                            </View>

                        </View>

                        {/*Purchase Order*/}
                        <View style={{ marginTop: 20, width: "100%" }}>
                            <Text style={{ fontSize: 14, color: "#344054", fontWeight: "500" }}>Purchase Order</Text>
                            <View style={styles.textInputContainer}>
                                <Image source={HASH_ICON} style={{ width: 15, height: 15, marginHorizontal: 4 }} />
                                <TextInput
                                    style={styles.input}
                                    placeholder="GG-PTP-4203443s"
                                />
                            </View>
                        </View>

                        {/*Cost Code*/}
                        <View style={{ marginTop: 20, width: "100%" }}>
                            <Text style={{ fontSize: 14, color: "#344054", fontWeight: "500" }}>Cost Code</Text>
                            <View style={styles.textInputContainer}>
                                <Image source={HASH_ICON} style={{ width: 15, height: 15, marginHorizontal: 4 }} />
                                <TextInput
                                    style={styles.input}
                                    placeholder="GG-PTP-4203443s"
                                />
                            </View>
                        </View>

                        {/*Quantity, Rate, Unit*/}
                        <View style={{ flexDirection: "row", gap: 5 }}>
                            {/* Quantity */}
                            <View style={{ marginTop: 20, width: "33%" }}>
                                <Text style={{ fontSize: 14, color: "#344054", fontWeight: "500" }}>Quantity</Text>
                                <View style={styles.textInputContainer}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="25"
                                    />
                                </View>
                            </View>

                            {/* Rate */}
                            <View style={{ marginTop: 20, width: "31%" }}>
                                <Text style={{ fontSize: 14, color: "#344054", fontWeight: "500" }}>Rate</Text>
                                <View style={styles.textInputContainer}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="100"
                                    />
                                </View>
                            </View>

                            {/* Unit */}
                            <View style={{ marginTop: 20, width: "33%" }}>
                                <Text style={{ fontSize: 14, color: "#344054", fontWeight: "500" }}>Unit</Text>
                                <View style={styles.textInputContainer}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="EA"
                                    />
                                </View>
                            </View>
                        </View>

                        {/*Total Amount*/}
                        <View style={{ marginTop: 20, width: "100%" }}>
                            <Text style={{ fontSize: 14, color: "#344054", fontWeight: "500" }}>Total Amount</Text>
                            <View style={styles.textInputContainer}>
                                <Image source={DOLLAR_ICON} style={{ width: 15, height: 15, marginHorizontal: 4 }} resizeMode='contain' />

                                <TextInput
                                    style={styles.input}
                                    placeholder="2500"
                                // editable={false}
                                />
                            </View>

                        </View>

                        <View style={[{ width: "100%", height: hp(6), marginVertical: spacings.large, flexDirection: "row", justifyContent: "space-evenly" }]}>
                            <View style={[{ width: "78%", height: "100%", justifyContent: "center" }]}>
                                <Text style={styles.text}>{PHOTOS}</Text>
                            </View>
                            <View style={[{ width: "22%", height: "100%", justifyContent: "center" }]}>
                                <Button
                                    buttonText={ADD_IMAGE}
                                    buttonStyle={styles.buttonStyle}
                                    buttonTextStyle={styles.buttonTextStyle}
                                    imageSource={ADD_IMAGE_ICON}
                                    onPress={handleAddImage}
                                />
                            </View>
                        </View>
                        <View style={styles.imageContainer}>
                            {images.map((img, index) => (
                                <View key={index} style={styles.imageBox}>
                                    {img ? (
                                        <Image source={{ uri: img }} style={styles.image} />
                                    ) : (
                                        <View style={styles.placeholderBox} />
                                    )}
                                </View>
                            ))}
                        </View>


                    </ScrollView>
                    <View style={styles.modalButtons}>
                        <TouchableOpacity style={[styles.button, { width: "30%", paddingHorizontal: 10, flexDirection: "row" }]} onPress={onClose}>
                            <Image source={CLOSE_BLACK_ICON} style={{ width: 18, height: 18, marginRight: 4, alignSelf: "center" }} />
                            <Text style={[styles.buttonText, { color: "#475467" }]}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: '#155eef', paddingHorizontal: 15, flexDirection: "row", width: "70%", alignItems: "center", justifyContent: "center" }]} onPress={onAdd}>
                            <Image source={CHECK_ICON} style={{ width: 15, height: 15, marginRight: 4, alignSelf: "center" }} />
                            <Text style={styles.buttonText}>Create Material Reciept</Text>
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
        margin: 90
        // alignItems: 'center',
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
        padding: spacings.large
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
    buttonStyle: {
        borderColor: '#CCC',
        borderWidth: 1,
        paddingHorizontal: spacings.xLarge,
        paddingVertical: spacings.large
    },
    buttonTextStyle: {
        color: blackColor,
        fontSize: style.fontSizeNormal.fontSize,
        fontWeight: style.fontWeightThin1x.fontWeight,
        marginLeft: spacings.large
    },
    imageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    placeholderBox: {
        width: wp(9),
        height: wp(9),
        borderRadius: 5,
        backgroundColor: '#D9D9D9',
        borderColor: '#aaa',
        borderWidth: 1,
        marginHorizontal: spacings.large
    },
    imageBox: {
        width: wp(9),
        height: wp(9),
        borderRadius: 5,
        margin: spacings.large
    },
    dropdownStyle: {
        backgroundColor: whiteColor,
        borderWidth: 1,
        borderColor: lightGrayOpacityColor,
        borderRadius: 5,
        width: wp(46),
        height: "auto"
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 5,
        borderColor: '#aaa',
        borderWidth: 1,
    },
});

export default MaterialReceiptModal;