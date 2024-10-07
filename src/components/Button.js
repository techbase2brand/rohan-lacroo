import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../utils';
import { blueColor, whiteColor } from '../constant/Colors';
import { BaseStyle } from '../constant/Style';
import { spacings, style } from '../constant/Fonts';
const { borderRadius5, flexDirectionRow, justifyContentCenter, alignItemsCenter, justifyContentSpaceBetween } = BaseStyle;

const Button = ({ onPress, buttonText, imageSource, buttonStyle, buttonTextStyle }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[buttonStyle ? buttonStyle : styles.button, alignItemsCenter, borderRadius5, flexDirectionRow]}>
            {imageSource && (
                <Image source={imageSource} />
            )}
            <Text style={buttonTextStyle ? buttonTextStyle : styles.buttonText}>{buttonText}</Text>

        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    button: {
        borderColor: blueColor,
        borderWidth: 1,
        paddingHorizontal: spacings.xLarge,
        paddingVertical: spacings.large
    },
    buttonText: {
        color: blueColor,
        fontSize: style.fontSizeNormal.fontSize,
        fontWeight: style.fontWeightThin1x.fontWeight,
        marginLeft: spacings.large
    }
});

export default Button;
