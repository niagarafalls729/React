import React,{useState,useEffect} from 'react'
// import {data} from '../../database/data'
import ProductCard from '../../components/ProductCard/ProductCard'
import './homePage.css'

export default function HomePage() {
    //console.log(data)

    const [error,setError] = useState(null)
    const [isLoaded,setIsLoaded] = useState(false)

    const [items , setItems] = useState([])

    useEffect(()=>{
        const getDate = async () => {
            try{
                const res = await fetch('https://test.api.weniv.co.kr/mall')
                const result = await res.json()
                setItems(result)
                setIsLoaded(true)

            }catch(error){
                setIsLoaded(true)
                setError(error)
            }
        }
        getDate();
    }, [])
    

    if( error){
        return ( 
            <div>
                <h1>에러입니당 {error.message}</h1>
            </div>
        )
    }else if (!isLoaded) {
        return ( 
            <div>
                <h1>로딩중</h1>
            </div>
        )
    }else{
        return (
            <main className='product'>
                <ul className='product-list'>
                    {items.map(item =>
                        <ProductCard 
                            key={item.id}
                            productName = {item.productName}
                            price = {item.price}
                            thumbnailImg = {item.thumbnailImg}></ProductCard>
                        )}
                </ul>
                <a className='link-btn cart-link' href='#'></a>
            </main>
        )
    }
   
}
