import './App.css';
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [fromBytes, setFromBytes] = useState('Bytes');
  const [toBytes, setToBytes] = useState('Bytes');
  const [result, setResult] = useState('');


  const units ={
    Bytes : 1,
    Kilobytes : 1024,
    Megabytes : 1024 * 1024,
    Gigabytes : 1024 * 1024,
    Terabytes : 1024 * 1024 * 1024,
    Petabytes : 1024 * 1024 * 1024 * 1024
  }

  const converter = (e)=>{
    if(inputValue === '' || isNaN(inputValue)){
      setResult('Invalid input!')    
      return;  
    }

    const BytesValue = inputValue* units[fromBytes];
    const convertedBytes = BytesValue / units[toBytes];
    setResult(`${convertedBytes} ${toBytes}`);
  }

  return (
    <div className="App">
      <div className='Layout'>
          <h1>Byte Size Converter</h1>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="number"
            placeholder='Enter value'
            className='inputNumber' 
          />
          <select 
            value={fromBytes}
            onChange={(e) => setFromBytes(e.target.value)}
            className='select' 
          >
            {Object.keys(units).map((unit) => (
            <option key={unit} value={unit}>{unit}</option>
          ))}
          </select>
          <p id='to'>to</p>
          <select 
            value={toBytes}
            onChange={(e) => setToBytes(e.target.value)}
            className='select'
          >
            {Object.keys(units).map((unit)=>(
              <option key={unit} value={unit}>{unit}</option>
            ))}
          </select> <br />
          <button onClick={converter} className='change_btn'>Convert</button>
          <h2  className='result'>Result: {result}</h2>
      </div>
    </div>
  );
}

export default App;