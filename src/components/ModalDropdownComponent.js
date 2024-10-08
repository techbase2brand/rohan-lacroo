import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import ModalDropdown from 'react-native-modal-dropdown';
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../utils';
import { blackColor, lightGrayColor, lightGrayOpacityColor, whiteColor } from '../constant/Colors';
import { BaseStyle } from '../constant/Style';
import { spacings, style } from '../constant/Fonts';
const { borderRadius5 } = BaseStyle;

const ModalDropdownComponent = ({ options = [], onSelect, optionBoxStyle }) => {
  return (
    <ModalDropdown
      options={options}
      defaultValue="Select"
      onSelect={(index, value) => onSelect(index, value)}
      style={[styles.dropdown, borderRadius5]}
      textStyle={styles.dropdownText}
      defaultTextStyle={{ color: lightGrayColor }}
      dropdownTextStyle={optionBoxStyle ? optionBoxStyle :styles.dropdownText}
      // dropdownStyle={optionBoxStyle ? optionBoxStyle : styles.dropdownStyle}
      renderRightComponent={() => (
        <Feather
          name="chevron-down"
          size={20}
          color={blackColor}
          style={{ position: 'absolute', right: 10 }}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  dropdown: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    paddingVertical: spacings.normal,
    // width: "100%",
    backgroundColor: whiteColor
  },
  dropdownText: {
    fontSize: style.fontSizeNormal2x.fontSize,
    color: blackColor,
    paddingHorizontal: spacings.large,
    paddingVertical: spacings.normal,
  },
  dropdownStyle: {
    backgroundColor: whiteColor,
    borderWidth: 1,
    borderColor: lightGrayOpacityColor,
    borderRadius: 5,
    // width: "100%",
    height: "auto"
  },
});

export default ModalDropdownComponent;
