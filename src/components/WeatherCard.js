import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../utils';
import { blueColor, whiteColor } from '../constant/Colors';
import { BaseStyle } from '../constant/Style';
import { spacings, style } from '../constant/Fonts';
import { DAIRY_IMAGE, LACROO_IMAGE, PRESTART_IMAGE } from '../assests/images';
import { CLOUD_IMAGE } from '../assests/images';
const { borderRadius5, flexDirectionRow, justifyContentCenter, alignItemsCenter, alignJustifyCenter } = BaseStyle;

const WeatherCard = ({ temperature, condition, time }) => {
    return (
        <View style={[styles.container, alignJustifyCenter]}>
            <Image source={CLOUD_IMAGE} style={{ width: 20, height: 20 }} />
            <Text style={styles.temperature}>{temperature} °C</Text>
            <Text style={styles.condition}>{condition}</Text>
            <Text style={styles.time}>{time}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: wp(14),
        height: hp(12),
        backgroundColor: '#F8F9FA',
        borderRadius: 10,
        padding: spacings.xxxxLarge,
        margin: spacings.large,
        borderWidth: 1,
        borderColor: '#ccc',

    },
    icon: {
        marginBottom: spacings.large,
    },
    temperature: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    condition: {
        fontSize: 12,
        color: '#999',
        marginTop: 4,
        fontWeight: "500"
    },
    time: {
        fontSize: 10,
        color: '#999',
        marginTop: 4,
        fontWeight: "500"
    },
});

export default WeatherCard;
