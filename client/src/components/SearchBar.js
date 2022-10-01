import React, { useEffect, useState } from "react";
function SearchBar({ sumbitForm }) {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [date, setDate] = useState("");

  function onFormSubmit(e) {
    e.preventDefault();
    sumbitForm(input);
  }
  return (
    <div className="ui segment container">
      <form onSubmit={onFormSubmit} className="ui form">
        <label>Enter City name to see it's Weather</label>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>
        {/* <input
          placeholder="Enter Date between 14 days and 300 days from today in the future in yyyy-MM-dd format"
          type="text"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        ></input> */}
      </form>
      <button
        onClick={onFormSubmit}
        className={`ui primary button ${input ? "" : "disabled"} btn`}
      >
        Sumbit
      </button>
    </div>
  );
}

export default SearchBar;
