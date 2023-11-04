import { Chart } from 'chart.js';
import 'chart.js/auto';
import React, { useEffect, useRef, useState } from 'react';
const MoneyChartComponent = ({ coindetails }) => {
    const chartRef = useRef(null);
    const [sparklineData, setSparklineData] = useState(['']);
    const [chart, setChart] = useState(null);

    useEffect(() => {
        const ctx = chartRef.current;

        //Başka bir chart var onu kaldırır 
        if (chart) {
            chart.destroy();
        }

        const data = coindetails.data.coins[0].sparkline.map(value => parseFloat(value));
        const reversedData = data.slice();
        
        const now = new Date();
        const hourLabels = [];
        const previousDayLabel = [];
        
        coindetails.data.coins[0].sparkline.forEach((value, index) => {
            now.setHours(now.getHours() - 1);
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const label = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
            
            if (index === 0 ) {
                previousDayLabel.push(label);
                
            } else {
                hourLabels.push(label);
            }
        });
        
        // Veri ve etiketleri birleştir
        const labels = previousDayLabel.concat(hourLabels);
        const reversedLabels = labels.slice().reverse();
        
        // Yeni bir grafik oluştur
        const newChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: reversedLabels,
                datasets: [{
                    label: 'Hourly Price',
                    data: reversedData,
                    borderColor: 'blue',
                    backgroundColor: 'rgba(0, 0, 255, 0.2)',
                    borderWidth:3,
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: false,
                    }
                }
            }
        });

        setChart(newChart);
        setSparklineData(data);
    }, [coindetails]);

    return (
        <section className="chart">
            <div className="container">
                <div className="money-chart mb-2">
                    <canvas ref={chartRef}></canvas>
                </div>
            </div>
        </section>
    );
}

export default MoneyChartComponent;
