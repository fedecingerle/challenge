import React from "react";
import Products from "../Products/index";
import Filters from "../Filters/index";
import Slides from "../Slides/index";
import "./style.scss";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [],
      products: [],
      filteredProducts: [],
      filters: [],
      appliedFilters: []
    };
  }

  async componentDidMount() {
    const result = await fetch("http://remote.fizzmod.com/body.json");
    const resultJson = await result.json();
    this.setState({
      slides: resultJson.slides,
      products: resultJson.products,
      filters: resultJson.filters
    });
  }

  handleFilter(status, value, key) {
    const { products } = this.state;
    let appliedFilters = this.state.appliedFilters;
    const filteredProducts = [];

    let checkCurrentFilter = appliedFilters.filter(elem => {
      return elem.category == key && elem.value == value;
    });

    if (checkCurrentFilter.length === 0) {
      appliedFilters.push({
        category: key,
        value: value
      });
    } else {
      appliedFilters = appliedFilters.filter(elem => {
        return elem.category != key || elem.value != value;
      });
    }

    products.map(product => {
      product.attributes.map(attribute => {
        appliedFilters.map(filter => {
          if (
            attribute.field == filter.category &&
            attribute.value == filter.value
          ) {
            filteredProducts.push(product);
          }
        });
      });
    });

    this.setState({
      filteredProducts,
      appliedFilters
    });
  }
  render() {
    const { slides, filters, products, filteredProducts } = this.state;

    return (
      <div>
        <Slides className="sliderContainer" slides={slides} />
        <div className="productosContainer">
          <h1 className="productos">PRODUCTOS</h1>
        </div>
        <div className="bodyProducts">
          <Filters
            filters={filters}
            applyFilter={(status, value, key) =>
              this.handleFilter(status, value, key)
            }
          />
          <Products
            products={
              filteredProducts.length == 0 ? products : filteredProducts
            }
          />
        </div>
      </div>
    );
  }
}

export default Body;
