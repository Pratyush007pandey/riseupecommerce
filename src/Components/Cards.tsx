import { useContext } from "react";
import noteContext from "../Context/notes/noteContext";
import "./Cards.css";

const Cards = () => {
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
  return (
    <div className="products-container">
      <h1>
        {a.selectedCategory != ""
          ? a.selectedCategory.toUpperCase()
          : "all products".toUpperCase()}
      </h1>
      <div className="card-container">
        {a.state.map((item: Product) => {
          return (
            <div className="product-card" key={item.id}>
              <div className="badge">Hot</div>
              <div className="product-tumb">
                <img src={item.image} alt="" />
              </div>
              <div className="product-details">
                <span className="product-catagory">{item.category}</span>
                <h4 className="product-title">
                  <a href="">{item.title}</a>
                </h4>
                <p className="product-description">{item.description}</p>
                <div className="product-bottom-details">
                  <div className="product-price">
                    <small>${(item.price + 10).toFixed(2)}</small>
                    {item.price}
                  </div>
                  <div className="product-links">
                    <a href="">
                      <i className="fa fa-heart"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-shopping-cart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
