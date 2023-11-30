import { FiX } from "react-icons/fi";
import { BiSolidCheckSquare } from "react-icons/bi";
import { BiCheckSquare } from "react-icons/bi";

const List = ({ value, todoHandler, toggleHandler, status }) => {
  return (
    <div>
      <ul>
        {value?.map((el, index) => {
          return (
            <div>
              <button onClick={() => toggleHandler(index)}>
                {status[index] ? <BiSolidCheckSquare /> : <BiCheckSquare />}
              </button>
              <li
                key={index}
                className={
                  status[index] ? "line-through text-gray-400" : "no-underline"
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
