import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col gap-3">
          <h1 class="text-2xl font-bold underline">Latihan Increment</h1>
          <h1 className="text-5xl text-purple-600 font-bold font-mono text-center">
            {number}
          </h1>
          <div className="flex justify-center gap-3">
            <button
              className="p-3 bg-green-500 text-gray-200 font-bold rounded"
              onClick={() => {
                let addOne = number + 1;
                setNumber(addOne);
              }}
            >
              Add 1 (+)
            </button>
            <button
              className="p-3 bg-gray-500 text-gray-200 font-bold rounded"
              onClick={() => {
                let minOne = number - 1;
                if (number !== 0) {
                  setNumber(minOne);
                }
              }}
            >
              Min 1 (-)
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
