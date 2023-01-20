import React, { useEffect } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = React.useState(null);

  useEffect(() => {
    fetch(`process.env.api_url`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="App">
      {products ? (
        products.map((product) => {
          return (
            <div key={product.name}>
              <h1>{product.name}</h1>
              <h1>{product.description}</h1>
            </div>
          );
        })
      ) : (
        <h1>Loading....</h1>
      )}
    </div>
  );
}

export default App;
