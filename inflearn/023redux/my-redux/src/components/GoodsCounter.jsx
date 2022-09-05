import { useSelector, useDispatch } from 'react-redux'
import { addNumber, substractNumber } from '../modules/goodsCounter'
import { sale, soldout } from '../modules/stockCounter'
import { useEffect } from 'react';
function GoodsCounter(){

    // useSelector : store의 상태 조회 Hook
    const {stock, goods} = useSelector(state => ({
        stock: state.goodsReducer.stock,
        goods: state.goodsReducer.goods,
    }))
    console.log(stock, goods)

    // useDispatch : store의 dispatch를 함수 내부에서 사용할 수 있는 Hook
    const dispatch = useDispatch()

    const onAddNumber = () => {

        return dispatch(addNumber())}
    const onSubstractNumber = () => {
        
        return dispatch(substractNumber())
    }

    const { message } = useSelector(state => ({
        message: state.stockReducer.message

    }))
    const onChangeMessage_sold = () =>{
        return dispatch(soldout())
    }
    const onChangeMessage_sale = () =>{
        return dispatch(sale())
    }
    console.log(stock)
    useEffect(() => {
        if( stock === 0 ){
            onChangeMessage_sold()
         }else{
            onChangeMessage_sale()
         } 
    }, [stock]);
    

    return (
        <div>
            <h2>딥러닝 개발자 무릎 담요</h2>
            <span><strong>17,500</strong>원</span>
            <div>
                <button type="button" onClick={onSubstractNumber}>MINUS</button>
                <span>{goods}</span>
                <button onClick={onAddNumber}>PLUS</button>
            </div>
            <div>
                총 수량 <strong>{goods}</strong>
            </div>
            <div>
                <strong>{goods * 17500}</strong>원</div>
            <div>
                재고 <strong>{stock}</strong>
            </div>
                <strong>{message}</strong>
        </div>
    )
}

export default GoodsCounter