import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { launchImageLibrary } from 'react-native-image-picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../utils';
import { BaseStyle } from '../../constant/Style';
import { blackColor, blueColor, redColor, verylightGrayColor } from '../../constant/Colors';
import { spacings, style } from '../../constant/Fonts';
import SideMenu from '../../components/SideMenu';
import Header from '../../components/Header';
import { ACTIVITY, ACTIVITY_DESCRIPTION, ACTIVIT_AND_COST, ADD_ACTIVITY, ADD_FILE, ADD_IMAGE, ADD_RESOURCES, CANCLE, COST_CODE, CREATE_PRESTART, FILES, FILE_NAME, FREE_TEXT, GENERAL_BUSINESS, GEORGIOS_INCIDENT_ALERT, GET_WEATHER, IDENTIFY_ANY_NEW, IDENTIFY_WORK_PLANNED, INC_PLANT_LABOUR, PHOTOS, PRESTART, PROVIDE_DETAILS_OF_INCIDENT, PUBLISH_PRESTART_AND_CREATE_DIARY, RESOURCES, SAFATY_IS_MY_WAY, SAVE_PRESTART, SUB_CODE, TARGET_QTY, TARGET_RATE, UNIT } from '../../constant/Constant';
import ShiftForm from '../../components/ShiftForm';
import Button from '../../components/Button';
import { ADD_FILE_BLACK_ICON, ADD_FILE_ICON, ADD_IMAGE_ICON, CHECK_ICON, CLOSE_ICON, PLUS_IMAGE, WEATHER_ICON } from '../../assests/images';
import WeatherCard from '../../components/WeatherCard';
import PreStartItem from '../../components/PreStartItem';
import CustomTextInput from '../../components/CustomeTextInput';
import AddActivityModal from '../../components/modal/AddActivityModal';
import AddResourceModal from '../../components/modal/AddResourceModal';
const { flex, alignItemsCenter, justifyContentCenter, alignJustifyCenter, flexDirectionRow, justifyContentSpaceEvenly } = BaseStyle;
const CreatePrestartScreen = ({ navigation }) => {
    const [activityModalVisible, setActivityModalVisible] = useState(false);
    const [resourcesModalVisible, setResourcesModalVisible] = useState(false)
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
            RESOURCES: "Resource 1",
            ACTIVITY: "Activity 1",
            COST_CODE: "CC001",
            SUB_CODE: "SC001",
        },
        {
            RESOURCES: "Resource 2",
            ACTIVITY: "Activity 2",
            COST_CODE: "CC002",
            SUB_CODE: "SC002",
        },
        {
            RESOURCES: "Resource 3",
            ACTIVITY: "Activity 3",
            COST_CODE: "CC003",
            SUB_CODE: "SC003",
        },
    ];
    const data = [
        {
            COST_CODE: "CC001",
            SUB_CODE: "SC001",
            ACTIVITY_DESCRIPTION: "Excavation Work",
            TARGET_QTY: "100",
            UNIT: "m³",
            TARGET_RATE: "50",
        },
        {
            COST_CODE: "CC002",
            SUB_CODE: "SC002",
            ACTIVITY_DESCRIPTION: "Concrete Pouring",
            TARGET_QTY: "200",
            UNIT: "m³",
            TARGET_RATE: "70",
        },
        {
            COST_CODE: "CC003",
            SUB_CODE: "SC003",
            ACTIVITY_DESCRIPTION: "Steel Reinforcement",
            TARGET_QTY: "500",
            UNIT: "kg",
            TARGET_RATE: "5",
        },
    ];
    const fileData = [
        {
            fileName: "File Name.doc"
        },
        {
            fileName: "File Name.csv"
        }
    ]

    const [images, setImages] = useState(Array(10).fill(null)); // Initialize an array for 10 image slots

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

    const openResourcesModal = () => {
        // console.log('Opening modal');
        setResourcesModalVisible(true);
    };

    const closeResourcesModal = () => {
        // console.log('Closing modal');
        setResourcesModalVisible(false);
    };

    const handleAddResources = () => {
        // console.log('Item deleted');
        setResourcesModalVisible(false);
    };
    return (
        <View style={[flex, flexDirectionRow]}>
            <SideMenu />
            <View style={styles.container}>
                <ScrollView style={{ marginBottom: 100 }} showsVerticalScrollIndicator={false}>
                    <Header screenRouteName={PRESTART} screenName={CREATE_PRESTART} showRoute={true} navigation={navigation} />
                    <View style={styles.prestartBox}>
                        <View style={styles.line}></View>
                        <ShiftForm />
                        <View style={styles.line}></View>
                        <View style={[{ width: "100%", height: hp(6) }, justifyContentSpaceEvenly, flexDirectionRow]}>
                            <View style={[{ width: "87%", height: "100%" }, justifyContentCenter]}>
                                <Text style={styles.text}>Weather</Text>
                            </View>
                            <View style={[{ width: "13%", height: "100%" }, justifyContentCenter]}>
                                <Button
                                    buttonText={GET_WEATHER}
                                    buttonStyle={styles.buttonStyle}
                                    buttonTextStyle={styles.buttonTextStyle}
                                    imageSource={WEATHER_ICON} />
                            </View>
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
                        <View style={styles.line}></View>
                        <View style={[{ width: "100%", height: hp(6), marginBottom: spacings.large }, justifyContentSpaceEvenly, flexDirectionRow]}>
                            <View style={[{ width: "87%", height: "100%" }, justifyContentCenter]}>
                                <Text style={styles.text}>{ACTIVIT_AND_COST}</Text>
                            </View>
                            <View style={[{ width: "13%", height: "100%" }, justifyContentCenter]}>
                                <Button
                                    buttonText={ADD_ACTIVITY}
                                    buttonStyle={styles.buttonStyle}
                                    buttonTextStyle={styles.buttonTextStyle}
                                    imageSource={PLUS_IMAGE}
                                    onPress={openActivityModal} />
                            </View>
                        </View>
                        <View style={[{ width: "100%", height: hp(5), backgroundColor: "#F9FAFB", borderTopLeftRadius: 10, borderTopRightRadius: 10 }, flexDirectionRow]}>
                            <View style={[{ width: wp(10) }, justifyContentCenter]}>
                                <Text style={styles.text}>{COST_CODE}</Text>
                            </View>
                            <View style={[{ width: wp(10) }, justifyContentCenter]}>
                                <Text style={styles.text}>{SUB_CODE}</Text>
                            </View>
                            <View style={[{ width: wp(25) }, justifyContentCenter]}>
                                <Text style={styles.text}>{ACTIVITY_DESCRIPTION}</Text>
                            </View>
                            <View style={[{ width: wp(12) }, justifyContentCenter]}>
                                <Text style={styles.text}>{TARGET_QTY}</Text>
                            </View>
                            <View style={[{ width: wp(8) }, justifyContentCenter]}>
                                <Text style={styles.text}>{UNIT}</Text>
                            </View>
                            <View style={[{ width: wp(12) }, justifyContentCenter]}>
                                <Text style={styles.text}>{TARGET_RATE}</Text>
                            </View>
                            <View style={[{ width: wp(8) }, justifyContentCenter]}>
                                <Text style={styles.text}>{UNIT}</Text>
                            </View>
                            <View style={[{ width: wp(8) }, justifyContentCenter]}>
                            </View>
                        </View>
                        <PreStartItem data={data} from={"Activity"} />
                        <View style={[styles.line, { marginVertical: spacings.Large1x }]}></View>
                        <View style={[{ width: "100%", height: hp(6), marginBottom: spacings.large }, justifyContentSpaceEvenly, flexDirectionRow]}>
                            <View style={[{ width: "85%", height: "100%" }, justifyContentCenter]}>
                                <Text style={styles.text}>{RESOURCES}</Text>
                            </View>
                            <View style={[{ width: "15%", height: "100%" }, justifyContentCenter]}>
                                <Button
                                    buttonText={ADD_RESOURCES}
                                    buttonStyle={styles.buttonStyle}
                                    buttonTextStyle={styles.buttonTextStyle}
                                    imageSource={PLUS_IMAGE}
                                    onPress={openResourcesModal} />
                            </View>
                        </View>
                        <View style={[{ width: "100%", height: hp(5), backgroundColor: "#F9FAFB", borderTopLeftRadius: 10, borderTopRightRadius: 10 }, flexDirectionRow]}>
                            <View style={[styles.resourcesBox, justifyContentCenter]}>
                                <Text style={styles.text}>{RESOURCES}</Text>
                            </View>
                            <View style={[styles.activityBox, justifyContentCenter]}>
                                <Text style={styles.text}>{ACTIVITY}</Text>
                            </View>
                            <View style={[styles.costCodeBox, justifyContentCenter]}>
                                <Text style={styles.text}>{COST_CODE}</Text>
                            </View>
                            <View style={[styles.subCodeBox, justifyContentCenter]}>
                                <Text style={styles.text}>{SUB_CODE}</Text>
                            </View>
                            <View style={[styles.subCodeBox, justifyContentCenter]}>
                            </View>
                        </View>
                        <PreStartItem data={sampleData} from={"Resources"} />
                        <CustomTextInput
                            multiPlaceholders={[ACTIVITY_DESCRIPTION, INC_PLANT_LABOUR, FREE_TEXT]}
                        />
                        <CustomTextInput placeholder={"Type here"} textInputHeading={SAFATY_IS_MY_WAY} />
                        <CustomTextInput placeholder={"Type here"} textInputHeading={GEORGIOS_INCIDENT_ALERT} />
                        <CustomTextInput placeholder={"Type here"} textInputHeading={PROVIDE_DETAILS_OF_INCIDENT} />
                        <CustomTextInput placeholder={"Type here"} textInputHeading={IDENTIFY_ANY_NEW} />
                        <CustomTextInput placeholder={"Type here"} textInputHeading={IDENTIFY_WORK_PLANNED} />
                        <CustomTextInput placeholder={"Type here"} textInputHeading={GENERAL_BUSINESS} />
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
                        buttonText={SAVE_PRESTART}
                        buttonStyle={[styles.savebuttonStyle, { backgroundColor: "#fff" }, alignJustifyCenter]}
                        buttonTextStyle={styles.buttonTextStyle}
                    />
                    <Button
                        buttonText={PUBLISH_PRESTART_AND_CREATE_DIARY}
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
                        from={PRESTART}
                    />)}
                {resourcesModalVisible && (
                    <AddResourceModal
                        visible={resourcesModalVisible}
                        onClose={closeResourcesModal}
                        onAdd={handleAddResources}
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
    canclebuttonStyle: {
        width: "10%",
        height: hp(5),
    },
    savebuttonStyle: {
        width: "40%",
        borderColor: '#CCC',
        borderWidth: 1,
        height: hp(5)
    },
    publisbuttonStyle: {
        width: "40%",
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
export default CreatePrestartScreen;