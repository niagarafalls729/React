function App() {
  return (
    <div className="App">
      <h1>test233</h1>
      <ProductsList/> 
    </div>
  );
}

function ProductsList(props){

  const ProductsList ={
    products: [
      {
        title: "개발자 무릎 담요",
        price: 17500,
        id: 101,
      },
      {
        title: "Hack Your Life 개발자 노트북 파우치",
        price: 29000,
        id: 102,
      },
      {
        title: "우당탕탕 라이켓의 실험실 스티커북",
        price: 29000,
        id: 103,
      },
      {
        title: "버그를 Java라 버그잡는 개리씨 키링",
        price: 29000,
        id: 104,
      },
    ],
  }

  /* num.map(i =><p>{i}</p>)  */
  
  const Title = ProductsList.map(products.title => <p>{products.title} </p>)
  return <div>
    {Title}
  </div>
}
export default App;