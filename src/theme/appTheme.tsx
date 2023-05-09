import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  calculatorContainer: {
    flex: 1,
    paddingHorizontal: 25,
    justifyContent: 'flex-end',
  },
  result: {
    fontSize: 60,
    color: '#5A5A5A',
    textAlign: 'right',
    marginBottom: 20,
  },
  smallResult: {
    color: 'rgba(90,90,90,0.5)',
    fontSize: 30,
    textAlign: 'right',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 20,
  },
});
