import { useState } from "react";

interface IResult {
  sum: number | string;
  firstNumber: number;
  operator: string;
  secondNumber: number;
  equality: string;
}

function ResultScreen(props: IResult) {
  return (
    <div
      style={{
        padding: "10px 25px",
        backgroundColor: "#f4f6fb",
        borderRadius: "6px",
        width: "120px",
        border: "1px solid #36acca",
        color: "#373f41",
        fontWeight: "bold",
        fontSize: "20px",
      }}
    >
      {props.firstNumber} {props.operator} {props.secondNumber} {props.equality}{" "}
      {props.sum}
    </div>
  );
}

export default ResultScreen;
