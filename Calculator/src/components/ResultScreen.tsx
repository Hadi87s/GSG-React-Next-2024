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
        height: "30px",
        border: "1px solid #36acca",
        color: "#373f41",
        fontWeight: "bold",
        fontSize: "20px",
        overflow: "auto",
      }}
    >
      {props.firstNumber === 0 ? "" : props.firstNumber} {props.operator}{" "}
      {props.secondNumber === 0 ? "" : props.secondNumber} {props.equality}{" "}
      <span style={{ color: "#36acca" }}>
        {props.sum === 0 ? "" : props.sum}
      </span>
    </div>
  );
}

export default ResultScreen;
