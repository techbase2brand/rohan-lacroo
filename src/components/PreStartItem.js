import React, { useState } from 'react';
import { FlatList, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../utils';
import { COPY_FILE_ICON, DELETE_ICON } from '../assests/images';
import { spacings } from '../constant/Fonts';
import { black, blackColor, whiteColor } from '../constant/Colors';
import DeleteModal from './modal/DeleteModal';

const PreStartItem = ({ data, from, onDeleteFile }) => {
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const [deleteModalFrom, setDeleteModalFrom] = useState("");
    const [deleteDate, setDeleteDate] = useState("");
    const [deleteIndex, setDeleteIndex] = useState(null);
    const openModal = (index) => {
        setDeleteIndex(index);
        setDeleteModalVisible(true);
    };

    const closeModal = () => {
        setDeleteModalVisible(false);
    };

    const handleDelete = () => {
        if (from === "Files" && deleteIndex !== null) {
            onDeleteFile(deleteIndex);
        }
        setDeleteModalVisible(false);
    };
    const renderItem = ({ item, index }) => (
        <View style={styles.prestartBox}>
            {from === "PreStart" && <View style={[{ width: "100%", height: hp(5), flexDirection: "row", borderWidth: .5, borderColor: "#EAECF0", backgroundColor: whiteColor }]}>
                <View style={[styles.dateBox]}>
                    <Text style={styles.text}>{item.DATE}</Text>
                </View>
                <View style={[styles.LocationBox,]}>
                    <Text style={styles.text}>{item.LOCATION}</Text>
                </View>
                <View style={[styles.shiftBox]}>
                    <Text style={styles.text}>{item.SHIFT}</Text>
                </View>
                <View style={[styles.signBox]}>
                    <Text style={styles.text}>{item.SIGN_ONS}</Text>
                </View>
                <View style={[styles.dateBox, { borderLeftWidth: .5, borderColor: "#EAECF0", flexDirection: "row", padding: spacings.large, justifyContent: 'space-evenly' }]}>
                    <TouchableOpacity>
                        <Image source={COPY_FILE_ICON} style={[{ width: wp(3), height: hp(3) }]} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { openModal(), setDeleteModalFrom("PreStart"), setDeleteDate(item?.DATE) }}>
                        <Image source={DELETE_ICON} style={[{ width: wp(3), height: hp(3) }]} />
                    </TouchableOpacity>
                </View>
            </View>}
            {from === "Resources" && <View style={[{ width: "100%", height: hp(5), flexDirection: "row", borderWidth: .5, borderColor: "#EAECF0", backgroundColor: whiteColor }]}>
                <View style={[styles.resourcesBox]}>
                    <Text style={styles.text}>{item.RESOURCES}</Text>
                </View>
                <View style={[styles.activityBox]}>
                    <Text style={styles.text}>{item.ACTIVITY}</Text>
                </View>
                <View style={[styles.costCodeBox]}>
                    <Text style={styles.text}>{item.COST_CODE}</Text>
                </View>
                <View style={[styles.subCodeBox]}>
                    <Text style={styles.text}>{item.SUB_CODE}</Text>
                </View>
                <View style={[styles.subCodeBox, { alignItems: "flex-end", padding: spacings.large }]}>
                    <TouchableOpacity onPress={() => { openModal(), setDeleteModalFrom("Resources") }}>
                        <Image source={DELETE_ICON} style={[{ width: wp(3), height: hp(3) }]} />
                    </TouchableOpacity>
                </View>
            </View>}
            {from === "Activity" && <View style={[{ width: "100%", height: hp(5), flexDirection: "row", borderWidth: .5, borderColor: "#EAECF0", backgroundColor: whiteColor }]}>
                <View style={[{ width: wp(10), justifyContent: "center" },]}>
                    <Text style={styles.text}>{item.COST_CODE}</Text>
                </View>
                <View style={[{ width: wp(10), justifyContent: "center" }]}>
                    <Text style={styles.text}>{item.SUB_CODE}</Text>
                </View>
                <View style={[{ width: wp(25), justifyContent: "center" }]}>
                    <Text style={styles.text}>{item.ACTIVITY_DESCRIPTION}</Text>
                </View>
                <View style={[{ width: wp(12), justifyContent: "center", borderBottomColor: blackColor, borderWidth: 1, borderLeftColor: "transparent", borderRightColor: "transparent", borderTopColor: "transparent" }]}>
                    <Text style={styles.text}>{item.TARGET_QTY}</Text>
                </View>
                <View style={[{ width: wp(8), justifyContent: "center", borderBottomColor: blackColor, borderWidth: 1, borderLeftColor: "transparent", borderRightColor: "transparent", borderTopColor: "transparent" }]}>
                    <Text style={styles.text}>{item.UNIT}</Text>
                </View>
                <View style={[{ width: wp(12), justifyContent: "center", borderBottomColor: blackColor, borderWidth: 1, borderLeftColor: "transparent", borderRightColor: "transparent", borderTopColor: "transparent" }]}>
                    <Text style={styles.text}>{item.TARGET_RATE}</Text>
                </View>
                <View style={[{ width: wp(7), justifyContent: "center", borderBottomColor: blackColor, borderWidth: 1, borderLeftColor: "transparent", borderRightColor: "transparent", borderTopColor: "transparent" }]}>
                    <Text style={styles.text}>{item.UNIT}</Text>
                </View>
                <View style={[{ width: wp(4), justifyContent: "center", alignItems: "center", borderLeftWidth: 1, borderColor: '#ddd' }]}>
                    <TouchableOpacity onPress={() => { openModal(), setDeleteModalFrom("Activity") }}>
                        <Image source={DELETE_ICON} style={[{ width: wp(3), height: hp(3) }]} />
                    </TouchableOpacity>
                </View>
            </View>}
            {from === "Files" && <View style={[{ width: "100%", height: hp(5), flexDirection: "row", borderWidth: .5, borderColor: "#EAECF0", backgroundColor: whiteColor }]}>
                <View style={[{ width: "95%", justifyContent: "center" }]}>
                    <Text style={styles.text}>{item.name}</Text>
                </View>
                <View style={[{ width: wp(4), justifyContent: "center", alignItems: "center" }]}>
                    <TouchableOpacity
                        // onPress={() => onDeleteFile(index)}
                        onPress={() => { openModal(index), setDeleteModalFrom("Files") }}>
                        <Image source={DELETE_ICON} style={[{ width: wp(3), height: hp(3) }]} />
                    </TouchableOpacity>
                </View>
            </View>}

        </View>
    );

    return (
        <>
            {from === "Files" && data.length === 0 ? (
                <View style={[{ width: "100%", height: hp(5), flexDirection: "row", borderWidth: .5, borderColor: "#EAECF0", backgroundColor: whiteColor, alignItems: "center", justifyContent: "center" }]}>
                    <Text style={styles.text}>No files available</Text>
                </View >
            ) : (
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            )}
            {
                deleteModalVisible && (
                    <DeleteModal
                        visible={deleteModalVisible}
                        onClose={closeModal}
                        onDelete={handleDelete}
                        from={deleteModalFrom}
                        date={deleteDate}
                    />)
            }
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
        width: wp(15),
    },
    LocationBox: {
        width: wp(30),
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

export default PreStartItem;
