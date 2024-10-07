import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../utils';
import { BaseStyle } from '../../constant/Style';
import { verylightGrayColor } from '../../constant/Colors';
import { spacings, style } from '../../constant/Fonts';
import SideMenu from '../../components/SideMenu';
import Header from '../../components/Header';
import { CREATE_NEW_PRESTART, DATE, LOCATION, PRESTART, SHIFT, SIGN_ONS } from '../../constant/Constant';
import PreStartItem from '../../components/PreStartItem';
import { FILTER_ICON } from '../../assests/images';
const { flex, alignItemsCenter, justifyContentCenter, alignJustifyCenter, flexDirectionRow } = BaseStyle;
const PreStartMainScreen = ({ navigation }) => {
    const sampleData = [
        { DATE: 'Tue, 2024-10-04', LOCATION: 'New York', SHIFT: 'Morning', SIGN_ONS: 'Yes' },
        { DATE: 'Tue, 2024-10-04', LOCATION: 'Los Angeles', SHIFT: 'Evening', SIGN_ONS: 'No' },
        { DATE: 'Tue, 2024-10-04', LOCATION: 'New York', SHIFT: 'Morning', SIGN_ONS: 'Yes' },
        { DATE: 'Tue, 2024-10-04', LOCATION: 'New York', SHIFT: 'Morning', SIGN_ONS: 'Yes' },
    ];
    const onPressButtonNewPrestart = () => {
        navigation.navigate("CreatePrestartScreen")
    }
    const DownloadFile = () => {
        console.log("DownloadClicked");
    }
    return (
        <View style={[flex, flexDirectionRow]}>
            <SideMenu />
            <View style={styles.container}>
                <Header
                    screenName={PRESTART}
                    screenRouteName={PRESTART}
                    onPressButton={onPressButtonNewPrestart}
                    showButton={true}
                    buttonText={CREATE_NEW_PRESTART}
                    onPressDownload={DownloadFile} />
                <View style={styles.prestartBox}>
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
                        <View style={[styles.signBox, justifyContentCenter]}>
                            <Text style={styles.text}>{SIGN_ONS}</Text>
                        </View>
                        <View style={[styles.dateBox, justifyContentCenter]}>
                        </View>
                    </View>
                    <PreStartItem data={sampleData} from={"PreStart"} />
                </View>

            </View>
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
        fontSize: style.fontSizeSmall.fontSize,
        fontWeight: style.fontWeightThin1x.fontWeight,
        color: "#475467",
        paddingLeft: spacings.large
    }

})
export default PreStartMainScreen;