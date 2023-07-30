import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props: any) => {
  const [state, setState] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [search, setSearch] = useState<string>("");

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

  return (
    <NoteContext.Provider
      value={{
        state,
        setState,
        category,
        setCategory,
        selectedCategory,
        setSelectedCategory,
        search,
        setSearch,
        products,
        setProducts,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
