import './App.css';
import ToggleDetails from './ToggleDetails';
import ScoreDisplay from './ScoreDisplay';
import TaskList from './TaskList';
import UserList from './UserList';
import TimerCounter from './TimerCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Wyświetleni lub ukrycie po naciśnięciu przycisku: </p>
        <ToggleDetails/>
        <p>Wyświetlanie wyniku zależnie ile podało się do props score: </p>
        <ScoreDisplay score={25}/>
        <ScoreDisplay score={70}/>
        <ScoreDisplay score={100}/>
        <p>Lista zadań: </p>
        <TaskList/>
        <p>Lista użytkowników: </p>
        <UserList/>
        <p>Odlicza do 10: </p>
        <TimerCounter/>
      </header>
    </div>
  );
}

export default App;
