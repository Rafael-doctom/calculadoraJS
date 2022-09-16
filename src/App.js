import './App.css';

import { useState } from 'react';

function App() {

  const [input, setInput] = useState(0);

  const Buttons = (value) => {
    if (input) {
      setInput(input + value)
    };

    if (input === '0') {
      setInput(value)
    };

    if (value === '+' || value === '-' || value === '/' || value === '*') {
      setInput(input + value)
    };

    if (value === 'AC') {
      setInput(0)
    };
  };

  const btnEqual = (value) => {
    if (value === '=') {
      /* eslint no-eval: 0 */
      const resultTela = eval(input)
      setInput(resultTela)
    };
  };



  return (
    <>
      <div className="container">
        <div className="content">
          <div className="screen-calculator">
            <div className="result">
              {input}
            </div>
            <div className="calculator">
              <button onClick={e => Buttons(e.target.value)} value="+">
                +
              </button>
              <button onClick={e => Buttons(e.target.value)} value="-">
                -
              </button>
              <button onClick={e => Buttons(e.target.value)} value="*">
                x
              </button>
              <button onClick={e => Buttons(e.target.value)} value="/">
                /
              </button>
            </div>
            <div className="calculator">
              <button onClick={e => Buttons(e.target.value)} value="9">
                9
              </button>
              <button onClick={e => Buttons(e.target.value)} value="8">
                8
              </button>
              <button onClick={e => Buttons(e.target.value)} value="7">
                7
              </button>
              <button onClick={e => Buttons(e.target.value)} value="6">
                6
              </button>
            </div>
            <div className="calculator">
              <button onClick={e => Buttons(e.target.value)} value="5">
                5
              </button>
              <button onClick={e => Buttons(e.target.value)} value="4">
                4
              </button>
              <button onClick={e => Buttons(e.target.value)} value="3">
                3
              </button>
              <button onClick={e => Buttons(e.target.value)} value="2">
                2
              </button>
            </div>
            <div className="calculator">
              <button onClick={e => Buttons(e.target.value)} value="1">
                1
              </button>
              <button onClick={e => Buttons(e.target.value)} value="AC">
                AC
              </button>
              <button className='equal' onClick={e => btnEqual(e.target.value)} value="=">
                =
              </button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
