import React, { useState } from "react";
import "./Calculadora.css";
import "./Container.css";
import "./visor.css";

export default function Calculator() {
  const [number, setNumber] = useState(0);
  const [oldnumber, setOldNumber] = useState(0);
  const [operator, setOperator] = useState(0);

  function inputNumber(e) {
    // função que vai receber os valores clicados mostrando no input
    var input = e.target.value;
    if (number === 0) {
      setNumber(input);
    } else {
      setNumber(number + input);
    }
  }

  function clear(e) {
    // função AC pra limpar o input
    setNumber(0);
  }

  function signChange() {
    // função pra mudar o sinal pra - ou pra +
    if (number > 0) {
      setNumber(-number);
    } else {
      setNumber(Math.abs(number));
    }
  }

  function operators(e) {
    // função que seta o número para 0 novamente no meio da conta
    var inputOp = e.target.value;
    setOperator(inputOp);
    setOldNumber(number);
    setNumber(0);
  }

  function calculator() {
    // função que irá calcular as respectivas operações
    if (operator === "/") {
      setNumber(parseFloat(oldnumber) / parseFloat(number));
    } else if (operator === "X") {
      setNumber(parseFloat(oldnumber) * parseFloat(number));
    } else if (operator === "+") {
      setNumber(parseFloat(oldnumber) + parseFloat(number));
    } else if (operator === "-") {
      setNumber(parseFloat(oldnumber) - parseFloat(number));
    }
  }

  return (
    <div className="Container">
      <div className="visor">
        <input type="text" value={number} />
      </div>
      <div className="Calculadora">
        <button className="styleOperators" onClick={clear}>
          AC
        </button>
        <button
          className="styleOperators"
          onClick={inputNumber}
          value={3.14159265358979323846}
        >
          Pi
        </button>
        <button className="styleOperators" onClick={signChange}>
          +/-
        </button>
        <button className="styleOperators" onClick={operators} value={"/"}>
          /
        </button>

        <button onClick={inputNumber} value={7}>
          7
        </button>
        <button onClick={inputNumber} value={8}>
          8
        </button>
        <button onClick={inputNumber} value={9}>
          9
        </button>
        <button className="styleOperators" onClick={operators} value={"X"}>
          X
        </button>

        <button onClick={inputNumber} value={4}>
          4
        </button>
        <button onClick={inputNumber} value={5}>
          5
        </button>
        <button onClick={inputNumber} value={6}>
          6
        </button>
        <button className="styleOperators" onClick={operators} value={"-"}>
          -
        </button>

        <button onClick={inputNumber} value={1}>
          1
        </button>
        <button onClick={inputNumber} value={2}>
          2
        </button>
        <button onClick={inputNumber} value={3}>
          3
        </button>
        <button className="styleOperators" onClick={operators} value={"+"}>
          +
        </button>

        <button className="Zero" onClick={inputNumber} value={0}>
          0
        </button>
        <button onClick={inputNumber} value={"."}>
          ,
        </button>
        <button className="styleOperators" onClick={calculator}>
          =
        </button>
      </div>
    </div>
  );
}
