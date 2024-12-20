import ResultScreen from "./ResultScreen";
import Button from "./Buttons";
import "./Calculator.css";
import { useState } from "react";
const digitList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let num: number = 0; // the temporary holder for each number
let sum: number = 0; // the final answer
let checker: boolean = true; // true === firstNumber, false === SecondNumber
let operate = true; // true === addition, false === subtraction
let equalPressed = false; // true === = is pressed, false === = is not pressed yet
function Calculator() {
  const [result, setResult] = useState<number | string>(sum);
  const [firstNumber, sendFirstNumber] = useState<number>(0);
  const [operation, sendOperation] = useState<string>("");
  const [secondNumber, sendSecondNumber] = useState<number>(0);
  const [equality, sendEquality] = useState<string>("");

  const calculateOutcome = (value: number | string) => {
    if (value == "+") {
      sendOperation("+");
      sum += num;
      num = 0;
      checker = false;
      operate = true;
    } else if (value == "-") {
      sendOperation("-");
      sum += num;
      num = 0;
      checker = false;
      operate = false;
    } else if (value == "=") {
      equalPressed = true;
      sendEquality("=");
      if (operate) {
        setResult(sum + num);
        sum += num;
        num = 0;
      } else {
        setResult(sum - num);
        sum -= num;
        num = 0;
      }
    } else {
      if (equalPressed) {
        equalPressed = false;
        checker = true;
        sum = 0;
        sendFirstNumber(0);
        sendSecondNumber(0);
        sendOperation("");
        sendEquality("");
        setResult(0);
      }
      if (checker) {
        sendFirstNumber(num * 10 + Number(value));
        num *= 10;
        num += Number(value);
      } else {
        sendSecondNumber(num * 10 + Number(value));
        num *= 10;
        num += Number(value);
      }
    }
  };
  const handleButtonClick = (value: string | number) => {
    calculateOutcome(value);
  };

  return (
    <div className="container">
      <ResultScreen
        firstNumber={firstNumber}
        sum={result}
        operator={operation}
        secondNumber={secondNumber}
        equality={equality}
      />
      <div className="buttonArea">
        {digitList.map((val) => (
          <Button key={val} digit={val} onButtonClick={handleButtonClick} />
        ))}
        <Button
          className="plus"
          digit={"+"}
          onButtonClick={handleButtonClick}
        />
        <Button
          className="minus"
          digit={"-"}
          onButtonClick={handleButtonClick}
        />
        <Button
          className="equal"
          digit={"="}
          onButtonClick={handleButtonClick}
        />
      </div>
    </div>
  );
}

export default Calculator;
