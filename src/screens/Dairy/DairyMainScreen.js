import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../utils';
import { BaseStyle } from '../../constant/Style';
import { verylightGrayColor } from '../../constant/Colors';
import { spacings, style } from '../../constant/Fonts';
import SideMenu from '../../components/SideMenu';
import Header from '../../components/Header';
import { CREATE_NEW_DIARY, CREATE_NEW_DOCKET, DATE, DIARIES, DIARY, DIARY_STATUS, LOCATION, PRESTART, SHIFT, SIGN_ONS } from '../../constant/Constant';
import { FILTER_ICON } from '../../assests/images';
import DiaryItem from '../../components/DiaryItem';
import CreateDocketModal from '../../components/modal/CreateDocketModal';
const { flex, alignItemsCenter, justifyContentCenter, alignJustifyCenter, flexDirectionRow } = BaseStyle;
const DairyMainScreen = ({ navigation }) => {
    const [docketModalVisible, setDocketModalVisible] = useState(false);
    const sampleData = [
        { DATE: 'Tue, 2024-10-04', LOCATION: 'New York', SHIFT: 'Day', SIGN_ONS: 'Draft' },
        { DATE: 'Tue, 2024-10-04', LOCATION: 'Los Angeles', SHIFT: 'Night', SIGN_ONS: 'Draft' },
        { DATE: 'Tue, 2024-10-04', LOCATION: 'New York', SHIFT: 'Day', SIGN_ONS: 'Submitted' },
        { DATE: 'Tue, 2024-10-04', LOCATION: 'New York', SHIFT: 'night', SIGN_ONS: 'Approved' },
    ];

    const onPressButtonNewDocket = () => {
        setDocketModalVisible(true);
    }


    const closeDocketModal = () => {
        setDocketModalVisible(false);
    };

    const handleAddDocket = () => {
        setDocketModalVisible(false);
    };
    const onPressButtonNewDairy = () => {
        navigation.navigate("CreateDailyDiary")
    }

    return (
        <View style={[flex, flexDirectionRow]}>
            <SideMenu />
            <View style={styles.container}>
                <Header screenName={DIARY} screenRouteName={DIARY} onPressButton={onPressButtonNewDocket} showButton={true} navigation={navigation} buttonText={CREATE_NEW_DOCKET} button2Text={CREATE_NEW_DIARY} onPressButton2={onPressButtonNewDairy} />
                <View style={styles.prestartBox}>
                    <Text style={[styles.text, { marginVertical: spacings.large }]}>{DIARIES}</Text>
                    <View style={[{ width: "100%", height: hp(5), backgroundColor: "#F9FAFB", borderTopLeftRadius: 10, borderTopRightRadius: 10 }, flexDirectionRow]}>
                        <View style={[styles.dateBox, flexDirectionRow, { justifyContent: "space-evenly", alignItems: "center" }]}>
                            <Text style={styles.text}>{DATE}</Text>
                            <TouchableOpacity>
                                <Image source={FILTER_ICON} style={[{ width: wp(2), height: hp(2), resizeMode: "contain" }]} />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.LocationBox, justifyContentCenter]}>
                            <Text style={styles.text}>{LOCATION}</Text>
                        </View>
                        <View style={[styles.shiftBox, justifyContentCenter]}>
                            <Text style={styles.text}>{SHIFT}</Text>
                        </View>
                        <View style={[styles.signBox, flexDirectionRow,{ justifyContent: "space-evenly", alignItems: "center" }]}>
                            <Text style={styles.text}>{DIARY_STATUS}</Text>
                            <TouchableOpacity>
                                <Image source={FILTER_ICON} style={[{ width: wp(2), height: hp(2), resizeMode: "contain" }]} />
                            </TouchableOpacity>
                        </View>
                        <View style={[{ width: wp(15) }, justifyContentCenter]}>
                        </View>
                    </View>
                    <DiaryItem data={sampleData} from={"Diary"} />
                </View>

            </View>
            {docketModalVisible && (
                    <CreateDocketModal
                        visible={docketModalVisible}
                        onClose={closeDocketModal}
                        onAdd={handleAddDocket}
                    />)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: wp(95),
        height: hp(100),
    },
    prestartBox: {
        width: wp(91),
        height: hp(50),
        margin: spacings.large,
        borderRadius: 10,
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
        fontSize: style.fontSizeSmall.fontSize,
        fontWeight: style.fontWeightThin1x.fontWeight,
        color: "#475467",
        paddingLeft: spacings.large
    }

})
export default DairyMainScreen;