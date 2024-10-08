import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import ModalDropdownComponent from './ModalDropdownComponent';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../utils';
import { spacings } from '../constant/Fonts';
import { BaseStyle } from '../constant/Style';
import { lightGrayOpacityColor, whiteColor } from '../constant/Colors';

const { borderRadius5, flexDirectionRow, justifyContentSpaceEvenly, flex } = BaseStyle;

const ShiftForm = ({ from }) => {
  const [selectedUser, setSelectedUser] = useState('');
  const [prestartDateTime, setPrestartDateTime] = useState(new Date());
  const [prestartDuration, setPrestartDuration] = useState('');
  const [shiftStartTime, setShiftStartTime] = useState(new Date());
  const [shiftType, setShiftType] = useState('');
  const [siteLocation, setSiteLocation] = useState('');
  const [showPrestartPicker, setShowPrestartPicker] = useState(false);
  const [showShiftPicker, setShowShiftPicker] = useState(false);

  return (
    <View style={[styles.container]}>
      {from === "Diary" ?
        <View>
          <View style={[flexDirectionRow, justifyContentSpaceEvenly]}>
            <View style={{ width: wp(17) }}>
              <Text style={styles.label}>Supervisor</Text>
              <ModalDropdownComponent
                options={['User 1', 'User 2']}
                onSelect={(index, value) => setSelectedUser(value)}
                optionBoxStyle={[styles.dropdownStyle, { width: wp(17) }]}
              />
            </View>

            {/* Prestart Date & Time */}
            <View style={{ width: wp(17) }}>
              <Text style={styles.label}>Prestart Date & Time</Text>
              <TouchableOpacity onPress={() => { setShowPrestartPicker(true) }}>
                <View style={styles.input}>
                  <Text>{prestartDateTime.toLocaleString()}</Text>
                </View>
              </TouchableOpacity>
              {showPrestartPicker && (
                <DateTimePicker
                  value={prestartDateTime}
                  mode="datetime"
                  display="default"
                  onChange={(event, selectedDate) => {
                    setShowPrestartPicker(false);
                    setPrestartDateTime(selectedDate || prestartDateTime);
                  }}
                  style={{ position: "absolute", top: 70 }}
                />
              )}
            </View>



            {/* Shift Start Time */}
            <View style={{ width: wp(17) }}>
              <Text style={styles.label}>Shift Start Time</Text>
              <TouchableOpacity onPress={() => setShowShiftPicker(true)}>
                <View style={styles.input}>
                  <Text>{shiftStartTime.toLocaleString()}</Text>
                </View>
              </TouchableOpacity>

              {showShiftPicker && (
                <DateTimePicker
                  value={shiftStartTime}
                  mode="datetime"
                  display="default"
                  onChange={(event, selectedDate) => {
                    setShowShiftPicker(false);
                    setShiftStartTime(selectedDate || shiftStartTime);
                  }}
                  style={{ position: "absolute", top: 70 }}
                />
              )}
            </View>

            <View style={{ width: wp(17)}}>
              <Text style={styles.label}>Shift Type</Text>
              <ModalDropdownComponent
                options={['Type 1', 'Type 2']}
                onSelect={(index, value) => setShiftType(value)}
                optionBoxStyle={[styles.dropdownStyle, { width: wp(17)}]}
              />
            </View>
            <View style={{ width: wp(17) }}>
              <Text style={styles.label}>Site Location</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter location"
                value={siteLocation}
                onChangeText={setSiteLocation}
              />
            </View>
          </View>
        </View> :
        <View>
          <View style={[flexDirectionRow, justifyContentSpaceEvenly]}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Supervisor</Text>
              <ModalDropdownComponent
                options={['User 1', 'User 2']}
                onSelect={(index, value) => setSelectedUser(value)}
                optionBoxStyle={[styles.dropdownStyle, { width: wp(19.5) }]}
              />
            </View>

            {/* Prestart Date & Time */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Prestart Date & Time</Text>
              <TouchableOpacity onPress={() => { setShowPrestartPicker(true) }}>
                <View style={styles.input}>
                  <Text>{prestartDateTime.toLocaleString()}</Text>
                </View>
              </TouchableOpacity>
              {showPrestartPicker && (
                <DateTimePicker
                  value={prestartDateTime}
                  mode="datetime"
                  display="default"
                  onChange={(event, selectedDate) => {
                    setShowPrestartPicker(false);
                    setPrestartDateTime(selectedDate || prestartDateTime);
                  }}
                  style={{ position: "absolute", top: 70 }}
                />
              )}
            </View>

            {/* Prestart Duration */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Prestart Duration</Text>
              <ModalDropdownComponent
                options={['User 1', 'User 2']}
                onSelect={(index, value) => setSelectedUser(value)}
                optionBoxStyle={[styles.dropdownStyle, { width: wp(19.5) }]}
              />
            </View>

            {/* Shift Start Time */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Shift Start Time</Text>
              <TouchableOpacity onPress={() => setShowShiftPicker(true)}>
                <View style={styles.input}>
                  <Text>{shiftStartTime.toLocaleString()}</Text>
                </View>
              </TouchableOpacity>
              {showShiftPicker && (
                <DateTimePicker
                  value={shiftStartTime}
                  mode="datetime"
                  display="default"
                  onChange={(event, selectedDate) => {
                    setShowShiftPicker(false);
                    setShiftStartTime(selectedDate || shiftStartTime);
                  }}
                  style={{ position: "absolute", top: 80 }}
                />
              )}
            </View>
          </View>

          <View style={[{ width: "100%", marginTop: spacings.ExtraLarge1x }, flexDirectionRow, justifyContentSpaceEvenly]}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Shift Type</Text>
              <ModalDropdownComponent
                options={['Type 1', 'Type 2']}
                onSelect={(index, value) => setShiftType(value)}
                optionBoxStyle={[styles.dropdownStyle, { width: wp(19.5) }]}
              />
            </View>

            {/* Site Location */}
            <View style={[{ width: wp(62) }]}>
              <Text style={styles.label}>Site Location</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter location"
                value={siteLocation}
                onChangeText={setSiteLocation}
              />
            </View>
          </View>
        </View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    // height: hp(25)
  },
  inputContainer: {
    width: wp(20),
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#fff'
  },
  dropdownStyle: {
    backgroundColor: whiteColor,
    borderWidth: 1,
    borderColor: lightGrayOpacityColor,
    borderRadius: 5,
    // width: wp(17),
    height: "auto"
  },
});

export default ShiftForm;

