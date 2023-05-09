/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

interface button {
  btnText: string;
  color?: string;
  width?: boolean;
  accion: (accionButton: string) => void;
  accesiLabel: string;
  accesiRole: any;
}

export const BtnCalculator = ({
  btnText,
  color = '2d2d2d',
  width = false,
  accion,
  accesiLabel,
  accesiRole,
}: button) => {
  return (
    <TouchableHighlight
      onPress={() => accion(btnText)}
      accessibilityLabel={accesiLabel}
      accessibilityRole={accesiRole}
      activeOpacity={0.8}
      underlayColor="#FCDCD9"
      style={{
        ...styles.btn,
        backgroundColor: color,
        width: width ? 170 : 80,
      }}>
      <View>
        <Text
          style={{
            ...styles.btnText,
            color: color === '#9b9b9b' ? 'black' : 'white',
          }}>
          {btnText}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  btn: {
    height: 80,
    width: 80,
    borderRadius: 50,
    justifyContent: 'center',
    marginHorizontal: 5,

    shadowColor: 'black',
    shadowOffset: {
      width: 10,
      height: 2,
    },
    elevation: 3,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  btnText: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
});
