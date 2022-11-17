
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then(res => res.json())
      .then(data => setData(data))
  }, [])
  console.log(data)
  return (
    <div className="App">
      <h1>This is travel site</h1>
    </div>
  );
}

export default App;
