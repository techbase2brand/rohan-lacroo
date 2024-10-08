import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Image, TextInput, FlatList, Alert } from 'react-native';
import { ADD_FILE_BLACK_ICON, ADD_IMAGE_ICON, CHECK_ICON, CLOSE_BLACK_ICON, DELETE_ICON, SEARCH_ICON } from '../../assests/images';
import ModalDropdownComponent from '../ModalDropdownComponent';
import { spacings, style } from '../../constant/Fonts';
import { blackColor, lightGrayOpacityColor, whiteColor } from '../../constant/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../utils';
import { ADD_IMAGE, PHOTOS } from '../../constant/Constant';
import Button from '../Button';
import { launchImageLibrary } from 'react-native-image-picker';
const TableRow = ({ item }) => {
    return (
        <View style={styles.row}>
            <Text style={[styles.cell]}>{item.name}</Text>
            <Text style={styles.cell}>{item.costCode}</Text>
            <Text style={styles.cell}>{item.qty}</Text>
            <Text style={styles.cell}>{item.rate}</Text>
            <Text style={styles.cell}>{item.amount}</Text>
            <TouchableOpacity onPress={() => alert(`Deleted ${item.name}`)}>
                <Image source={DELETE_ICON} style={[{ width: wp(3), height: hp(3), padding: spacings.xxxxLarge }]} />
            </TouchableOpacity>
        </View>
    );
};
const SubcontractorDocketModal = ({ visible, onClose, onAdd }) => {
    const [selectedSubContactor, setSelectedSubContactor] = useState('');
    const [selectedSubContactorItem, setSelectedSubContactorItem] = useState('');
    const [costCode, setCostCode] = useState('');
    const [images, setImages] = useState(Array(3).fill(null));
    const data = [
        { id: '1', name: 'Item 1', costCode: '001', qty: 2, rate: 100, amount: 200 },
        { id: '2', name: 'Item 2', costCode: '002', qty: 1, rate: 150, amount: 150 },
        { id: '3', name: 'Item 3', costCode: '003', qty: 3, rate: 120, amount: 360 },
    ];

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

                    {/*Subcontractor  */}
                    <View style={{ marginTop: 20, width: "100%", }}>
                        <Text style={{ fontSize: 14, color: "#344054", fontWeight: "500" }}>Subcontractor</Text>
                        <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginTop: 10 }}>
                            <ModalDropdownComponent
                                options={['Type 1', 'Type 2']}
                                onSelect={(index, value) => setSelectedSubContactor(value)}
                                optionBoxStyle={[styles.dropdownStyle]}
                            />
                        </View>
                    </View>

                    {/*Subcontractor Item Description*/}
                    <View style={{ flexDirection: "row", gap: 5, width: "100%" }}>

                        {/*Subcontractor Item Description*/}
                        <View style={{ marginTop: 20, width: "30%" }}>
                            <Text style={{ fontSize: 14, color: "#344054", fontWeight: "500" }}>Subcontractor Item Description</Text>
                            <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginTop: 10 }}>
                                <ModalDropdownComponent
                                    options={['Type 1', 'Type 2']}
                                    onSelect={(index, value) => setSelectedSubContactorItem(value)}
                                    optionBoxStyle={[styles.dropdownStyle, { width: wp(22) }]}
                                />
                            </View>
                        </View>


                        {/* Cost code */}
                        <View style={{ marginTop: 20, width: "23%" }}>
                            <Text style={{ fontSize: 14, color: "#344054", fontWeight: "500" }}>Cost code</Text>
                            <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginTop: 10 }}>
                                <ModalDropdownComponent
                                    options={['Type 1', 'Type 2']}
                                    onSelect={(index, value) => setCostCode(value)}
                                    optionBoxStyle={[styles.dropdownStyle, { width: wp(17) }]}
                                />
                            </View>
                        </View>

                        {/* Quantity */}
                        <View style={{ marginTop: 20, width: "20%" }}>
                            <Text style={{ fontSize: 14, color: "#344054", fontWeight: "500" }}>Quantity</Text>
                            <View style={styles.textInputContainer}>
                                <TextInput
                                    style={[styles.input, { padding: spacings.xLarge }]}
                                    placeholder="25"
                                />
                            </View>
                        </View>

                        {/* Unit */}
                        <View style={{ marginTop: 20, width: "15%" }}>
                            <Text style={{ fontSize: 14, color: "#344054", fontWeight: "500" }}>Unit</Text>
                            <View style={styles.textInputContainer}>
                                <TextInput
                                    style={[styles.input, { padding: spacings.xLarge }]}
                                    placeholder="EA"
                                />
                            </View>
                        </View>

                        {/* + add */}

                        <View style={{ marginTop: 24, width: "10%" }}>
                            <Text style={{ fontSize: 14, color: "#344054", fontWeight: "500" }}></Text>
                            <View style={styles.textInputContainer}>
                                <Text style={{ fontSize: 18, color: "#344054", fontWeight: "500", alignSelf: "center", paddingVertical: 10, paddingHorizontal: 8 }}>+</Text>
                                {/* <TextInput
                                    style={styles.input}
                                    placeholder="EA"
                                /> */}
                            </View>
                        </View>
                    </View>
                    <View style={styles.container}>
                        {/* Table Headings */}
                        <View style={styles.header}>
                            <Text style={[styles.headerCell, { paddingLeft: 8 }]}>Items</Text>
                            <Text style={styles.headerCell}>Cost Code</Text>
                            <Text style={styles.headerCell}>Qty</Text>
                            <Text style={styles.headerCell}>Rate</Text>
                            <Text style={styles.headerCell}>Amount</Text>
                            {/* <Text style={styles.headerCell}></Text> */}
                        </View>

                        {/* Table Rows */}
                        <FlatList
                            data={data}
                            renderItem={({ item }) => <TableRow item={item} />}
                            keyExtractor={(item) => item.id}
                        />
                    </View>
                    {/*Tag Issue*/}
                    <View style={{ marginTop: 20, width: "100%" }}>
                        <Text style={{ fontSize: 14, color: "#344054", fontWeight: "500" }}>Tag Issue</Text>
                        <View style={styles.textInputContainer}>
                            <Image source={SEARCH_ICON} style={{ width: 15, height: 15, marginHorizontal: 4 }} resizeMode='contain' />
                            <TextInput
                                style={styles.input}
                                placeholder="Search Issue - (Caption: Issue ID — Issue Heading)"
                            />
                        </View>
                    </View>

                    <View style={[{ width: "100%", height: hp(6), marginVertical: spacings.large, flexDirection: "row", justifyContent: "space-evenly" }]}>
                        <View style={[{ width: "85%", height: "100%", justifyContent: "center" }]}>
                            <Text style={styles.text}>{PHOTOS}</Text>
                        </View>
                        <View style={[{ width: "15%", height: "100%", justifyContent: "center" }]}>
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

                    <View style={styles.modalButtons}>
                        <TouchableOpacity style={[styles.button, { width: "30%", paddingHorizontal: 10, flexDirection: "row" }]} onPress={onClose}>
                            <Image source={CLOSE_BLACK_ICON} style={{ width: 18, height: 18, marginRight: 4, alignSelf: "center" }} />
                            <Text style={[styles.buttonText, { color: "#475467" }]}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: '#155eef', paddingHorizontal: 15, flexDirection: "row", width: "70%", alignItems: "center", justifyContent: "center" }]} onPress={onAdd}>
                            <Image source={CHECK_ICON} style={{ width: 15, height: 15, marginRight: 4, alignSelf: "center" }} />
                            <Text style={styles.buttonText}>Create Subcontractor Docket</Text>
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
        width: wp(75),
        backgroundColor: 'white',
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 10,
        // alignItems: 'center',
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
    container: {
        width: "100%",
        marginTop: 20,
        // paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5
    },
    header: {
        width: "100%",
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 10,
        backgroundColor: "#f9fafb"
    },
    headerCell: {
        flex: 1,
        fontWeight: 'bold',
        width: "25%",
        padding: spacings.large,
        // marginRight: 5,

    },
    row: {
        flexDirection: 'row',
        // paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    cell: {
        flex: 1,
        padding: 12,
        borderRightWidth: 1,

        // backgroundColor:"green"
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
        width: wp(73),
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

export default SubcontractorDocketModal