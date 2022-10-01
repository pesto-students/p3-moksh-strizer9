import React, { useEffect, useState } from "react";
import Card from "./Card";
function MultipleCities() {
  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => {
        var cleanData = data.filter(
          (arr, index, self) =>
            index === self.findIndex((t) => t.name === arr.name)
        );

        setData(cleanData);
      });
  }, []);

  const [data, setData] = useState([]);
  var cards = data.map((d) => {
    return <Card data={d} />;
  });
  return (
    <>
      <div className="card-wrapper">{cards}</div>
    </>
  );
}

export default MultipleCities;
