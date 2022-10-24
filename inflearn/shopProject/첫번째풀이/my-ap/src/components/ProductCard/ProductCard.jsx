import React, { useRef } from "react";
import ProductName from "../ProductName/ProductName";
import ProductImage from "../ProductImage/ProductImage";
import Productprice from "../ProductPrice/ProductPrice";
import "./productCard.css";
export default function ProductCard({ productName, price, thumbnailImg }) {
  const likeBtn = useRef();

  function handleLikeClick(e) {
    // console.log("event"+e)
    //  console.log("event"+e.currentTarget.classList)
    e.currentTarget.classList.toggle("on");
  }

  return (
    <li className="product-item">
      <div className="product-img">
        <ProductImage
          thumbnailImg={thumbnailImg}
          productName={productName}
        ></ProductImage>
      </div>
      <button
        ref={likeBtn}
        onClick={(e) => handleLikeClick(e)}
        className="like-btn"
      ></button>
      <div className="pdn">
        <productName productName={productName}>{productName}</productName>
        
      </div>
      
      <div className="product-price">
        <Productprice price={price}></Productprice>
        {price}
      </div>
    </li>
  );
}
