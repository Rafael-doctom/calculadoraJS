import './App.css';

function App() {
  return (
    <>
      <div className="container">
        <div className="content">
          <div className="screen-calculator">
            <div className="result">
              0000
            </div>
            <div className="calculator">
              <button>
                +
              </button>
              <button>
                -
              </button>
              <button>
                x
              </button>
              <button>
                /
              </button>
            </div>
            <div className="calculator">
              <button>
                9
              </button>
              <button>
                8
              </button>
              <button>
                7
              </button>
              <button>
                6
              </button>
            </div>
            <div className="calculator">
              <button>
                5
              </button>
              <button>
                4
              </button>
              <button>
                3
              </button>
              <button>
                2
              </button>
            </div>
            <div className="calculator">
              <button>
                1
              </button>
              <button>
                AC
              </button>
              <button className='equal'>
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
