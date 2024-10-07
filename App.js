import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from './src/utils';
import { BaseStyle } from './src/constant/Style';
import { verylightGrayColor } from './src/constant/Colors';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import PreStartMainScreen from './src/screens/prestart/PreStartMainScreen';
import CreatePrestartScreen from './src/screens/prestart/CreatePrestartScreen';
import DairyMainScreen from './src/screens/Dairy/DairyMainScreen';
import CreateDailyDiary from './src/screens/Dairy/CreateDailyDiary';

const { flex, alignItemsCenter, justifyContentCenter } = BaseStyle;
const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PreStartMainScreen" component={PreStartMainScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CreatePrestartScreen" component={CreatePrestartScreen} options={{ headerShown: false }} />
      <Stack.Screen name="DairyMainScreen" component={DairyMainScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CreateDailyDiary" component={CreateDailyDiary} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeArea}>
        <AuthNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  container: {
    flex: 1,
    width: wp(100),
    height: hp(100),
    backgroundColor: verylightGrayColor,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;

