import React from 'react';
import './App.scss';

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <p>Draft Day</p>
            </header>
            <div className="content-div">
                <div className="api-player-lookup">
                    <p>Api Player Lookup</p>
                </div>
                <div className="selected-player">
                    <p>Selected player</p>
                </div>
            </div>
        </div>
    );
}

export default App;
