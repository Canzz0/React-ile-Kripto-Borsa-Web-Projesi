import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './index.css';
import LayoutComponent from './main_components/layout/layout';
import MarketPage from './pages/market/marketpage';
import MoneyDetail from './pages/moneydetail/moneydetail';
import NewsPage from './pages/news/newspage';
import { store } from './redux/apps/store';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path='/' element={<LayoutComponent />}>
          <Route index element={<NewsPage />} />
          <Route path='/news/:page' element={<NewsPage />} /> {/* Sayfa parametresini ekleyin */}
          <Route path='/market' element={<MarketPage />} />
          <Route path='market/coin/:uuid' element={<MoneyDetail />} />
        </Route>
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
