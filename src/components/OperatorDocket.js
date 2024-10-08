import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Image, TextInput, ScrollView, FlatList, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import ModalDropdownComponent from './ModalDropdownComponent';
import { ADD_IMAGE_ICON, CALENDER_ICON, CHECK_ICON, CLOSE_BLACK_ICON, DELETE_ICON, DOLLAR_ICON, HASH_ICON, TIMER_ICON } from '../assests/images';
import { spacings, style } from '../constant/Fonts';
import { blackColor, lightGrayOpacityColor, whiteColor } from '../constant/Colors';
import CustomTextInput from './CustomeTextInput';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../utils';
import Button from './Button';
import { ADD_IMAGE, PHOTOS } from '../constant/Constant';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { launchImageLibrary } from 'react-native-image-picker';
const OperatorDocket = ({ visible, onClose, onAdd, hideBUtton }) => {
    const [selectedSupplier, setSelectedSupplier] = useState('');
    const [selectedResources, setSelectedResources] = useState('');
    const [selectedActivity, setSelectedActivity] = useState('');
    const [selectedOrder, setSelectedOrder] = useState('');
    const [selectedUnit, setSelectedUnit] = useState('');
    const [selectedIssue, setSelectedIssue] = useState('');
    const [selectedLineItem, setSelectedLineItem] = useState('');
    const [selectedAttachment, setSelecteAttachments] = useState('');
    const [selectedDuration, setSelectedDuration] = useState('');
    const [selectedBreakDuration, setSelectedBreakDuration] = useState('');
    const [startTimePicker, setStartTimePicker] = useState(false);
    const [finisTimePicker, setFinishTimePicker] = useState(false);
    const [breakStartTimePicker, setBreakStartTimePicker] = useState(false);
    const [startDateTime, setStartDateTime] = useState(new Date());
    const [finisDateTime, setFinishDateTime] = useState(new Date());
    const [breakDateTime, setBreakDateTime] = useState(new Date());
    const [isChecked, setIsChecked] = useState(false);
    const [images, setImages] = useState(Array(3).fill(null));
    // Example data array
    const attachmentData = [
        { id: '1', attachment: 'GPS Unit', unit: 'HR', amount: '$72' },
        { id: '2', attachment: 'GPS Unit', unit: 'EA', amount: '$100' },
    ];
    // Function to toggle the checkbox state
    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

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

    const renderItem = ({ item }) => (
        <View style={styles.row}>
            <Text style={[styles.cell, { paddingVertical: 10, textAlign: "center", borderWidth: 1, }]}>{item.attachment}</Text>
            <Text style={[styles.cell, { paddingVertical: 10, textAlign: "center", borderWidth: 1, }]}>{item.unit}</Text>
            <Text style={[styles.cell, { textAlign: "center", paddingVertical: 10, borderWidth: 1, }]}>{item.amount}</Text>
            <TouchableOpacity>
                <Image source={DELETE_ICON} style={[{ width: wp(3), height: hp(3), padding: spacings.xxxxLarge }]} />
                {/* <Text style={[styles.cell, { textAlign: "center", paddingVertical: 10, borderWidth: 1, }]}>🗑️</Text> */}
            </TouchableOpacity>
        </View>
    );
    return (
        <View >
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: hideBUtton ? 110 : 90 }}>
                {/*Supplier  */}
                <View style={{ marginTop: 20, width: "100%", }}>
                    <Text style={{ fontSize: 14, color: "#344054", fontWeight: "500" }}>Supplier</Text>
                    <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginTop: 10 }}>
                        <ModalDropdownComponent
                            options={['Supplier 1', 'Supplier 2']}
                            onSelect={(itemValue) => setSelectedSupplier(itemValue)}
                            optionBoxStyle={styles.dropdownStyle}
                        />
                    </View>
                </View>
                {/*Select Resource*/}
                <View style={{ marginTop: 20, width: "100%" }}>
                    <Text style={{ fontSize: 14, color: "#344054", fontWeight: "500" }}>Resource</Text>
                    <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginTop: 10 }}>
                        <ModalDropdownComponent
                            options={['Resources 1', 'Resources 2']}
                            onSelect={(itemValue) => setSelectedResources(itemValue)}
                            optionBoxStyle={styles.dropdownStyle}
                        />
                    </View>

                </View>
                {/*Set Activity*/}
                <View style={{ marginTop: 20, width: "100%" }}>
                    <Text style={{ fontSize: 14, color: "#344054", fontWeight: "500" }}>Activity</Text>
                    <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginTop: 10 }}>
                        <ModalDropdownComponent
                            options={['Activity 1', 'Activity 2']}
                            onSelect={(itemValue) => setSelectedActivity(itemValue)}
                            optionBoxStyle={styles.dropdownStyle}
                        />
                    </View>

                </View>
                {/*Purchase Order Line Item*/}
                <View style={{ marginTop: 20, width: "100%" }}>
                    <Text style={{ fontSize: 14, color: "#344054", fontWeight: "500" }}>Purchase Order Line Item</Text>
                    <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginTop: 10 }}>
                        <ModalDropdownComponent
                            options={['Order 1', 'Order 2']}
                            onSelect={(itemValue) => setSelectedOrder(itemValue)}
                            optionBoxStyle={styles.dropdownStyle}
                        />
                    </View>

                </View>
                {/*Billing Unit*/}
                <View style={{ marginTop: 20, width: "100%" }}>
                    <Text style={{ fontSize: 14, color: "#344054", fontWeight: "500" }}>Billing Unit</Text>
                    <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginTop: 10 }}>
                        <ModalDropdownComponent
                            options={['Unit 1', 'Unit 2']}
                            onSelect={(itemValue) => setSelectedUnit(itemValue)}
                            optionBoxStyle={styles.dropdownStyle}
                        />
                    </View>

                </View>

                {/*Docket Number  */}
                <View style={{ marginTop: 20, width: "100%" }}>
                    <Text style={{ fontSize: 14, color: "#344054", fontWeight: "500" }}>Docket Number</Text>
                    <View style={styles.textInputContainer}>
                        <Image source={HASH_ICON} style={{ width: 15, height: 15, marginHorizontal: 4 }} />

                        <TextInput
                            style={styles.input}
                            placeholder="GG-PTP-4203443s"
                        // editable={false}
                        />
                    </View>

                </View>
                {/*Tag Issue*/}
                <View style={{ marginTop: 20, width: "100%" }}>
                    <Text style={{ fontSize: 14, color: "#344054", fontWeight: "500" }}>Tag Issue</Text>
                    <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginTop: 10 }}>
                        <ModalDropdownComponent
                            options={['Issue 1', 'Issue 2']}
                            onSelect={(itemValue) => setSelectedIssue(itemValue)}
                            optionBoxStyle={styles.dropdownStyle}
                        />
                    </View>

                </View>



                {/* prestart at operator Rate */}
                <View style={{ flexDirection: "row", marginVertical: 10 }} >
                    <TouchableOpacity onPress={toggleCheckbox} style={{ marginHorizontal: 4 }}>
                        {isChecked ? <Ionicons
                            name={"checkbox"}
                            size={20}
                            color="blue"
                        /> :
                            <FontAwesome
                                name={"square-o"}
                                size={20}
                                color="blue"
                            />}
                    </TouchableOpacity>
                    <Text style={{ fontSize: 14, color: "#344054", fontWeight: "500" }}>Prestart at Operator Rate</Text>
                </View>

                <View style={{ flexDirection: "row", gap: 5 }}>
                    {/*Select line item  */}
                    <View style={{ marginTop: 20, width: "47%", }}>
                        <Text style={{ fontSize: 14, color: "#344054", fontWeight: "500" }}>Select line item</Text>
                        <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginTop: 10 }}>
                            <ModalDropdownComponent
                                options={['Supplier 1', 'Supplier2']}
                                onSelect={(itemValue) => setSelectedLineItem(itemValue)}
                                optionBoxStyle={[styles.dropdownStyle,{width:wp(22)}]}
                            />
                        </View>
                    </View>
                    {/*Select Resource*/}
                    <View style={{ marginTop: 20, width: "25%" }}>
                        <Text style={{ fontSize: 14, color: "#344054", fontWeight: "500" }}>Duration</Text>
                        <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginTop: 10 }}>
                            <ModalDropdownComponent
                                options={['Supplier 1', 'Supplier2']}
                                onSelect={(itemValue) => setSelectedDuration(itemValue)}
                                optionBoxStyle={[styles.dropdownStyle,{width:wp(12)}]}
                            />
                        </View>

                    </View>

                    {/* Amount */}
                    <View style={{ marginTop: 20, width: "25%" }}>
                        <Text style={{ fontSize: 14, color: "#344054", fontWeight: "500" }}>Amount</Text>
                        <View style={styles.textInputContainer}>
                            <Image source={DOLLAR_ICON} style={{ width: 15, height: 15, marginHorizontal: 4, resizeMode: "contain" }} />
                            <TextInput
                                style={styles.input}
                                placeholder="120"
                            // editable={false}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ borderWidth: .5, marginTop: 20, borderColor: "#ccc" }} />

                {/* Attachments */}
                <View style={{ flexDirection: "row", gap: 5 }}>
                    {/*Attachments  */}
                    <View style={{ marginTop: 20, width: "47%", }}>
                        <Text style={{ fontSize: 14, color: "#344054", fontWeight: "500" }}>Attachments</Text>
                        <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginTop: 10 }}>
                            <ModalDropdownComponent
                                options={['Supplier 1', 'Supplier2']}
                                onSelect={(itemValue) => setSelecteAttachments(itemValue)}
                                optionBoxStyle={[styles.dropdownStyle,{width:wp(22)}]}
                            />
                        </View>
                    </View>


                    {/* Qty. */}
                    <View style={{ marginTop: 20, width: "25%" }}>
                        <Text style={{ fontSize: 14, color: "#344054", fontWeight: "500" }}>Qty.</Text>
                        <View style={styles.textInputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="1"
                            // editable={false}
                            />
                        </View>
                    </View>


                    {/*Select Resource*/}
                    <View style={{ marginTop: 20, width: "25%" }}>
                        <Text style={{ fontSize: 14, color: "#344054", fontWeight: "500" }}></Text>
                        <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginTop: 10, padding: 14 }}>
                            <Text style={{ color: "#344054" }}>+ Add</Text>
                        </View>

                    </View>
                </View>
                <View style={styles.container}>
                    {/* Table Headings and Data in one Table */}
                    <View style={styles.table}>
                        {/* Header Row */}
                        <View style={[styles.row, { backgroundColor: "transparent", borderWidth: 1, borderColor: "#ccc" }]}>
                            <Text style={[styles.cell, styles.header, { paddingVertical: 6, bordeWidth: 0, textAlign: "center" }]}>Attachments</Text>
                            <Text style={[styles.cell, styles.header, { paddingVertical: 6, borderWidth: 0, textAlign: "center" }]}>Unit</Text>
                            <Text style={[styles.cell, styles.header, { paddingVertical: 6, borderWidth: 0, textAlign: "center" }]}>Amount</Text>
                        </View>

                        {/* Data Rows */}
                        <FlatList
                            data={attachmentData}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                        />
                    </View>
                </View>

                {/*Start time*/}
                <View style={{ flexDirection: "row", gap: 5 }}>

                    {/*Start time*/}
                    <View style={{ marginVertical: 20, width: "48%" }}>
                        <Text style={{ fontSize: 14, color: "#344054", fontWeight: "500" }}>Start time</Text>
                        <View style={styles.textInputContainer}>
                            <Image source={CALENDER_ICON} style={{ width: 15, height: 15, marginHorizontal: 4, resizeMode: "contain" }} />
                            <TouchableOpacity onPress={() => setStartTimePicker(true)}>
                                <View style={[styles.input, { paddingVertical: 15 }]}>
                                    <Text>{startDateTime ? startDateTime.toLocaleString() : "Select time"}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        {startTimePicker && (
                            <DateTimePicker
                                value={startDateTime}
                                mode="datetime"
                                display="default"
                                onChange={(event, selectedDate) => {
                                    setStartDateTime(selectedDate || startDateTime);
                                    setStartTimePicker(false);
                                }}
                                style={{ position: "absolute", top: 75 }}
                            />
                        )}
                    </View>

                    {/*FInish time*/}
                    <View style={{ marginVertical: 20, width: "50%" }}>
                        <Text style={{ fontSize: 14, color: "#344054", fontWeight: "500" }}>Finish time</Text>
                        <View style={styles.textInputContainer}>
                            <Image source={CALENDER_ICON} style={{ width: 15, height: 15, marginHorizontal: 4, resizeMode: "contain" }} />
                            <TouchableOpacity onPress={() => setFinishTimePicker(true)}>
                                <View style={[styles.input, { paddingVertical: 15 }]}>
                                    <Text>{finisDateTime ? finisDateTime.toLocaleString() : "Select time"}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        {finisTimePicker && (
                            <DateTimePicker
                                value={finisDateTime}
                                mode="datetime"
                                display="default"
                                onChange={(event, selectedDate) => {
                                    setFinishDateTime(selectedDate || finisDateTime);
                                    setFinishTimePicker(false);
                                }}
                                style={{ position: "absolute", top: 75 }}
                            />
                        )}
                    </View>
                </View>

                {/*Start time*/}
                <View style={{ flexDirection: "row", gap: 5 }}>

                    {/*Break Start Time*/}
                    <View style={{ marginVertical: 20, width: "48%" }}>
                        <Text style={{ fontSize: 14, color: "#344054", fontWeight: "500" }}>Break Start Time</Text>
                        <View style={styles.textInputContainer}>
                            <Image source={CALENDER_ICON} style={{ width: 15, height: 15, marginHorizontal: 4, resizeMode: "contain" }} />
                            <TouchableOpacity onPress={() => setBreakStartTimePicker(true)}>
                                <View style={[styles.input, { paddingVertical: 15 }]}>
                                    <Text>{breakDateTime ? breakDateTime.toLocaleString() : "Select time"}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        {breakStartTimePicker && (
                            <DateTimePicker
                                value={breakDateTime}
                                mode="datetime"
                                display="default"
                                onChange={(event, selectedDate) => {
                                    setBreakDateTime(selectedDate || breakDateTime);
                                    setBreakStartTimePicker(false);
                                }}
                                style={{ position: "absolute", top: 75 }}
                            />
                        )}
                    </View>

                    {/*Break Duration*/}
                    <View style={{ marginTop: 20, width: "50%" }}>
                        <Text style={{ fontSize: 14, color: "#344054", fontWeight: "500" }}>Break Duration</Text>
                        <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginTop: 10 }}>
                            <ModalDropdownComponent
                                options={['Supplier 1', 'Supplier2']}
                                onSelect={(itemValue) => setSelectedBreakDuration(itemValue)}
                                optionBoxStyle={[styles.dropdownStyle,{width:wp(24)}]}
                            />
                        </View>

                    </View>
                </View>

                {/*Unit Quantity*/}
                <View style={{ flexDirection: "row", gap: 10 }}>

                    {/*Unit Quantity*/}
                    <View style={{ marginTop: 20, width: "48%" }}>
                        <Text style={{ fontSize: 14, color: "#344054", fontWeight: "500" }}>Unit Quantity</Text>
                        <View style={styles.textInputContainer}>
                            <Image source={TIMER_ICON} style={{ width: 15, height: 15, marginHorizontal: 4 }} />
                            <TextInput
                                style={styles.input}
                                placeholder="11"
                            />
                        </View>
                    </View>

                    {/*Amount Spent*/}
                    <View style={{ marginTop: 20, width: "48%" }}>
                        <Text style={{ fontSize: 14, color: "#344054", fontWeight: "500" }}>Amount Spent</Text>
                        <View style={styles.textInputContainer}>
                            <Image source={DOLLAR_ICON} style={{ width: 15, height: 15, marginHorizontal: 4, resizeMode: "contain" }} />

                            <TextInput
                                style={styles.input}
                                placeholder="220"
                            // editable={false}
                            />
                        </View>
                    </View>
                </View>

                <CustomTextInput placeholder={"Enter Note about This Docket"} textInputHeading={"Docket Note"} />
                <View style={[{ width: "100%", height: hp(6), marginBottom: spacings.large, flexDirection: "row", justifyContent: "space-evenly" }]}>
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
                    <Text style={styles.buttonText}>Create Docket</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
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
        color: "#101828",
        fontWeight: "600"
    },
    modalButtons: {
        position: "absolute",
        bottom: 0,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 40,
        gap: 10,
        backgroundColor: "#fff"
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
        padding: 10,
    },
    table: {
        // borderWidth: 1,
        borderColor: '#000', // Table border color
    },
    row: {
        flexDirection: 'row',
        // marginBottom:10
    },
    cell: {
        flex: 1,
        // textAlign: 'center',
        // padding: 10,
        // 
        borderColor: '#ccc', // Cell border color
    },
    header: {

        // backgroundColor: '#f5f5f5',
        fontWeight: 'bold',
    },
    deleteIcon: {
        color: '#FF0000',
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
        // backgroundColor: '#D9D9D9',
        // borderColor: '#aaa',
        // borderWidth: 1,
        margin: spacings.large
    },
    dropdownStyle: {
        backgroundColor: whiteColor,
        borderWidth: 1,
        borderColor: lightGrayOpacityColor,
        borderRadius: 5,
        width: wp(48),
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

export default OperatorDocket