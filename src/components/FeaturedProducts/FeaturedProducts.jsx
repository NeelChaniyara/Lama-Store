import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
        Crafted from premium materials, this garment is designed to enhance your everyday look effortlessly. Its versatile design, our featured product can be dressed up or down, making it a versatile addition to any wardrobe. Whether you're dressing for a casual outing or a special occasion, this garment is sure to make a statement. Experience the perfect blend of style and simplicity with our featured product. Shop now and discover why it's a must-have for fashion-forward individuals like you.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
