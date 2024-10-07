import React, { useState } from 'react';
import { FlatList, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../utils';
import { COPY_FILE_ICON, DELETE_ICON, EDIT_ICON, SPLIT_ICON } from '../assests/images';
import { spacings } from '../constant/Fonts';
import { black, blackColor, blueColor, green, lightGreenColor, lightShadeBlue, redColor, whiteColor } from '../constant/Colors';
import Feather from 'react-native-vector-icons/dist/Feather';
import EditDocketModal from './modal/EditDocketModal';
import EditOperatorModal from './modal/EditOperatorModal';

const DiaryItem = ({ data, from }) => {
    const [editLabour, setEditLabour] = useState(false)

    const onEditLabourDocket = () => {
        setEditLabour(true)
    }
    const onSplitLabourDocket = () => {
        setEditLabour(false)
    }
    const onSaveLabourDocket = () => {
        setEditLabour(false)
    }
    
    const renderItem = ({ item }) => (
        <View style={styles.prestartBox}>
            {from === "Diary" && <View style={[{ width: "100%", height: hp(5), flexDirection: "row", borderWidth: .5, borderColor: "#EAECF0", backgroundColor: whiteColor }]}>
                <View style={[styles.dateBox]}>
                    <Text style={styles.text}>{item.DATE}</Text>
                </View>
                <View style={[styles.LocationBox,]}>
                    <Text style={styles.text}>{item.LOCATION}</Text>
                </View>
                <View style={[styles.shiftBox, { flexDirection: "row", alignItems: "center" }]}>
                    {item.SHIFT === "Day" ? <Feather name="sun" size={20} color={blackColor} /> : <Feather name="moon" size={20} color={blackColor} />}
                    <Text style={styles.text}>{item.SHIFT}</Text>
                </View>
                <View style={[styles.signBox, { alignItems: "center", justifyContent: "center" }]}>
                    <View
                        style={[
                            {
                                borderColor: item.SIGN_ONS === "Draft" ? "#B2CCFF" :
                                    item.SIGN_ONS === "Submitted" ? "#FEDF89" :
                                        item.SIGN_ONS === "Approved" ? "#ABEFC6" : blueColor,
                                backgroundColor: item.SIGN_ONS === "Draft" ? "#EFF4FF" :
                                    item.SIGN_ONS === "Submitted" ? "#FFFAEA" :
                                        item.SIGN_ONS === "Approved" ? "#ECFEF3" : "#EFF4FF",
                                borderRadius: 15,
                                borderWidth: 1,
                                paddingVertical: spacings.normal,
                                paddingHorizontal: spacings.xLarge,
                                alignSelf: 'center',
                            }
                        ]}
                    >
                        <Text
                            style={[
                                {
                                    color: item.SIGN_ONS === "Draft" ? blueColor :
                                        item.SIGN_ONS === "Submitted" ? redColor :
                                            item.SIGN_ONS === "Approved" ? green : blueColor,
                                    textAlign: 'center',
                                }
                            ]}
                        >
                            {item.SIGN_ONS}
                        </Text>
                    </View>
                    {/* <Text style={[styles.text, { backgroundColor: lightShadeBlue, color: blueColor ,borderRadius:20,padding:spacings.large}]}>{item.SIGN_ONS}</Text> */}
                </View>
                <View style={[{ width: wp(18), borderLeftWidth: .5, borderColor: "#EAECF0", flexDirection: "row", padding: spacings.large, justifyContent: 'space-evenly' }]}>
                    <TouchableOpacity>
                        <Text style={{ color: blueColor }}>open</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={COPY_FILE_ICON} style={[{ width: wp(3), height: hp(3) }]} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={DELETE_ICON} style={[{ width: wp(3), height: hp(3) }]} />
                    </TouchableOpacity>
                </View>
            </View>}
            {from === "Docket" && <View style={[{ width: "100%", height: hp(5), flexDirection: "row", borderWidth: .5, borderColor: "#EAECF0", backgroundColor: whiteColor }]}>
                <View style={[{ width: wp(13), justifyContent: "center" }]}>
                    <Text style={styles.text}>{item.RESOURCES}</Text>
                </View>
                <View style={[{ width: wp(12), justifyContent: "center" }]}>
                    <Text style={{ fontSize: 14, color: '#475467' }}>{item.RESOURCES_TYPE}</Text>
                    <Text style={{ fontSize: 10, color: '#475467' }}>{item.RESOURCES_TYPE}</Text>
                </View>
                <View style={[{ width: wp(9), justifyContent: "center" }]}>
                    <Text style={styles.text}>{item.COST_CODE}</Text>
                </View>
                <View style={[{ width: wp(7), justifyContent: "center" }]}>
                    <Text style={styles.text}>{item.START}</Text>
                </View>
                <View style={[{ width: wp(7), justifyContent: "center" }]}>
                    <Text style={styles.text}>{item.END}</Text>
                </View>
                <View style={[{ width: wp(7), justifyContent: "center" }]}>
                    <Text style={styles.text}>{item.BREAK}</Text>
                </View>
                <View style={[{ width: wp(7), justifyContent: "center" }]}>
                    <Text style={styles.text}>{item.HRS}</Text>
                </View>
                <View style={[{ width: wp(7), justifyContent: "center" }]}>
                    <Text style={styles.text}>{item.RATE}</Text>
                </View>
                <View style={[{ width: wp(7), justifyContent: "center" }]}>
                    <Text style={styles.text}>{item.UNIT}</Text>
                </View>
                <View style={[{ width: wp(7), justifyContent: "center" }]}>
                    <Text style={styles.text}>{item.AMOUNT}</Text>
                </View>
                <View style={[{ width: wp(8), flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }]}>
                    <View style={{ borderRadius: 50, width: 15, height: 15, backgroundColor: item.UNIT === "TONNER" ? "#47cd79" : "#ff692e" }} />
                    <TouchableOpacity>
                        <Image source={SPLIT_ICON} style={{ width: 13, height: 15, resizeMode: "contain" }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onEditLabourDocket}>
                        <Image source={EDIT_ICON} style={{ width: 13, height: 15, resizeMode: "contain" }} />
                    </TouchableOpacity>
                </View>
            </View>}
            {from === "Activity" && <View style={[{ width: "100%", height: hp(5), flexDirection: "row", borderWidth: .5, borderColor: "#EAECF0", backgroundColor: whiteColor }]}>
                <View style={[{ width: wp(9), justifyContent: "center" },]}>
                    <Text style={styles.text}>{item.COST_CODE}</Text>
                </View>
                <View style={[{ width: wp(20), justifyContent: "center" }]}>
                    <Text style={styles.text}>{item.COST_CODE_DESCRIPTION}</Text>
                </View>
                <View style={[{ width: wp(11), justifyContent: "center" }]}>
                    <Text style={styles.text}>{item.TARGET_QTY}</Text>
                </View>
                <View style={[{ width: wp(9), justifyContent: "center", borderBottomColor: blackColor, borderWidth: 1, borderLeftColor: "transparent", borderRightColor: "transparent", borderTopColor: "transparent" }]}>
                    <Text style={styles.text}>{item.ACTUAL_QTY}</Text>
                </View>
                <View style={[{ width: wp(11), justifyContent: "space-between", flexDirection: "row", alignItems: "center" }]}>
                    <Text style={styles.text}>{item.UNIT}</Text>
                    <View style={{ borderRadius: 50, width: 15, height: 15, backgroundColor: item.UNIT === "LM" ? "#47cd79" : "#ff692e", marginRight: 20 }}></View>
                </View>
                <View style={[{ width: wp(9), justifyContent: "center" }]}>
                    <Text style={styles.text}>{item.TARGET_QTY}</Text>
                </View>
                <View style={[{ width: wp(9), justifyContent: "center" }]}>
                    <Text style={styles.text}>{item.TARGET_RATE}</Text>
                </View>
                <View style={[{ width: wp(9), justifyContent: "center" }]}>
                    <Text style={styles.text}>{item.UNIT}</Text>
                </View>
                <View style={[{ width: wp(9), justifyContent: "center" }]}>
                    <View style={{ borderRadius: 50, width: 15, height: 15, backgroundColor: item.UNIT === "TONNER" ? "#47cd79" : "#ff692e" }}></View>
                </View>
            </View>}
            {from === "Files" && <View style={[{ width: "100%", height: hp(5), flexDirection: "row", borderWidth: .5, borderColor: "#EAECF0", backgroundColor: whiteColor }]}>
                <View style={[{ width: "95%", justifyContent: "center" }]}>
                    <Text style={styles.text}>{item.fileName}</Text>
                </View>
                <View style={[{ width: wp(4), justifyContent: "center", alignItems: "center" }]}>
                    <TouchableOpacity>
                        <Image source={DELETE_ICON} style={[{ width: wp(3), height: hp(3) }]} />
                    </TouchableOpacity>
                </View>
            </View>}
            {from === "Material" && <View style={[{ width: "100%", height: hp(5), flexDirection: "row", borderWidth: .5, borderColor: "#EAECF0", backgroundColor: whiteColor }]}>
                <View style={[{ width: wp(20), justifyContent: "center" }]}>
                    <Text style={styles.text}>{item.ITEM_DESCRIPTION}</Text>
                </View>
                <View style={[{ width: wp(15), justifyContent: "center" }]}>
                    <Text style={styles.text}>{item.SUPPLIER}</Text>
                </View>
                <View style={[{ width: wp(9), justifyContent: "center" }]}>
                    <Text style={styles.text}>{item.PO}</Text>
                </View>
                <View style={[{ width: wp(10), justifyContent: "center" }]}>
                    <Text style={styles.text}>{item.COST_CODE}</Text>
                </View>
                <View style={[{ width: wp(7), justifyContent: "center" }]}>
                    <Text style={styles.text}>{item.QTY}</Text>
                </View>
                <View style={[{ width: wp(7), justifyContent: "center" }]}>
                    <Text style={styles.text}>{item.RATE}</Text>
                </View>
                <View style={[{ width: wp(7), justifyContent: "center" }]}>
                    <Text style={styles.text}>{item.UNIT}</Text>
                </View>
                <View style={[{ width: wp(7), justifyContent: "center" }]}>
                    <Text style={styles.text}>{item.AMOUNT}</Text>
                </View>
                <View style={[{ width: wp(8), flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }]}>
                    <Image source={EDIT_ICON} style={{ width: 13, height: 15, resizeMode: "contain" }} />
                </View>
            </View>}
            {from === "SubContractor" && <View style={[{ width: "100%", height: hp(5), flexDirection: "row", borderWidth: .5, borderColor: "#EAECF0", backgroundColor: whiteColor }]}>
                <View style={[{ width: wp(35), justifyContent: "center" }]}>
                    <Text style={styles.text}>{item.SUBCONTRACTOR_ITEM_DESCRIPTION}</Text>
                </View>
                <View style={[{ width: wp(15), justifyContent: "center" }]}>
                    <Text style={styles.text}>{item.SUBCONTRACTOR}</Text>
                </View>
                <View style={[{ width: wp(12), justifyContent: "center" }]}>
                    <Text style={styles.text}>{item.PO}</Text>
                </View>
                <View style={[{ width: wp(12), justifyContent: "center" }]}>
                    <Text style={styles.text}>{item.COST_CODE}</Text>
                </View>
                <View style={[{ width: wp(9), justifyContent: "center" }]}>
                    <Text style={styles.text}>{item.AMOUNT}</Text>
                </View>
                <View style={[{ width: wp(9), alignItems: "center", justifyContent: "center" }]}>
                    <Image source={EDIT_ICON} style={{ width: 13, height: 15, resizeMode: "contain" }} />
                </View>
            </View>}

            {from === "Issues" && <View style={[{ width: "100%", height: hp(5), flexDirection: "row", borderWidth: .5, borderColor: "#EAECF0", backgroundColor: whiteColor }]}>
                <View style={[{ width: wp(20), justifyContent: "center" }]}>
                    <Text style={{ fontSize: 14, color: '#475467', paddingLeft: 8 }}>{item.ISSUE_ID}</Text>
                </View>
                <View style={[{ width: wp(30), justifyContent: "center" }]}>
                    <Text style={{ fontSize: 14, color: '#475467' }}>{item.ISSUE_HEADING}</Text>
                </View>
                <View style={[{ width: wp(32), justifyContent: "center" }]}>
                    <Text style={{ fontSize: 14, color: '#475467' }}>{item.ISSUE_DESCRIPTION}</Text>
                </View>
                <View style={[{ width: wp(9), alignItems: "center", justifyContent: "center" }]}>
                    <Image source={EDIT_ICON} style={{ width: 13, height: 15, resizeMode: "contain" }} />
                </View>
            </View>}
        </View>
    );

    return (
        <>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
            {editLabour &&
                <EditDocketModal 
                onSplit={onSplitLabourDocket}
                onSave={onSaveLabourDocket}/>
            }
            {/* {
                <EditOperatorModal />
            } */}
        </>
    );
};

const styles = StyleSheet.create({
    prestartBox: {
        borderColor: '#ddd',
    },
    flexDirectionRow: {
        flexDirection: 'row',
    },
    dateBox: {
        width: wp(17),
    },
    LocationBox: {
        width: wp(25),
    },
    shiftBox: {
        width: wp(15),
    },
    signBox: {
        width: wp(15),
    },
    text: {
        fontSize: 14,
        color: '#475467',
        padding: 8
    },
    resourcesBox: {
        width: wp(28),
    },
    activityBox: {
        width: wp(28),
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderColor: "#EAECF0"
    },
    costCodeBox: {
        width: wp(12),
    },
    subCodeBox: {
        width: wp(10),
    },
});

export default DiaryItem;
