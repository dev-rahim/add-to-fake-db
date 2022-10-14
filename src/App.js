import { useEffect, useState } from 'react';
import './App.css';
import Products from './Components/Products/Products';

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('./products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);
  return (
    <div className="App">
      <h1>Hello From React</h1>
      <Products products={products} />
    </div>
  );
}

export default App;
