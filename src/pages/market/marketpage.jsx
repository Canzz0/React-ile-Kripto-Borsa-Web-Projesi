import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getMarketDataHours } from '../../redux/features/market'
import "./marketpage.css"
const MarketPage = () => {
    const dispatch = useDispatch();
    const { market } = useSelector(state => state.market)
    useEffect(() => {
        dispatch(getMarketDataHours());
    }, [getMarketDataHours])
    if (market.length<=0){
        return(
            <>
            Yükleniyor</>
        )
    }
    else{
        return (<>
            <title>Borsa</title>
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
    
        </>
        )
    }
   
}

export default MarketPage