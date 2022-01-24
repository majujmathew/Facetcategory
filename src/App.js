import React, { Component } from "react";
import { products as initialProducts } from "./json/products";
import { filters as initialFilters } from "./json/filters";

import CategoryManager from "./components/categoryManager/categoryManager";
import PriceRange from "./components/priceRange";
import ClearFiltersButton from "./components/clearFiltersButton";
import SortSwitch from "./components/sortSwitch";
import ToggleOffersButton from "./components/toggleOffersButton";
import Pagination from "./components/pagination";
import ProductsPerPageSwitch from "./components/productsPerPageSwitch";

import Filters from "./components/filters";
import Products from "./components/products";
import moment from "moment";

class Index extends Component {
  render() {
    let beginningTime = moment();
    let endTime = moment({
      h: 13,
      m: 0
    });
    if (beginningTime.isBefore(endTime)) {
      console.log("Before 15");
    } else {
      console.log("After 15");
    }
    return (
      <CategoryManager
        products={initialProducts}
        filters={initialFilters}
        {...this.props}
      >
        <div
          style={{
            display: `flex`,
            margin: `50px auto`,
            justifyContent: `space-between`,
            width: `800px`,
            fontSize: `18px`
          }}
        >
          <div style={{ minWidth: `200px`, padding: `0 40px` }}>
            <ClearFiltersButton />
            <ToggleOffersButton />
            <PriceRange />
            <Filters />
          </div>
          <div>
            <SortSwitch />
            <ProductsPerPageSwitch />
            <Products />
          </div>
        </div>
        <Pagination />
      </CategoryManager>
    );
  }
}

export default Index;
