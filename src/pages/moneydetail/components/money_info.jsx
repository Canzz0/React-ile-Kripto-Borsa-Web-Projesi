import React from 'react';
import '../moneydetail.css';

const MoneyInfoComponent = ({ coindetails }) => {
  return (
    <>
      {coindetails.data.coins.map((coindetail, index) => (
        <section>
          <div className="container">
            <div class="money-info row text-center">
              <div class="money-figure   text-center">
                <img src={coindetail.iconUrl} alt="" />
              </div>
              <div class="money-text">
                <h1>{coindetail.symbol}</h1>
                <h2>{coindetail.name}</h2>
                <h2>${coindetail.price}</h2>
                <h2 style={{ color: coindetail.change > 0 ? 'green' : 'red' }}>
                  % {coindetail.change}
                </h2>
                <img width="10%" src={require('../btc.png')} /><span><strong>{coindetail.btcPrice}</strong></span>
              </div>
            </div>
          </div>
        </section>
      ))}


    </>

  )
}

export default MoneyInfoComponent;