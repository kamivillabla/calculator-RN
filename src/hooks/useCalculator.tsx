import {useState, useRef, useEffect} from 'react';

enum Operadores {
  add,
  subtract,
  multiply,
  split,
}

export const useCalculator = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 2000); // 5000ms = 5 segundos
      return () => clearTimeout(timer);
    }
  }, [showModal]);

  const [previousNumber, setPreviousNumber] = useState('0');
  const [num, setNum] = useState('0');

  const lastOperation = useRef<Operadores>();

  const clean = () => {
    setNum('0');
    setPreviousNumber('0');
  };

  const armNumber = (numberText: string) => {
    const MAX_CARACTERES = 16;
    // no aceptar doble punto
    if (num.includes('.') && numberText === '.') {
      return;
    }
    // Verificar si se supera el máximo de caracteres permitidos
    if (num.length + numberText.length > MAX_CARACTERES) {
      return;
    }
    if (num.startsWith('0') || num.startsWith('-0')) {
      // punto decimal.
      if (numberText === '.') {
        setNum(num + numberText);
        // evaluar si es otro cero y hay un punto
      } else if (numberText === '0' && num.includes('.')) {
        setNum(num + numberText);

        // evaluar si es diferente de 0 y no tiene un punto
      } else if (numberText !== '0' && !num.includes('.')) {
        setNum(numberText);

        // evitar 000000.00
      } else if (numberText === '0' && !num.includes('.')) {
        setNum(num);
      } else {
        setNum(num + numberText);
      }
    } else {
      setNum(num + numberText);
    }
  };

  const positiveNegative = () => {
    if (num.includes('-')) {
      setNum(num.replace('-', ''));
    } else {
      setNum('-' + num);
    }
  };

  // boton para borrar el ultimo digito.
  const btnDelete = () => {
    let negative = '';
    let numberTemp = num;
    if (num.includes('-')) {
      negative = '-';
      numberTemp = num.substr(1);
    }

    if (numberTemp.length > 1) {
      setNum(negative + numberTemp.slice(0, -1));
    } else {
      setNum('0');
    }
  };

  const changeNumberToPrevious = () => {
    if (num.endsWith('.')) {
      setPreviousNumber(num.slice(0, -1));
    } else {
      setPreviousNumber(num);
    }
    setNum('0');
  };

  const btnSplit = () => {
    changeNumberToPrevious();
    lastOperation.current = Operadores.split;
  };
  const btnMultiply = () => {
    changeNumberToPrevious();
    lastOperation.current = Operadores.multiply;
  };
  const btnSubtract = () => {
    changeNumberToPrevious();
    lastOperation.current = Operadores.subtract;
  };
  const btnAdd = () => {
    changeNumberToPrevious();
    lastOperation.current = Operadores.add;
  };

  const calculate = () => {
    const num1 = Number(num);
    const num2 = Number(previousNumber);

    if (lastOperation.current === Operadores.split) {
      if (num1 === 0) {
        setShowModal(true);
        return;
      }
      setNum(`${num2 / num1}`);
    } else if (lastOperation.current === Operadores.multiply) {
      setNum(`${num1 * num2}`);
    } else if (lastOperation.current === Operadores.add) {
      setNum(`${num1 + num2}`);
    } else if (lastOperation.current === Operadores.subtract) {
      setNum(`${num2 - num1}`);
    }
    setPreviousNumber('0');
  };

  return {
    showModal,
    setShowModal,
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
  };
};
