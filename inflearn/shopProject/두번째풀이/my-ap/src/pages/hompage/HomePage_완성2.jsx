import React, { useState, useEffect } from "react";
import { useContext } from "react";
 import {Data} from '../../database/data'
import ProductCard from "../../components/ProductCard/ProductCard";
import "./homePage.css";

export default function HomePage() {
  //console.log(data)

  const [loadData, setLoadData] = useState(null);

  useEffect(() => {
    if (loadData == null) {
      return;
    } else {
      console.log(loadData + "로딩완료");
    }
  }, [loadData]);
  useContext(Data).then((d) => {
    console.log(d);
    setLoadData(d);
  });

  return (
    <main className="product">
      <ul className="product-list">
        {loadData != null ? 
        loadData.map((item) => (
          <ProductCard
            key={item.id}
            productName={item.productName}
            price={item.price}
            thumbnailImg={item.thumbnailImg}
          ></ProductCard>
        )) : <h2>로딩 중 입니다.</h2>
        }
      </ul>
      <a className="link-btn cart-link" href="#"></a>
    </main>
  );
}
