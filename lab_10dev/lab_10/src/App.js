import './App.css';
import ClickCounter from './ClickCounter';
import FormReducer from './FormReducer.tsx';
import LayoutEffectExample from './LayoutEffectExample.tsx';
import PrimeCalculator from './PrimeCalculator.tsx';
import { useTheme, ThemeProvider } from "./ThemeContext.tsx";

function ThemeSwitcher() {
 const { dark, toggleTheme } = useTheme()
 return (
    <div style={{ background: dark ? "#333" : "#fff", color: dark ? "#fff" : "#000" }}>
      <button onClick={toggleTheme}>Przełącz motyw</button>
      <h4>Przykładowy tekst aby zobaczyć jak zmienia się motyw.</h4>
    </div>
 )
}

function App() {
  return (
    <div className="App">

      <label>Przycisk wykożystujący useRef: </label>
      <ClickCounter/>
      <label>Wykożystanie useMemo do zliczania liczb pierwszych: </label>
      <PrimeCalculator/>
      <label>Formularz z wykorzystaniem useReducer: </label>
      <FormReducer/>
      <label>Przycisk zmieniający motyw strony na jasny lub ciemny: </label>
      <ThemeProvider>
        <ThemeSwitcher/>
      </ThemeProvider>
      <label>Wymierzenie wysokość elementu przed jego wyrenderowaniem</label>
      <LayoutEffectExample/>
    </div>
  );
}

export default App;
