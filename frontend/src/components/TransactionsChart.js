import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale, // Importa a escala de categoria
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Registra os componentes do Chart.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const TransactionsChart = ({ transactions }) => {
    const categories = ['Receita', 'Despesa'];
    const dataByCategory = categories.map((category) =>
        transactions
            .filter((transaction) => transaction.category.toLowerCase() === category.toLowerCase())
            .reduce((sum, transaction) => sum + parseFloat(transaction.amount), 0)
    );

    const data = {
        labels: categories,
        datasets: [
            {
                label: 'Total por categoria',
                data: dataByCategory,
                backgroundColor: ['#4caf50', '#f44336'],
            },
        ],
    };

    return (
        <div style={{ marginTop: 20 }}>
            <Bar
                data={data}
                options={{
                    responsive: true,
                    plugins: {
                        legend: { position: 'top' },
                    },
                }}
            />
        </div>
    );
};

export default TransactionsChart;
