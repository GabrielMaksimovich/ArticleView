import { useState, useEffect } from 'react';
import { BarData } from '../types/BarData';

const useChartData = (): BarData[] => {
    const [chartData, setChartData] = useState<BarData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await response.json();
            const formattedData: BarData[] = data.slice(0, 10).map((item: { id: number; title: string }) => ({
                label: item.title,
                value: item.id,
            }));
            setChartData(formattedData);
        };

        fetchData();
    }, []);

    return chartData;
};

export default useChartData;
