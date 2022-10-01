import "./App.css";
import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import MultipleCities from "./components/MultipleCities";
function App() {
  const [data, setData] = useState([]);
  async function onSumbitForm(input, date) {
    console.log("city search called");
    if (!date) {
      fetch(`http://localhost:3000?city=${input}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setData(data);
        });
    } else {
      fetch(`http://localhost:3000?city=${input}&?date=${date}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setData(data);
        });
    }
  }
  return (
    <React.StrictMode>
      <div className="App">
        <SearchBar sumbitForm={onSumbitForm} />
        {data.length === 0 ? <MultipleCities /> : <Card data={data} />}
      </div>
    </React.StrictMode>
  );
}

export default App;
