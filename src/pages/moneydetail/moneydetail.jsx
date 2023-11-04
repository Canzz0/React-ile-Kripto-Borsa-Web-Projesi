import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import FooterComponent from '../../main_components/footer/footer';
import LoaderComponent from '../../main_components/loader/loader';
import { getCoinDetail } from '../../redux/features/moneydetail';
import MoneyInfoComponent from './components/money_info';
import MoneyChartComponent from './components/moneychart';
import './moneydetail.css';

const CoinDetail = () => {
    const [timeStatus, setTimeStatus] = useState('24h');
    const time = timeStatus;
    const { uuid } = useParams();
    const dispatch = useDispatch();
    const {isSuccess, coindetail } = useSelector(state => state.coindetail);
    const getTime = (timeS) => {
        setTimeStatus(timeS)
    }
    useEffect(() => {
        dispatch(getCoinDetail({ time: time, uuid: uuid }));
    }, [time]);
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
                {coindetail.data.coins.map((coindetail, index) => (
                    <title>{coindetail.name}</title>
                ))}
                <MoneyInfoComponent coindetails={coindetail} />
                <MoneyChartComponent coindetails={coindetail} getTime={getTime} />
                <FooterComponent />
            </>
        )
    }
}
export default CoinDetail