import {countererSlice} from '@reduxjs/toolkit' 
// 초기 값
const initialState = {
    stock: 10,
    goods: 1
};


export const counterSlice = createSlice({
    name: 'counter', // 이 리듀서의 이름
    initialState,
    reducers: { // 함수로 바뀐 것이 중요한 특징, 기존처럼 유니크한 이름이 아니어도 됩니다.
        increment: (state) => {
            state.stock -= 1 // ...state가 없어졌습니다.
            state.goods += 1
        },
        decrement: (state) => {
            state.stock += 1
            state.goods -= 1
        },
    },
})

console.log(counterSlice)

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer // reducers처럼 s붙지 않습니다. console.log로 찍어보면 알 수 있습니다.