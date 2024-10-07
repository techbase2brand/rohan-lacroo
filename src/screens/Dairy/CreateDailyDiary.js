import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { launchImageLibrary } from 'react-native-image-picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../utils';
import { BaseStyle } from '../../constant/Style';
import { blackColor, blueColor, redColor, verylightGrayColor } from '../../constant/Colors';
import { spacings, style } from '../../constant/Fonts';
import SideMenu from '../../components/SideMenu';
import Header from '../../components/Header';
import { ACTIVITIES, ACTIVITY, ACTIVITY_DESCRIPTION, ACTIVIT_AND_COST, ACTUAL_QTY, ACTUAL_RATE, ADD_ACTIVITY, ADD_FILE, ADD_IMAGE, ADD_RESOURCES, AMOUNT, BREAK, CANCLE, CLOSE_DIARY, COST_CODE, COST_CODE_DESCRIPTION, CREATE_DAILY_DIARY, CREATE_DIARY, CREATE_DOCKET, CREATE_MATERIAL_DOCKET, CREATE_MATERIAL_RECEIPTS, CREATE_PRESTART, CREATE_SUBNTRACTOR_DOCKET, DIARY, END, ENVIRONMENTAL_NOTES, FILES, FILE_NAME, FREE_TEXT, GENERALBUSINESS, GENERAL_BUSINESS, GEORGIOS_INCIDENT_ALERT, GET_WEATHER, HRS, IDENTIFY_ANY_NEW, IDENTIFY_WORK_PLANNED, INC_PLANT_LABOUR, ISSUES, ISSUE_DESCRIPTION, ISSUE_HEADING, ISSUE_ID, ITEM_DESCRIPTION, MATERIAL_RECEIPTS, PHOTOS, PLANTS_AND_LABOUR_DOCKET, PO, PRESTART, PROVIDE_DETAILS_OF_INCIDENT, PUBLISH_PRESTART_AND_CREATE_DIARY, QTY, QUALITY_NOTES, RAISE_ISSUES, RATE, RESOURCES, RESOURCES_TYPE, SAFATY_IS_MY_WAY, SAFATY_NOTES, SAVE_DIARY, SAVE_PRESTART, START, SUBCONTRACTOR, SUBCONTRACTOR_ITEM_DESCRIPTION, SUBMIT_DIARY, SUBNTRACTOR_DOCKET, SUB_CODE, SUPPLIER, TARGET_QTY, TARGET_RATE, UNIT } from '../../constant/Constant';
import ShiftForm from '../../components/ShiftForm';
import Button from '../../components/Button';
import { ADD_FILE_BLACK_ICON, ADD_FILE_ICON, ADD_IMAGE_ICON, CHECK_ICON, CLOSE_ICON, HAND_ICON, PLUS_IMAGE, WEATHER_ICON } from '../../assests/images';
import WeatherCard from '../../components/WeatherCard';
import PreStartItem from '../../components/PreStartItem';
import CustomTextInput from '../../components/CustomeTextInput';
import AddActivityModal from '../../components/modal/AddActivityModal';
import AddResourceModal from '../../components/modal/AddResourceModal';
import DiaryItem from '../../components/DiaryItem';
import CreateDocketModal from '../../components/modal/CreateDocketModal';
import MaterialReceiptModal from '../../components/modal/MaterialReceiptModal';
import SubcontractorDocketModal from '../../components/modal/SubcontractorDocketModal';
const { flex, alignItemsCenter, justifyContentCenter, alignJustifyCenter, flexDirectionRow, justifyContentSpaceEvenly } = BaseStyle;
const CreateDailyDiary = ({ navigation }) => {
    const [activityModalVisible, setActivityModalVisible] = useState(false);
    const [docketModalVisible, setDocketModalVisible] = useState(false);
    const [materialModalVisible, setMaterialModalVisible] = useState(false);
    const [contractModalVisible, setContractModalVisible] = useState(false);
    const [images, setImages] = useState(Array(5).fill(null));
    const weatherData = [
        { id: '1', temperature: 10, condition: 'Overcast Clouds', time: '6 AM' },
        { id: '2', temperature: 15, condition: 'Clear Sky', time: '9 AM' },
        { id: '3', temperature: 15, condition: 'Clear Sky', time: '9 AM' },
        { id: '4', temperature: 15, condition: 'Clear Sky', time: '9 AM' },
        { id: '5', temperature: 15, condition: 'Clear Sky', time: '9 AM' },
        { id: '6', temperature: 15, condition: 'Clear Sky', time: '9 AM' },
        { id: '7', temperature: 15, condition: 'Clear Sky', time: '9 AM' },
    ];
    const sampleData = [
        {
            RESOURCES: "Excavator",
            RESOURCES_TYPE: "Equipment",
            COST_CODE: "CC001",
            START: "08:00",
            END: "16:00",
            BREAK: "1",
            HRS: "7",
            RATE: "50",
            UNIT: "hrs",
            AMOUNT: "350",
        },
        {
            RESOURCES: "Worker 1",
            RESOURCES_TYPE: "Labor",
            COST_CODE: "CC002",
            START: "08:00",
            END: "17:00",
            BREAK: "1",
            HRS: "8",
            RATE: "20",
            UNIT: "hrs",
            AMOUNT: "160",
        },
        {
            RESOURCES: "Truck",
            RESOURCES_TYPE: "Equipment",
            COST_CODE: "CC003",
            START: "09:00",
            END: "15:00",
            BREAK: "0.5",
            HRS: "5.5",
            RATE: "80",
            UNIT: "hrs",
            AMOUNT: "440",
        }
    ];
    const data = [
        {
            COST_CODE: "CC001",
            COST_CODE_DESCRIPTION: "Excavation Work",
            TARGET_QTY: "100",
            ACTUAL_QTY: "90",
            UNIT: "LM",
            TARGET_RATE: "50",
            ACTUAL_RATE: "48",
        },
        {
            COST_CODE: "CC002",
            COST_CODE_DESCRIPTION: "Concrete Pouring",
            TARGET_QTY: "200",
            ACTUAL_QTY: "190",
            UNIT: "TONNER",
            TARGET_RATE: "70",
            ACTUAL_RATE: "65",
        },
        {
            COST_CODE: "CC003",
            COST_CODE_DESCRIPTION: "Steel Reinforcement",
            TARGET_QTY: "500",
            ACTUAL_QTY: "490",
            UNIT: "LM",
            TARGET_RATE: "5",
            ACTUAL_RATE: "4.8",
        }
    ];
    const fileData = [
        {
            fileName: "File Name.doc"
        },
        {
            fileName: "File Name.csv"
        }
    ]
    const materialData = [
        {
            ITEM_DESCRIPTION: "Concrete",
            SUPPLIER: "ABC Supplies",
            PO: "PO12345",
            COST_CODE: "CC001",
            QTY: "100",
            RATE: "50",
            UNIT: "m³",
            AMOUNT: "5000",
        },
        {
            ITEM_DESCRIPTION: "Steel Rods",
            SUPPLIER: "XYZ Steel",
            PO: "PO67890",
            COST_CODE: "CC002",
            QTY: "500",
            RATE: "5",
            UNIT: "kg",
            AMOUNT: "2500",
        },
        {
            ITEM_DESCRIPTION: "Bricks",
            SUPPLIER: "BrickWorks",
            PO: "PO11121",
            COST_CODE: "CC003",
            QTY: "1000",
            RATE: "0.8",
            UNIT: "pcs",
            AMOUNT: "800",
        }
    ]
    const contractorData = [
        {
            SUBCONTRACTOR_ITEM_DESCRIPTION: "Electrical Work",
            SUBCONTRACTOR: "Power Solutions Inc.",
            PO: "PO54321",
            COST_CODE: "CC004",
            AMOUNT: "15000",
        },
        {
            SUBCONTRACTOR_ITEM_DESCRIPTION: "Plumbing Installation",
            SUBCONTRACTOR: "WaterWorks Co.",
            PO: "PO67892",
            COST_CODE: "CC005",
            AMOUNT: "10000",
        },
        {
            SUBCONTRACTOR_ITEM_DESCRIPTION: "Masonry",
            SUBCONTRACTOR: "BrickMasters Ltd.",
            PO: "PO99887",
            COST_CODE: "CC006",
            AMOUNT: "12000",
        },
    ];
    const IssuesData = [
        {
            ISSUE_ID: "IS001",
            ISSUE_HEADING: "Electrical Malfunction",
            ISSUE_DESCRIPTION: "The wiring in section B is faulty and needs immediate repair.",
        },
        {
            ISSUE_ID: "IS002",
            ISSUE_HEADING: "Water Leakage",
            ISSUE_DESCRIPTION: "Leak detected in the main pipeline running through the basement.",
        },
        {
            ISSUE_ID: "IS003",
            ISSUE_HEADING: "Material Shortage",
            ISSUE_DESCRIPTION: "Shortage of cement for concrete work in area A2.",
        },
    ];

    const handleAddImage = async () => {
        // Check for an available slot
        const emptyIndex = images.findIndex((img) => img === null);
        if (emptyIndex === -1) {
            Alert.alert("Limit reached", "You can only add up to 10 images.");
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
            newImages[emptyIndex] = source; // Add the image to the first available slot
            setImages(newImages); // Update the state
        }
    };

    const openActivityModal = () => {
        // console.log('Opening modal');
        setActivityModalVisible(true);
    };

    const closeActivitModal = () => {
        // console.log('Closing modal');
        setActivityModalVisible(false);
    };

    const handleAddActivity = () => {
        setActivityModalVisible(false);

        console.log('Item deleted');
    };

    const openDocketModal = () => {
        // console.log('Opening modal');
        setDocketModalVisible(true);
    };

    const closeDocketModal = () => {
        // console.log('Closing modal');
        setDocketModalVisible(false);
    };

    const handleAddDocket = () => {
        // console.log('Item deleted');
        setDocketModalVisible(false);
    };

    const openMaterialModal = () => {
        setMaterialModalVisible(true);
    };

    const closeMaterialModal = () => {
        setMaterialModalVisible(false);
    };

    const handleAddMaterial = () => {
        setMaterialModalVisible(false);
    };

    const openContractModal = () => {
        setContractModalVisible(true);
    };

    const closeContractModal = () => {
        setContractModalVisible(false);
    };

    const handleAddContract = () => {
        setContractModalVisible(false);
    };

    return (
        <View style={[flex, flexDirectionRow]}>
            <SideMenu />
            <View style={styles.container}>
                <ScrollView style={{ marginBottom: 100 }} showsVerticalScrollIndicator={false}>
                    <Header screenRouteName={DIARY} screenName={CREATE_DAILY_DIARY} showRoute={true} navigation={navigation} />
                    <View style={styles.prestartBox}>
                        <View style={styles.line}></View>
                        <ShiftForm from={"Diary"} />
                        <View style={[styles.line, { marginVertical: spacings.Large2x }]}></View>
                        <View style={[{ width: "100%", height: hp(6) }, flexDirectionRow]}>
                            <View style={[{ width: "87%", height: "100%" }, justifyContentCenter]}>
                                <Text style={styles.text}>Weather</Text>
                            </View>
                            {/* <View style={[{ width: "13%", height: "100%" }, justifyContentCenter]}>
                                <Button
                                    buttonText={GET_WEATHER}
                                    buttonStyle={styles.buttonStyle}
                                    buttonTextStyle={styles.buttonTextStyle}
                                    imageSource={WEATHER_ICON} />
                            </View> */}
                        </View>

                        <FlatList
                            data={weatherData}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <WeatherCard
                                    temperature={item.temperature}
                                    condition={item.condition}
                                    time={item.time}
                                />
                            )}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                        {/* Activities */}
                        <View style={styles.line}></View>
                        <View style={[{ width: "100%", height: hp(6), marginBottom: spacings.large }, justifyContentSpaceEvenly, flexDirectionRow]}>
                            <View style={[{ width: "87%", height: "100%" }, justifyContentCenter]}>
                                <Text style={styles.text}>{ACTIVITIES}</Text>
                            </View>
                            <View style={[{ width: "13%", height: "100%" }, justifyContentCenter]}>
                                <Button
                                    buttonText={ADD_ACTIVITY}
                                    buttonStyle={styles.buttonStyle}
                                    buttonTextStyle={styles.buttonTextStyle}
                                    imageSource={PLUS_IMAGE}
                                    onPress={openActivityModal}
                                />
                            </View>
                        </View>
                        <View style={[{ width: "100%", height: hp(5), backgroundColor: "#F9FAFB", borderTopLeftRadius: 10, borderTopRightRadius: 10 }, flexDirectionRow]}>
                            <View style={[{ width: wp(9) }, justifyContentCenter]}>
                                <Text style={styles.text}>{COST_CODE}</Text>
                            </View>
                            <View style={[{ width: wp(20) }, justifyContentCenter]}>
                                <Text style={styles.text}>{COST_CODE_DESCRIPTION}</Text>
                            </View>
                            <View style={[{ width: wp(11) }, justifyContentCenter]}>
                                <Text style={styles.text}>{TARGET_QTY}</Text>
                            </View>
                            <View style={[{ width: wp(9) }, justifyContentCenter]}>
                                <Text style={styles.text}>{ACTUAL_QTY}</Text>
                            </View>
                            <View style={[{ width: wp(11) }, justifyContentCenter]}>
                                <Text style={styles.text}>{UNIT}</Text>
                            </View>
                            <View style={[{ width: wp(9) }, justifyContentCenter]}>
                                <Text style={styles.text}>{TARGET_RATE}</Text>
                            </View>
                            <View style={[{ width: wp(9) }, justifyContentCenter]}>
                                <Text style={styles.text}>{ACTUAL_RATE}</Text>
                            </View>
                            <View style={[{ width: wp(9) }, justifyContentCenter]}>
                                <Text style={styles.text}>{UNIT}</Text>
                            </View>
                        </View>
                        <DiaryItem data={data} from={"Activity"} />
                        <View style={[styles.line, { marginVertical: spacings.Large1x }]}></View>

                        {/* PLANTS_AND_LABOUR_DOCKET */}
                        <View style={[{ width: "100%", height: hp(6), marginBottom: spacings.large }, justifyContentSpaceEvenly, flexDirectionRow]}>
                            <View style={[{ width: "85%", height: "100%" }, justifyContentCenter]}>
                                <Text style={styles.text}>{PLANTS_AND_LABOUR_DOCKET}</Text>
                            </View>
                            <View style={[{ width: "15%", height: "100%" }, justifyContentCenter]}>
                                <Button
                                    buttonText={CREATE_DOCKET}
                                    buttonStyle={styles.buttonStyle}
                                    buttonTextStyle={styles.buttonTextStyle}
                                    imageSource={PLUS_IMAGE}
                                    onPress={openDocketModal}
                                />
                            </View>
                        </View>
                        <View style={[{ width: "100%", height: hp(5), backgroundColor: "#F9FAFB", borderTopLeftRadius: 10, borderTopRightRadius: 10 }, flexDirectionRow]}>
                            <View style={[{ width: wp(13) }, justifyContentCenter]}>
                                <Text style={styles.text}>{RESOURCES}</Text>
                            </View>
                            <View style={[{ width: wp(12) }, justifyContentCenter]}>
                                <Text style={styles.text}>{RESOURCES_TYPE}</Text>
                            </View>
                            <View style={[{ width: wp(9) }, justifyContentCenter]}>
                                <Text style={styles.text}>{COST_CODE}</Text>
                            </View>
                            <View style={[{ width: wp(7) }, justifyContentCenter]}>
                                <Text style={styles.text}>{START}</Text>
                            </View>
                            <View style={[{ width: wp(7) }, justifyContentCenter]}>
                                <Text style={styles.text}>{END}</Text>
                            </View>
                            <View style={[{ width: wp(7) }, justifyContentCenter]}>
                                <Text style={styles.text}>{BREAK}</Text>
                            </View>
                            <View style={[{ width: wp(7) }, justifyContentCenter]}>
                                <Text style={styles.text}>{HRS}</Text>
                            </View>
                            <View style={[{ width: wp(7) }, justifyContentCenter]}>
                                <Text style={styles.text}>{RATE}</Text>
                            </View>
                            <View style={[{ width: wp(7) }, justifyContentCenter]}>
                                <Text style={styles.text}>{UNIT}</Text>
                            </View>
                            <View style={[{ width: wp(7) }, justifyContentCenter]}>
                                <Text style={styles.text}>{AMOUNT}</Text>
                            </View>
                            <View style={[{ width: wp(10) }, justifyContentCenter]}>
                            </View>
                        </View>
                        <DiaryItem data={sampleData} from={"Docket"} />

                        <CustomTextInput
                            multiPlaceholders={[ACTIVITY_DESCRIPTION, INC_PLANT_LABOUR]}
                        />
                        <View style={[styles.line, { marginVertical: spacings.Large1x }]}></View>

                        {/* MATERIAL_RECEIPTS */}
                        <View style={[{ width: "100%", height: hp(6), marginBottom: spacings.large }, justifyContentSpaceEvenly, flexDirectionRow]}>
                            <View style={[{ width: "77%", height: "100%" }, justifyContentCenter]}>
                                <Text style={styles.text}>{MATERIAL_RECEIPTS}</Text>
                            </View>
                            <View style={[{ width: "23%", height: "100%" }, justifyContentCenter]}>
                                <Button
                                    buttonText={CREATE_MATERIAL_RECEIPTS}
                                    buttonStyle={styles.buttonStyle}
                                    buttonTextStyle={styles.buttonTextStyle}
                                    imageSource={PLUS_IMAGE}
                                    onPress={openMaterialModal}
                                />
                            </View>
                        </View>
                        <View style={[{ width: "100%", height: hp(5), backgroundColor: "#F9FAFB", borderTopLeftRadius: 10, borderTopRightRadius: 10 }, flexDirectionRow]}>
                            <View style={[{ width: wp(20) }, justifyContentCenter]}>
                                <Text style={styles.text}>{ITEM_DESCRIPTION}</Text>
                            </View>
                            <View style={[{ width: wp(15) }, justifyContentCenter]}>
                                <Text style={styles.text}>{SUPPLIER}</Text>
                            </View>
                            <View style={[{ width: wp(9) }, justifyContentCenter]}>
                                <Text style={styles.text}>{PO}</Text>
                            </View>
                            <View style={[{ width: wp(10) }, justifyContentCenter]}>
                                <Text style={styles.text}>{COST_CODE}</Text>
                            </View>
                            <View style={[{ width: wp(7) }, justifyContentCenter]}>
                                <Text style={styles.text}>{QTY}</Text>
                            </View>
                            <View style={[{ width: wp(7) }, justifyContentCenter]}>
                                <Text style={styles.text}>{RATE}</Text>
                            </View>
                            <View style={[{ width: wp(7) }, justifyContentCenter]}>
                                <Text style={styles.text}>{UNIT}</Text>
                            </View>
                            <View style={[{ width: wp(7) }, justifyContentCenter]}>
                                <Text style={styles.text}>{AMOUNT}</Text>
                            </View>
                            <View style={[{ width: wp(10) }, justifyContentCenter]}>
                            </View>
                        </View>
                        <DiaryItem data={materialData} from={"Material"} />
                        <View style={[styles.line, { marginVertical: spacings.Large1x }]}></View>

                        {/* SubContractor */}
                        <View style={[{ width: "100%", height: hp(6), marginBottom: spacings.large }, justifyContentSpaceEvenly, flexDirectionRow]}>
                            <View style={[{ width: "77%", height: "100%" }, justifyContentCenter]}>
                                <Text style={styles.text}>{SUBNTRACTOR_DOCKET}</Text>
                            </View>
                            <View style={[{ width: "23%", height: "100%" }, justifyContentCenter]}>
                                <Button
                                    buttonText={CREATE_SUBNTRACTOR_DOCKET}
                                    buttonStyle={styles.buttonStyle}
                                    buttonTextStyle={styles.buttonTextStyle}
                                    imageSource={PLUS_IMAGE}
                                    onPress={openContractModal}
                                />
                            </View>
                        </View>
                        <View style={[{ width: "100%", height: hp(5), backgroundColor: "#F9FAFB", borderTopLeftRadius: 10, borderTopRightRadius: 10 }, flexDirectionRow]}>
                            <View style={[{ width: wp(35) }, justifyContentCenter]}>
                                <Text style={styles.text}>{SUBCONTRACTOR_ITEM_DESCRIPTION}</Text>
                            </View>
                            <View style={[{ width: wp(15) }, justifyContentCenter]}>
                                <Text style={styles.text}>{SUBCONTRACTOR}</Text>
                            </View>
                            <View style={[{ width: wp(12) }, justifyContentCenter]}>
                                <Text style={styles.text}>{PO}</Text>
                            </View>
                            <View style={[{ width: wp(12) }, justifyContentCenter]}>
                                <Text style={styles.text}>{COST_CODE}</Text>
                            </View>
                            <View style={[{ width: wp(9) }, justifyContentCenter]}>
                                <Text style={styles.text}>{AMOUNT}</Text>
                            </View>
                            <View style={[{ width: wp(9) }, justifyContentCenter]}>
                            </View>
                        </View>
                        <DiaryItem data={contractorData} from={"SubContractor"} />
                        <View style={[styles.line, { marginVertical: spacings.Large1x }]}></View>

                        {/* issues */}
                        <View style={[{ width: "100%", height: hp(6), marginBottom: spacings.large }, justifyContentSpaceEvenly, flexDirectionRow]}>
                            <View style={[{ width: "87%", height: "100%" }, justifyContentCenter]}>
                                <Text style={styles.text}>{ISSUES}</Text>
                            </View>
                            <View style={[{ width: "13%", height: "100%" }, justifyContentCenter]}>
                                <Button
                                    buttonText={RAISE_ISSUES}
                                    buttonStyle={[styles.buttonStyle, { borderColor: redColor }]}
                                    buttonTextStyle={[styles.buttonTextStyle, { color: redColor }]}
                                    imageSource={HAND_ICON}
                                // onPress={openResourcesModal} 
                                />
                            </View>
                        </View>
                        <View style={[{ width: "100%", height: hp(5), backgroundColor: "#F9FAFB", borderTopLeftRadius: 10, borderTopRightRadius: 10 }, flexDirectionRow]}>
                            <View style={[{ width: wp(19) }, justifyContentCenter]}>
                                <Text style={styles.text}>{ISSUE_ID}</Text>
                            </View>
                            <View style={[{ width: wp(30) }, justifyContentCenter]}>
                                <Text style={styles.text}>{ISSUE_HEADING}</Text>
                            </View>
                            <View style={[{ width: wp(35) }, justifyContentCenter]}>
                                <Text style={styles.text}>{ISSUE_DESCRIPTION}</Text>
                            </View>
                            <View style={[{ width: wp(9) }, justifyContentCenter]}>
                            </View>
                        </View>
                        <DiaryItem data={IssuesData} from={"Issues"} />
                        <View style={[styles.line, { marginVertical: spacings.Large1x }]}></View>
                        {/* TextInputs */}
                        <CustomTextInput placeholder={"Type here"} textInputHeading={SAFATY_NOTES} />
                        <CustomTextInput placeholder={"Type here"} textInputHeading={QUALITY_NOTES} />
                        <CustomTextInput placeholder={"Type here"} textInputHeading={ENVIRONMENTAL_NOTES} />
                        <CustomTextInput placeholder={"Type here"} textInputHeading={GENERALBUSINESS} />

                        <View style={[styles.line, { marginVertical: spacings.Large1x }]}></View>
                        <View style={[{ width: "100%", height: hp(6), marginBottom: spacings.large }, justifyContentSpaceEvenly, flexDirectionRow]}>
                            <View style={[{ width: "88%", height: "100%" }, justifyContentCenter]}>
                                <Text style={styles.text}>{PHOTOS}</Text>
                            </View>
                            <View style={[{ width: "12%", height: "100%" }, justifyContentCenter]}>
                                <Button
                                    buttonText={ADD_IMAGE}
                                    buttonStyle={styles.buttonStyle}
                                    buttonTextStyle={styles.buttonTextStyle}
                                    imageSource={ADD_IMAGE_ICON}

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
                        <View style={[styles.line, { marginVertical: spacings.Large1x }]}></View>
                        <View style={[{ width: "100%", height: hp(6), marginBottom: spacings.large }, justifyContentSpaceEvenly, flexDirectionRow]}>
                            <View style={[{ width: "90%", height: "100%" }, justifyContentCenter]}>
                                <Text style={styles.text}>{FILES}</Text>
                            </View>
                            <View style={[{ width: "10%", height: "100%" }, justifyContentCenter]}>
                                <Button
                                    buttonText={ADD_FILE}
                                    buttonStyle={styles.buttonStyle}
                                    buttonTextStyle={styles.buttonTextStyle}
                                    imageSource={ADD_FILE_BLACK_ICON}

                                />
                            </View>
                        </View>
                        <View style={[{ width: "100%", height: hp(5), backgroundColor: "#F9FAFB", borderTopLeftRadius: 10, borderTopRightRadius: 10 }, flexDirectionRow]}>
                            <View style={[{ width: "100%" }, justifyContentCenter]}>
                                <Text style={styles.text}>{FILE_NAME}</Text>
                            </View>
                        </View>
                        <PreStartItem data={fileData} from={"Files"} />
                    </View>
                </ScrollView>
                <View style={{ width: wp(95), height: hp(10), position: "absolute", bottom: 30, flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", paddingVertical: spacings.large, backgroundColor: "#fff" }}>
                    <Button
                        buttonText={CANCLE}
                        buttonStyle={styles.canclebuttonStyle}
                        buttonTextStyle={styles.canclebuttonTextStyle}
                        imageSource={CLOSE_ICON}

                    />
                    <Button
                        buttonText={SAVE_DIARY}
                        buttonStyle={[styles.publisbuttonStyle, alignJustifyCenter]}
                        buttonTextStyle={[styles.buttonTextStyle, { color: "#FFF" }]}
                        imageSource={CHECK_ICON}

                    />
                    <Button
                        buttonText={SUBMIT_DIARY}
                        buttonStyle={[styles.publisbuttonStyle, alignJustifyCenter]}
                        buttonTextStyle={[styles.buttonTextStyle, { color: "#FFF" }]}
                        imageSource={CHECK_ICON}

                    />
                    <Button
                        buttonText={CLOSE_DIARY}
                        buttonStyle={[styles.publisbuttonStyle, alignJustifyCenter]}
                        buttonTextStyle={[styles.buttonTextStyle, { color: "#FFF" }]}
                        imageSource={CHECK_ICON}

                    />
                </View>
                {activityModalVisible && (
                    <AddActivityModal
                        visible={activityModalVisible}
                        onClose={closeActivitModal}
                        onAdd={handleAddActivity}
                        from={DIARY}
                    />)}
                {docketModalVisible && (
                    <CreateDocketModal
                        visible={docketModalVisible}
                        onClose={closeDocketModal}
                        onAdd={handleAddDocket}
                    />)}
                {materialModalVisible && (
                    <MaterialReceiptModal
                        visible={materialModalVisible}
                        onClose={closeMaterialModal}
                        onAdd={handleAddMaterial}
                    />)}
                {contractModalVisible && (
                    <SubcontractorDocketModal
                        visible={contractModalVisible}
                        onClose={closeContractModal}
                        onAdd={handleAddContract}
                    />)}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: wp(95),
        height: hp(100),
        backgroundColor: "#EAECF0"
    },
    prestartBox: {
        width: wp(91),
        // height: hp(50),
        paddingVertical: spacings.large,
        margin: spacings.large,
        borderRadius: 10,
    },
    text: {
        fontSize: style.fontSizeNormal2x.fontSize,
        fontWeight: style.fontWeightThin1x.fontWeight,
        color: "#475467",
        paddingLeft: spacings.large
    },
    line: {
        width: "100%",
        height: 1,
        backgroundColor: "#D9D9D9",
        marginVertical: spacings.large
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
    resourcesBox: {
        width: wp(28),
    },
    activityBox: {
        width: wp(28),
    },
    costCodeBox: {
        width: wp(12),
    },
    subCodeBox: {
        width: wp(10),
    },
    placeholderBox: {
        width: wp(9),
        height: wp(9),
        borderRadius: 5,
        backgroundColor: '#D9D9D9',
        borderColor: '#aaa',
        borderWidth: 1,
        margin: spacings.large
    },
    imageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
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
    canclebuttonStyle: {
        width: "10%",
        height: hp(5),
    },

    publisbuttonStyle: {
        width: "25%",
        backgroundColor: blueColor,
        height: hp(5)
    },
    canclebuttonTextStyle: {
        color: redColor,
        fontSize: style.fontSizeNormal.fontSize,
        fontWeight: style.fontWeightThin1x.fontWeight,
        marginLeft: spacings.large
    },


})
export default CreateDailyDiary;