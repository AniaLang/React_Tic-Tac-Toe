import './App.css'
import Game from './Components/Game'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Let's play a game :)</h1>
        <p>Player 1: O</p>
        <p>Player 2: X</p>
        <Game />
      </header>
    </div>
  )
}

export default App
