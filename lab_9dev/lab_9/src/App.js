import './App.css';
import React, {useState, useCallback} from "react";
import handelClick from './handleClick.js';
import Counter from "./Counter.tsx"
import ItemList from './ItemList.tsx';

function App() {
  const [count, setCount] = useState(0)

  const onLog = useCallback(() => {
    console.log("licznik: ", count)
  }, )

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <label>Przycisk z referencją: </label>
          <button onClick={handelClick}>Kliknij mnie</button>
          <div/>
          <label>Przycisk z funkcją anonimową: </label>
          <button onClick={() => console.log('Kliknięto przycisk z funkcją anonimową.')}>Kliknij mnie</button>
        </div>
        <div>
          <button onClick={() => setCount((c) => c+1)}>Zwiększ: {count} </button>
          <Counter onLog={() => console.log("Licznik: ", count)} />
        </div>
        <div>
          <button onClick={() => setCount((c) => c+1)}>Zwiększ: {count} </button>
          <Counter onLog={onLog} />
        </div>
        <ItemList/>
      </header>
    </div>
  );
}

export default App;
