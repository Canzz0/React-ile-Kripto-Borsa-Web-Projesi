import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FooterComponent from '../../main_components/footer/footer'
import LoaderComponent from '../../main_components/loader/loader'
import { getMarketDataHours } from '../../redux/features/market'
import MarketComponent from './components/marketdata'
import "./marketpage.css"
const MarketPage = () => {
    const dispatch = useDispatch();
    const { market } = useSelector(state => state.market)
    useEffect(() => {
        dispatch(getMarketDataHours());

    }, [getMarketDataHours])
    if (market.length <= 0) {
        return (
            <>
                <LoaderComponent />
            </>
        )
    }
    else {

        return (<>
            <title>Borsa</title>
            <MarketComponent market={market} />
            <FooterComponent/>
        </>
        )
    }

}

export default MarketPage