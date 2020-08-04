import React, {useEffect} from 'react';
const API_URL =process.env.REACT_APP_API_URL;


function App() {
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data)
    }
    fetchData();
  });
  return (
    <div className="App">
      <h1>Hello world!2толjjтол2</h1>
    </div>
  );
}

export default App;