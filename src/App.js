import React from 'react';
import Board from './components/Board';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <main className="flexbox">
        <Board className="board">
            <Card id="card-1" className="card" draggable="true">
              <p>Card one</p>
            </Card>
        </Board>
        <Board className="board">
            <Card id="card-2" className="card" draggable="true">
              <p>Card two</p>
            </Card>
        </Board>
      </main>
    </div>
  );
}

export default App;