import { useState } from "react";
import { FiX } from "react-icons/fi";
import { BiSolidCheckSquare } from "react-icons/bi";
import { BiCheckSquare } from "react-icons/bi";

const List = ({ value, todoHandler }) => {
  const [underline, setUnderline] = useState(false);
  function checkHandler(el) {
    setUnderline(() => {
      for (let i = 0; i < value.length; i++) {
        if (el === value[i]) {
          return !underline;
        }
      }
    });
  }
  return (
    <div>
      <ul>
        {value?.map((el) => {
          return (
            <div>
              <button onClick={() => checkHandler(el)}>
                {underline ? <BiSolidCheckSquare /> : <BiCheckSquare />}
              </button>
              <li
                className={
                  underline ? "line-through text-gray-400" : "no-underline"
                }
              >
                {el}{" "}
                <button onClick={() => todoHandler(el)}>
                  <FiX />
                </button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
