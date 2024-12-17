interface IProps {
  digit: number | string;
  className?: string;
  onButtonClick: (value: string | number) => void;
}
function Button(props: IProps) {
  return (
    <button
      onClick={() => props.onButtonClick(props.digit)}
      className={props.className}
      style={{ color: "white" }}
    >
      {props.digit}
    </button>
  );
}

export default Button;
