import "../App.css";
import React, { useState } from "react";
import { addTodo, deleteTodo, removeTodo } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";
function Todo() {
  const [inputData, setInputData] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducers.list);

  function handleAddTodo(e) {
    e.preventDefault();
    if (inputData) {
      dispatch(addTodo(inputData), setInputData(""));
      setError(false);
    } else setError(true);
  }
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>Add items here</figcaption>
          </figure>

          <div className="addItems">
            <form onSubmit={handleAddTodo}>
              <input
                type="text"
                placeholder="add items"
                value={inputData}
                onChange={(e) => {
                  setInputData(e.target.value);
                }}
                //   onClick={() => dispatch(addTodo(inputData), setInputData(""))}
              />
              <i className="fa fa-plus add-btn" onClick={handleAddTodo} />
            </form>
          </div>
          {error && <p className="warning"> Enter Something </p>}

          <div className="showItems">
            {list.map((ele) => {
              return (
                <div className="eachItem" key={ele.id}>
                  <h3>{ele.data}</h3>
                  <i
                    className="far fa-trash-alt add-btn"
                    title="delete"
                    onClick={() =>
                      dispatch(deleteTodo(ele.id), setInputData(""))
                    }
                  />
                </div>
              );
            })}
          </div>
          <div className="showItems">
            <button
              className="btn "
              data-sm-link-text="Remove All"
              onClick={() => {
                dispatch(removeTodo());
              }}
            >
              <span> Remove All </span>{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
