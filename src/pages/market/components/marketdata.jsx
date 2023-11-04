import React from 'react'
import { Link } from 'react-router-dom'
import "../marketpage.css"

const MarketComponent = ({market}) => {
    return (
        <section class="market-data ">
            <div class="market-title text-center m-5">
                <h1>Borsa Verileri</h1>
            </div>
            <div class="container mx-auto ml-auto mr-auto">
                <div class="market-cards mt-2 mb-4">

                    {market.data.coins.map((coin, index) => (
                        <Link to={`/market/coin/${coin.uuid}`}>
                            <div key={index} class="money-card">
                                <div class="money-card-image col-4">
                                    <img width="100px" src={coin.iconUrl} alt="" />
                                </div>
                                <div class="money-card-info col-8">
                                    <h1 class="money-card-title">
                                        {coin.symbol}
                                    </h1>
                                    <h3 class="money-card-price">
                                        <strong>{coin.price.slice(0, 8)}</strong>
                                    </h3>
                                </div>
                            </div>
                        </Link>
                    ))}

                </div>
            </div>

        </section>
    )
}

export default MarketComponent