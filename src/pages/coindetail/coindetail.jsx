import React from 'react'
import './coindetail.css'
const CoinDetail = () => {
    return (
    <>
        <section class="">
            <div class="container ">
                <div class="money-info row text-center">
                    <div class="money-figure   text-center">
                        <img src="./ltc.png" alt=""/>
                    </div>
                    <div class="money-text">
                        <h1>BTC</h1>
                        <h2>Name:Bitcoin</h2>
                        <h2>Price:34694.5046499016</h2>
                        <h2>-4%</h2>
                        <img width="10%" src="./bitcoin_btc.svg"/><span> 0.14512</span>
                    </div>
                </div>
            </div>
        </section>

        <section class="chart">
            <div class="container">
                <div class="money-chart  mb-2">
                    <canvas id="chart"></canvas>
                </div>
            </div>
        </section>
        <section class="hour-info-table mt-2">
            <div class="container">
                <table class="table table-striped ">
                    <thead>
                        <tr>
                            <th>Saat</th>
                            <th>Fiyat</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>12</td>
                            <td>Fiyat Bilgisi</td>
                        </tr>
                        <tr>
                            <td>Diğer Saat</td>
                            <td>Fiyat Bilgisi</td>
                        </tr>
                        <tr>
                            <td>Diğer Saat</td>
                            <td>Fiyat Bilgisi</td>
                        </tr>
                        <tr>
                            <td>Diğer Saat</td>
                            <td>Fiyat Bilgisi</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </section>
    </>

    )
}

export default CoinDetail