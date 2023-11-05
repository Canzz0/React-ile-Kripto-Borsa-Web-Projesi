import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FooterComponent from '../../main_components/footer/footer'
import LoaderComponent from '../../main_components/loader/loader'
import { getMarketData } from '../../redux/features/market'
import MarketComponent from './components/marketdata'
import "./marketpage.css"
const MarketPage = () => {
    const [searchvalues,setSearchValues]=useState();
    const dispatch = useDispatch();
    const {isSuccess, market } = useSelector(state => state.market)
    const search =(value) =>{
        setSearchValues(value)
    }
    useEffect(() => {
        dispatch(getMarketData({search:searchvalues}));
    }, [searchvalues])
    
    if (!isSuccess) {
        return (
            <>
                <LoaderComponent />
            </>
        )
    }
    else {

        return (
        <>
            <title>Borsa</title>
            <MarketComponent market={market} search={search} />
            <FooterComponent />
        </>
        )
        
    }

}

export default MarketPage