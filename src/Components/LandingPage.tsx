import { useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";
import Categories from "./Categories";
import Slider from "./Slider";
import noteContext from "../Context/notes/noteContext";
import axios from "axios";
import Cards from "./Cards";
import Filter from "./Filter";
import Header from "./Header";
import { GiHamburgerMenu } from "react-icons/gi";
import "./LandingPage.css";

const LandingPage = () => {
  const a = useContext(noteContext);

  useEffect(() => {
    fetch();
  }, [a.selectedCategory]);

  useEffect(() => {
    fetchCategory();
  }, []);

  let fetch = async () => {
    let response: any;
    if (a.selectedCategory != "") {
      response = await axios.get(
        `https://fakestoreapi.com/products/category/${a.selectedCategory}`
      );
      a.setProducts(response.data);
    } else {
      response = await axios.get("https://fakestoreapi.com/products");
      a.setProducts(response.data);
      console.log(response.data);
    }

    a.setState(response.data);
  };

  let fetchCategory = async () => {
    let response = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    a.setCategory(response.data);
  };

  return (
    <div className="landing-page">
      <Header />
      <Slider />
      <div className="logos">
        <span className="hamburger">
          <h1>Eflyer</h1>
        </span>
        <span className="hamburger">
          <GiHamburgerMenu />
        </span>
      </div>

      <div className="mobile-filter">
        <Filter />
        <Categories />
      </div>

      <div className="mobile-search">
        <Search />
      </div>
      <div className="functions">
        <Filter />
        <Search />
        <Categories />
      </div>

      <Cards />
    </div>
  );
};

export default LandingPage;
