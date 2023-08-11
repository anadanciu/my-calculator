export default function Color({ hex, name }) {
  return (
    <div className="c01-color-square" style={{ backgroundColor: hex }}>
      <h2>{name}</h2>
    </div>
  );
}
