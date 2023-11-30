import { useState } from "react";
import List from "./List";
import { useEffect } from "react";

const Search = () => {
  const [input, setInput] = useState("");
  const [arr, setArr] = useState([]);
  const len = arr.length;
  const [status, setStatus] = useState([]);
  console.log(arr.length);
  useEffect(() => {
    setStatus(new Array(arr.length).fill(false));
  }, [arr]);

  function changeHadler(evt) {
    setInput(evt.target.value);
  }
  function valueHandler() {
    setArr((prev) => [...prev, input]);
    console.log(status);

    setInput("");
  }
  function toggleHandler(index) {
    setStatus((newstat) => {
      return newstat.map((el, idx) => {
        if (idx === index) {
          return !el;
        } else {
          return el;
        }
      });
    });
  }
  function todoHandler(el) {
    const string = el;
    console.log(string);
    // const string = el.target.parentElement.innerText.trim();
    const newValue = arr.filter((element, i) => {
      if (element !== string) {
        return el;
      }
    });
    console.log("this is newValue", newValue, "this is string : ", string);
    setArr(newValue);
  }

  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        value={input}
        onChange={changeHadler}
        className="border border-black"
      />
      <button onClick={valueHandler}>add</button>
      <List
        value={arr}
        todoHandler={todoHandler}
        length={length}
        toggleHandler={toggleHandler}
        status={status}
      />
    </div>
  );
};

export default Search;
