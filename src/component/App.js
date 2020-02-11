import React, { useEffect }  from 'react';

const App = ({number, numbers, operators, inputNumber, inputOperator, calculate, allClear}) => {

  const onNumberClick = num => {
    inputNumber(number + '' + num);
  };

  const onOperatorClick = operator => {
    inputOperator(operator);
  };

  useEffect(() => {
    if (operators.indexOf('=') === -1) return;

    let formula = '';
    for (let i=0; i<numbers.length; i++) {
      formula += numbers[i];

      if (i === numbers.length-1) break;

      formula += operators[i];
    }

    const result = eval(formula);
    calculate(result);
  });

  return(
    <div>
      <h1>DENTAKU APP</h1>
      <div className="app">
        <div className="app__result">{ number }</div>
        <div className="app__row">
          <div className="app__row__item app__row__item--dark" onClick={() => allClear()}>AC</div>
          <div className="app__row__item app__row__item--dark">+/-</div>
          <div className="app__row__item app__row__item--dark" onClick={() => onOperatorClick('%')}>%</div>
          <div className="app__row__item app__row__item--accent" onClick={() => onOperatorClick('/')}>÷</div>
        </div>
        <div className="app__row">
          <div className="app__row__item app__row__item--dark" onClick={() => onNumberClick(7)}>7</div>
          <div className="app__row__item app__row__item--dark" onClick={() => onNumberClick(8)}>8</div>
          <div className="app__row__item app__row__item--dark" onClick={() => onNumberClick(9)}>9</div>
          <div className="app__row__item app__row__item--accent" onClick={() => onOperatorClick('*')}>×</div>
        </div>
        <div className="app__row">
          <div className="app__row__item app__row__item--dark" onClick={() => onNumberClick(4)}>4</div>
          <div className="app__row__item app__row__item--dark" onClick={() => onNumberClick(5)}>5</div>
          <div className="app__row__item app__row__item--dark" onClick={() => onNumberClick(6)}>6</div>
          <div className="app__row__item app__row__item--accent" onClick={() => onOperatorClick('-')}>-</div>
        </div>
        <div className="app__row">
          <div className="app__row__item app__row__item--dark" onClick={() => onNumberClick(1)}>1</div>
          <div className="app__row__item app__row__item--dark" onClick={() => onNumberClick(2)}>2</div>
          <div className="app__row__item app__row__item--dark" onClick={() => onNumberClick(3)}>3</div>
          <div className="app__row__item app__row__item--accent" onClick={() => onOperatorClick('+')}>+</div>
        </div>
        <div className="app__row">
          <div className="app__row__item app__row__item--dark app__row__item--twice" onClick={() => onNumberClick(0)}>0</div>
          <div className="app__row__item app__row__item--dark" onClick={() => onNumberClick('.')}>.</div>
          <div className="app__row__item app__row__item--accent" onClick={() => onOperatorClick("=")}>=</div>
        </div>
      </div>
    </div>
  );
};

export default App;

