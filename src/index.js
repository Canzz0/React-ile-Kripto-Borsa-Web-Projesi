import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import LayoutComponent from './main_components/layout/layout';
import MarketPage from './pages/market/marketpage';
import MoneyDetail from './pages/moneydetail/moneydetail';
import NewsPage from './pages/news/newspage';
import { store } from './redux/apps/store';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<LayoutComponent/>}>
          <Route index element={<NewsPage />}></Route>
          <Route path='/news' element={<NewsPage />}></Route>
          <Route path='/market' element={<MarketPage />}></Route>
          <Route path='market/coin/:uuid' element={<MoneyDetail/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
