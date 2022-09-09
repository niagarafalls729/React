import React from 'react';
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from 'react-dom/client';
import App from './App';
import { createStore } from 'redux';
// import rootReducer from './modules';
import goodsReducer from './modules/goodsCounter';
import stockReducer from './modules/stockCounter';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구
import { configureStore } from '@reduxjs/toolkit' //toolkit

// const store = createStore(rootReducer, composeWithDevTools());
// 1. 항상 combine을 해주었어야 했음 -> index.js 연결시켜주던 것을 여기서 모두 할 수 있음.
// 2. thunk, composeWithDevTools 등에 필요한 것들을 추가해주었어야 했음
const store = configureStore({
    reducer: {
        goodsReducer,
        stockReducer
    },
})
console.log(store.getState());

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <App tab="home" />
    </Provider>,
);