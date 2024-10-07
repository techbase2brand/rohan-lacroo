import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../utils';
import { blueColor, whiteColor } from '../constant/Colors';
import { BaseStyle } from '../constant/Style';
import { spacings, style } from '../constant/Fonts';
import { DAIRY_IMAGE, LACROO_IMAGE, PRESTART_IMAGE } from '../assests/images';
import { useNavigation } from '@react-navigation/native';
const { alignItemsCenter } = BaseStyle;
const SideMenu = () => {
  const navigation = useNavigation();

  const onPressLacrooIcon = () => {
    navigation.goBack();
  };

  const onPressPreStart = () => {
    navigation.navigate("PreStartMainScreen");
  };

  const onPressDairy = () => {
    navigation.navigate("DairyMainScreen");
  };

  return (
    <View style={[styles.container, alignItemsCenter]}>
      <TouchableOpacity style={{ marginTop: spacings.large }} onPress={onPressLacrooIcon}>
        <Image source={LACROO_IMAGE} style={{ width: 50, height: 50 }} />
      </TouchableOpacity>
      <TouchableOpacity style={{ marginTop: spacings.large }} onPress={onPressPreStart}>
        <Image source={PRESTART_IMAGE} style={{ width: 50, height: 50 }} />
      </TouchableOpacity>
      <TouchableOpacity style={{ marginTop: spacings.large }} onPress={onPressDairy}>
        <Image source={DAIRY_IMAGE} style={{ width: 50, height: 50 }} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: wp(5),
    height: hp(100),
    padding: spacings.large,
    backgroundColor: "#FFF"
  }
});

export default SideMenu;