export default function Color(props: {
  hex: string;
  name: string;
  act: (params: any) => void;
}) {
  return (
    <button
      className="color-square"
      style={{ backgroundColor: props.hex }}
      onClick={props.act}
    >
      <h2>{props.name}</h2>
    </button>
  );
}
