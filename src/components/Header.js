import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../utils';
import { blackColor, blueColor, mediumGray, whiteColor } from '../constant/Colors';
import { BaseStyle } from '../constant/Style';
import { spacings, style } from '../constant/Fonts';
import { ADD_FILE_ICON, DOWNLOAD_BUTTON, HOME_LINE_ICON } from '../assests/images';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Button from './Button';
import { CREATE_NEW_PRESTART } from '../constant/Constant';
const { borderRadius5, flexDirectionRow, justifyContentCenter, alignItemsCenter, resizeModeContain, justifyContentSpaceBetween } = BaseStyle;
const Header = ({ screenName, onPressButton, showButton, screenRouteName, buttonText, button2Text, onPressDownload, onPressButton2,showRoute }) => {
    return (
        <View style={[styles.container]}>
            <View style={[{ width: "auto", height: "30%" }, alignItemsCenter, flexDirectionRow]}>
                <Image source={HOME_LINE_ICON} style={[{ width: 40, height: 20 }, resizeModeContain]} />
                <MaterialIcons name="navigate-next" size={25} color={mediumGray} />
                <Text style={styles.text}>{screenRouteName}</Text>
                {showRoute && <>
                    <MaterialIcons name="navigate-next" size={25} color={mediumGray} />
                    <Text style={styles.text}>{screenName === "Create Prestart" ? "Create Prestart" : "Create Diary"}</Text>
                </>}
            </View>
            <View style={[{ width: wp(90), height: "70%", padding: spacings.small, marginTop: spacings.large }, alignItemsCenter, flexDirectionRow, alignItemsCenter]}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.headingText}>{screenName}</Text>
                </View>
                {showButton && <View style={[styles.buttonBox, flexDirectionRow, justifyContentSpaceBetween, alignItemsCenter]}>
                    <Button buttonText={buttonText} imageSource={ADD_FILE_ICON} onPress={onPressButton} />
                    {button2Text && <View style={{ marginLeft: spacings.large }}><Button buttonText={button2Text} imageSource={ADD_FILE_ICON} onPress={onPressButton2} /></View>}
                    {onPressDownload && <TouchableOpacity onPress={onPressDownload} style={{ marginLeft: spacings.large }}>
                        <Image source={DOWNLOAD_BUTTON} style={[resizeModeContain, { width: wp(3), height: hp(3) }]} />
                    </TouchableOpacity>}
                </View>}
            </View>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: hp(11),
        padding: spacings.large,
    },
    text: {
        fontSize: style.fontSizeNormal.fontSize,
        fontWeight: style.fontWeightThin1x.fontWeight,
        color: "#475467"
    },
    headingText: {
        fontSize: style.fontSizeLarge3x.fontSize,
        fontWeight: style.fontWeightMedium.fontWeight,
        color: blackColor,
        lineHeight: 38
    },
    buttonBox: {
        width: "auto",
        height: hp(5),
        alignSelf: "flex-end"
    }
})