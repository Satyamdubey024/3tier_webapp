import React, { useState, useEffect } from 'react';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/data')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="App">
      <h1>Items from DB</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Item Name</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item[0]}>
              <td>{item[0]}</td>
              <td>{item[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
