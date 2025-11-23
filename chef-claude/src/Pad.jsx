export default function Pad(props) {
  return (
    <button
      className={props.on ? "on" : undefined}
      style={
        props.on
          ? { backgroundColor: props.color }
          : { backgroundColor: "white" }
      }
      onClick={() => props.toggle(props.id)}
      value={props.id}
    ></button>
  );
}
