import './App.css';
import Hello from './Hello';
import HelloWithProps from './HelloWithProps';
import Counter from './Counter';
import InputTracker from './InputTracker';
import LoginStatus from './LoginStatus';
import TodoList from './ToDoList';
import LoginForm from './LoginForm';


function App() {
  return (
    <div className="App">
      <div> <h3>Działania z js</h3>  </div>
      <Hello/>
      <HelloWithProps name="Bartek"/>
      <HelloWithProps name="Anna"/>
      <HelloWithProps name="Celina"/>
      <Counter/>
      <InputTracker/>
      <div> <h3>Działania z jsx</h3>  </div>
      <LoginStatus isLoggedIn={false}/>
      <LoginStatus isLoggedIn={true}/>
      <div/>
      <TodoList todos={["1. Zasada Newtona", "2. Zasada Newtona", "reakcja", "działąnie"]} />
      <LoginForm/>
    
    
    </div>
  );
}

export default App;
