
import './App.css';
import { useEffect, useState } from 'react';
import ShopArea from './components/ShopArea/ShopArea';

function App() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("data.json")
  //     .then(res => res.json())
  //     .then(data => setData(data))
  // }, [])
  // console.log(data)
  return (
    <div className="App">
      <div className="Title_style">
        <h1>This is travel site</h1>
      </div>

      <ShopArea className="container"></ShopArea>
    </div>
  );
}

export default App;
