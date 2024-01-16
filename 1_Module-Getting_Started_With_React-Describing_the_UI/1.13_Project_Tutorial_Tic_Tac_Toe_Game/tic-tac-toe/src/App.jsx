function Square({ value }) {
  return (
    <button className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg">
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
