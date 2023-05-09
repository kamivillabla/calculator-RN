import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {useCalculator} from '../hooks/useCalculator';
import {BtnCalculator} from '../components/BtnCalculator';
import {ModalCalculadora} from '../components/ModalCalculadora';

export const CalculatorScreen = () => {
  const {
    showModal,
    previousNumber,
    num,
    btnDelete,
    btnSplit,
    btnMultiply,
    btnSubtract,
    btnAdd,
    calculate,
    positiveNegative,
    clean,
    armNumber,
  } = useCalculator();
  return (
    <View style={styles.calculatorContainer}>
      <ModalCalculadora
        showModalCal={showModal}
        animationOutTiming={3000}
        text="No es posible dividir entre 0"
      />
      {previousNumber !== '0' && (
        <Text style={styles.smallResult}>{previousNumber}</Text>
      )}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit={true}>
        {num}
      </Text>
      {/* Fila de botones */}
      <View style={styles.row}>
        <BtnCalculator
          btnText="C"
          color="#9b9b9b"
          accion={clean}
          accesiLabel="Boton de acción limpiar todo"
          accesiRole="button"
        />
        <BtnCalculator
          btnText="+/-"
          color="#9b9b9b"
          accion={positiveNegative}
          accesiLabel="Boton de acción simbolo -"
          accesiRole="button"
        />
        <BtnCalculator
          btnText="del"
          color="#9b9b9b"
          accion={btnDelete}
          accesiLabel="Boton de acción borrar un caracter"
          accesiRole="button"
        />
        <BtnCalculator
          btnText="/"
          color="#E1CDFF"
          accion={btnSplit}
          accesiLabel="Boton de acción dividir"
          accesiRole="button"
        />
      </View>
      {/* Fila de botones */}
      <View style={styles.row}>
        <BtnCalculator
          btnText="7"
          color="#3D3D3D"
          accion={armNumber}
          accesiLabel="Boton de número 7"
          accesiRole="button"
        />
        <BtnCalculator
          btnText="8"
          color="#3D3D3D"
          accion={armNumber}
          accesiLabel="Boton de número 8"
          accesiRole="button"
        />
        <BtnCalculator
          btnText="9"
          color="#3D3D3D"
          accion={armNumber}
          accesiLabel="Boton de número 9"
          accesiRole="button"
        />
        <BtnCalculator
          btnText="X"
          color="#E1CDFF"
          accion={btnMultiply}
          accesiLabel="Boton de acción multiplicar"
          accesiRole="button"
        />
      </View>
      {/* Fila de botones */}
      <View style={styles.row}>
        <BtnCalculator
          btnText="4"
          color="#3D3D3D"
          accion={armNumber}
          accesiLabel="Boton de número 4"
          accesiRole="button"
        />
        <BtnCalculator
          btnText="5"
          color="#3D3D3D"
          accion={armNumber}
          accesiLabel="Boton de número 5"
          accesiRole="button"
        />
        <BtnCalculator
          btnText="6"
          color="#3D3D3D"
          accion={armNumber}
          accesiLabel="Boton de número 6"
          accesiRole="button"
        />
        <BtnCalculator
          btnText="-"
          color="#E1CDFF"
          accion={btnSubtract}
          accesiLabel="Boton de acción restar"
          accesiRole="button"
        />
      </View>
      {/* Fila de botones */}
      <View style={styles.row}>
        <BtnCalculator
          btnText="1"
          color="#3D3D3D"
          accion={armNumber}
          accesiLabel="Boton de número 1"
          accesiRole="button"
        />
        <BtnCalculator
          btnText="2"
          color="#3D3D3D"
          accion={armNumber}
          accesiLabel="Boton de número 2"
          accesiRole="button"
        />
        <BtnCalculator
          btnText="3"
          color="#3D3D3D"
          accion={armNumber}
          accesiLabel="Boton de número 3"
          accesiRole="button"
        />
        <BtnCalculator
          btnText="+"
          color="#E1CDFF"
          accion={btnAdd}
          accesiLabel="Boton de accion sumar"
          accesiRole="button"
        />
      </View>
      <View style={styles.row}>
        <BtnCalculator
          btnText="0"
          color="#3D3D3D"
          width
          accion={armNumber}
          accesiLabel="Boton de número 0"
          accesiRole="button"
        />
        <BtnCalculator
          btnText="."
          color="#3D3D3D"
          accion={armNumber}
          accesiLabel="Boton de punto"
          accesiRole="button"
        />
        <BtnCalculator
          btnText="="
          color="#E1CDFF"
          accion={calculate}
          accesiLabel="Boton de resultado"
          accesiRole="button"
        />
      </View>
    </View>
  );
};
