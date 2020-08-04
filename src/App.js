import React, {useEffect} from 'react';


function App() {
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api');
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