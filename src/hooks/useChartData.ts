import { useState, useEffect, useCallback } from 'react';
import { BarData } from '../types/BarData';

const useChartData = () => {
    const [chartData, setChartData] = useState<BarData[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        setIsError(false);

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await response.json();
            const formattedData: BarData[] = data.slice(0, 10).map((item: { id: number; title: string }) => ({
                label: item.title,
                value: item.id,
            }));
            setChartData(formattedData);
        } catch (error) {
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data: chartData, isLoading, isError, refetch: fetchData };
};

export default useChartData;
