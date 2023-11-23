import { useState } from "react";
import List from "./List";

const Search = () => {
  const [input, setInput] = useState("");
  const [arr, setArr] = useState([]);
  function changeHadler(evt) {
    setInput(evt.target.value);
  }
  function valueHandler() {
    setArr((prev) => [...prev, input]);
    setInput("");
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
      <List value={arr} todoHandler={todoHandler} />
    </div>
  );
};

export default Search;
