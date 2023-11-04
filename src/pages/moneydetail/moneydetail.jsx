import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import FooterComponent from '../../main_components/footer/footer';
import LoaderComponent from '../../main_components/loader/loader';
import { getCoinDetail } from '../../redux/features/moneydetail';
import MoneyInfoComponent from './components/money_info';
import MoneyChartComponent from './components/moneychart';
import './moneydetail.css';

const CoinDetail = () => {
    const time = '24h';
    const { uuid } = useParams();
    const dispatch = useDispatch();
    const { coindetail } = useSelector(state => state.coindetail);
    console.log(time);
    useEffect(() => {
        dispatch(getCoinDetail({ time: time, uuid: uuid }));
    }, [getCoinDetail]);
    if (coindetail.length <= 0) {
        return (
            <>
                <LoaderComponent />
            </>
        )

    }

    else {
        return (
            <>
                {coindetail.data.coins.map((coindetail, index) => (
                    <title>{coindetail.name}</title>

                ))}
                <MoneyInfoComponent coindetails={coindetail} />
                <MoneyChartComponent coindetails={coindetail} />
                <FooterComponent/>
            </>
        )

    }

}

export default CoinDetail