import React from 'react';

const App = () => {
  
  return(
    <div>
      <h1>DENTAKU APP</h1>
      <div className="app">
        <div className="app__result">0</div>
        <div className="app__row">
          <div className="app__row__item app__row__item--dark">C</div>
          <div className="app__row__item app__row__item--dark">+/-</div>
          <div className="app__row__item app__row__item--dark">%</div>
          <div className="app__row__item app__row__item--accent">÷</div>
        </div>
        <div className="app__row">
          <div className="app__row__item app__row__item--dark">7</div>
          <div className="app__row__item app__row__item--dark">8</div>
          <div className="app__row__item app__row__item--dark">9</div>
          <div className="app__row__item app__row__item--accent">×</div>
        </div>
        <div className="app__row">
          <div className="app__row__item app__row__item--dark">4</div>
          <div className="app__row__item app__row__item--dark">5</div>
          <div className="app__row__item app__row__item--dark">6</div>
          <div className="app__row__item app__row__item--accent">-</div>
        </div>
        <div className="app__row">
          <div className="app__row__item app__row__item--dark">1</div>
          <div className="app__row__item app__row__item--dark">2</div>
          <div className="app__row__item app__row__item--dark">3</div>
          <div className="app__row__item app__row__item--accent">+</div>
        </div>
        <div className="app__row">
          <div className="app__row__item app__row__item--dark app__row__item--twice">0</div>
          <div className="app__row__item app__row__item--dark">.</div>
          <div className="app__row__item app__row__item--accent">=</div>
        </div>
      </div>
    </div>
  );
};

export default App;

