/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import Modal from 'react-native-modal';

interface modal {
  showModalCal: boolean;
  animationOutTiming: number;
  text: string;
}

export const ModalCalculadora = ({
  showModalCal,
  animationOutTiming,
  text,
}: modal) => {
  return (
    <Modal
      isVisible={showModalCal}
      animationOutTiming={animationOutTiming}
      animationIn={'slideInUp'}
      style={{justifyContent: 'flex-end'}}>
      <View
        style={{
          height: 40,
          backgroundColor: 'rgba(40, 40, 40, 0.8)',
          borderRadius: 50,
          justifyContent: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 23, textAlign: 'center'}}>
          {text}
        </Text>
      </View>
    </Modal>
  );
};
