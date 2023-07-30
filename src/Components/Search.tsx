import { useContext } from "react";
import noteContext from "../Context/notes/noteContext";
import _ from "lodash"; // Import lodash library
import { FaSistrix } from "react-icons/fa";
import "./Search.css";

const Search = () => {
  let a = useContext(noteContext);
  interface Product {
    id: number;
    title: string;
    image: string;
    description: string;
    category: string;
    price: number;
    rating: {
      rate: number;
      count: number;
    };
  }
  const handleChange = (val: string) => {
    const value = val;
    debouncedHandleChange(value);
  };
  const debouncedHandleChange = _.debounce((value: string) => {
    let filteredItems = a.products.filter((item: any) => {
      return item.title.includes(value);
    });
    a.setState(filteredItems);
    console.log("hello", filteredItems);
  }, 500);
  return (
    <div className="search">
      <input
        type="text"
        onChange={(event) => handleChange(event.target.value)}
        placeholder="Search by category, name ..."
      ></input>
      <span>
        <FaSistrix></FaSistrix>
      </span>
    </div>
  );
};

export default Search;
