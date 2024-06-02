"use client";
import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Expenses',
        data: [],
        backgroundColor: [],
        borderColor: [],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    // Fetch data from your backend API
    fetch('/api/transactions')
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data.transactions);
        updateChartData(data.transactions);
      });
  }, []);

  const updateChartData = (transactions) => {
    const categories = {};
    transactions.forEach((transaction) => {
      if (categories[transaction.category]) {
        categories[transaction.category] += transaction.amount;
      } else {
        categories[transaction.category] = transaction.amount;
      }
    });

    const labels = Object.keys(categories);
    const data = Object.values(categories);
    const backgroundColor = labels.map((label, index) => `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.6)`);
    const borderColor = backgroundColor.map(color => color.replace('0.6', '1'));

    setChartData({
      labels,
      datasets: [
        {
          label: 'Expenses',
          data,
          backgroundColor,
          borderColor,
          borderWidth: 1,
        },
      ],
    });
  };

  return (
    <main className="flex flex-col items-center justify-center p-4 bg-black text-white min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="flex justify-between items-center mb-4">
          <div className="w-1/2">
            <Pie data={chartData} />
          </div>
          <div className="w-1/2">
            <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
            <ul>
              {transactions.slice(0, 5).map((transaction, index) => (
                <li key={index} className="mb-2">
                  <span>{transaction.name}</span>: <span>${transaction.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
