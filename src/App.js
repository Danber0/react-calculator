import React from 'react';
import './App.css';

function App() {
  const [result, setResult] = React.useState('');

  const handleClickNumber = (event) => {
    setResult((prev) => prev + event.target.innerText);
  };

  const handleClickClear = () => {
    setResult('');
  };

  const handleClickClearBack = () => {
    setResult(result.slice(0, -1));
  };

  const handleClickResult = () => {
    setResult(eval(result).toString());
  };

  return (
    <div className="App">
      <div className="calc">
        <div className="calc__tablo">
          <input type="text" value={result}></input>
        </div>
        <div className="calc__keys">
          <button onClick={handleClickClear} className="sign" id="clear">
            Clear
          </button>
          <button onClick={handleClickClearBack} className="sign" id="back">
            C
          </button>
          <button onClick={(event) => handleClickNumber(event)} className="sign">
            /
          </button>
          <button onClick={(event) => handleClickNumber(event)}>7</button>
          <button onClick={(event) => handleClickNumber(event)}>8</button>
          <button onClick={(event) => handleClickNumber(event)}>9</button>
          <button onClick={(event) => handleClickNumber(event)} className="sign">
            *
          </button>
          <button onClick={(event) => handleClickNumber(event)}>4</button>
          <button onClick={(event) => handleClickNumber(event)}>5</button>
          <button onClick={(event) => handleClickNumber(event)}>6</button>
          <button onClick={(event) => handleClickNumber(event)} className="sign">
            -
          </button>
          <button onClick={(event) => handleClickNumber(event)}>1</button>
          <button onClick={(event) => handleClickNumber(event)}>2</button>
          <button onClick={(event) => handleClickNumber(event)}>3</button>
          <button onClick={(event) => handleClickNumber(event)} className="sign">
            +
          </button>
          <button onClick={(event) => handleClickNumber(event)}>0</button>
          <button onClick={(event) => handleClickNumber(event)}>.</button>
          <button onClick={handleClickResult} className="sign" id="equal">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
