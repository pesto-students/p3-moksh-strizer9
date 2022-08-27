import React from "react";
import { useEffect, useState, useRef } from "react";
import shortAPI from "../API/shortAPI";
function Form() {
  const [input, setInput] = useState("");
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const [isSumbit, setIsSumbit] = useState(false);
  const [error, setError] = useState(false);

  const testStyle = useRef(0);

  useEffect(() => {
    if (url === "") {
      return;
    } else {
      shortAPI
        .get(url)
        .then((res) => {
          const { result } = res.data;
          console.log(result.short_link);
          setShortUrl(result.short_link);
          setIsSumbit(true);
        })
        .catch((err) => {
          setShortUrl(err.response.data.error);
          setError(true);
        });
    }
  }, [url]);

  function handleSumbit(e) {
    if (url === "") testStyle.current.style.display = "block";
    else testStyle.current.style.display = "none";
    e.preventDefault();
    setUrl(input);
  }
  function handleChange(e) {
    setInput(e.target.value);
  }

  let outputResult;
  if (error) {
    outputResult = (
      <div className="form-wrapper output">
        <div className="url">
          <p>{shortUrl}</p>
        </div>
      </div>
    );
  } else if (isSumbit) {
    outputResult = (
      <div className="form-wrapper output">
        <div className="url">
          <p>
            <a href={`${url}`}>{url}</a>
          </p>
        </div>
        <div className="short-url">
          <p>
            <a href={`${shortUrl}`}>{shortUrl}</a>
          </p>
          <button
            onClick={() => {
              navigator.clipboard.writeText(shortUrl);
            }}
          >
            COPY
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="form-wrapper">
        <form onSubmit={handleSumbit}>
          <input
            placeholder="Enter input"
            value={input}
            onChange={handleChange}
          />

          <button>Short input</button>
        </form>
        <p ref={testStyle} className="error" style={{ display: "none" }}>
          Enter a URL first !!!
        </p>
      </div>

      {outputResult}
    </div>
  );
}

export default Form;
