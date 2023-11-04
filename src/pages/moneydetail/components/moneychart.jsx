import { Chart } from 'chart.js';
import 'chart.js/auto';
import React, { useEffect, useRef, useState } from 'react';

const MoneyChartComponent = ({ coindetails, getTime }) => {
    const chartRef = useRef(null);
    const [sparklineData, setSparklineData] = useState(['']);
    const [chart, setChart] = useState(null);
    const [timeInterval, setTimeInterval] = useState('24h');
    const [labels, setLabels] = useState([]);

    useEffect(() => {
        const ctx = chartRef.current;

        if (chart) {
            chart.destroy();
        }

        const data = coindetails.data.coins[0].sparkline.map(value => parseFloat(value));
        const reversedData = data.slice();

        const newChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Price',
                        data: reversedData,
                        borderColor: 'blue',
                        backgroundColor: 'rgba(0, 0, 255, 0.2)',
                        borderWidth: 3,
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: false,
                    },
                },
            },
        });

        setChart(newChart);
        setSparklineData(data);
    }, [coindetails, timeInterval, labels]);

    const handleIntervalChange = (event) => {
        setTimeInterval(event.target.value);

        ///SAATLİK VERİLER
        if (event.target.value === '24h') {
            setLabels(getHourlyLabels());
            //GÜNLÜK VERİLER
        } else if (event.target.value === '30d') {
            setLabels(getDailyLabels());
        }
    };

    useEffect(() => {
        getTime(timeInterval);
    }, [timeInterval]);

    useEffect(() => {
        setLabels(getHourlyLabels());
    }, []);

    //SAATLİK HESAPLAMA
    const getHourlyLabels = () => {
        const now = new Date();
        const labels = [];
        for (let i = 0; i < 24; i++) {
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const label = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
            labels.unshift(label);
            now.setHours(now.getHours() - 1);
        }
        return labels;
    };

    //AYLIK HESAPLAMA
    const getDailyLabels = () => {
        const now = new Date();
        const labels = [];
        for (let i = 0; i < 30; i++) {
            const date = now.toISOString().slice(0, 10);
            labels.unshift(date);
            now.setDate(now.getDate() - 1);
        }
        return labels;
    };

    return (
        <section className="chart">
            <div className="container">
                <div className="money-chart mb-2">
                    <canvas ref={chartRef}></canvas>
                </div>
                <div className="button-place">
                    <button onClick={handleIntervalChange} value="24h">
                        Saatlik
                    </button>
                    <button onClick={handleIntervalChange} value="30d">
                        Aylık
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MoneyChartComponent;
