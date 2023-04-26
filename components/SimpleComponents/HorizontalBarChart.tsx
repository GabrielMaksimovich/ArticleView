import React, { FC, useState, useMemo, useCallback } from 'react';
import { TouchableOpacity, ScrollView, Modal } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { BarData } from '../../types/BarData';
import { HorizontalBarChartProps } from '../../types/HorizontalBarChartProps';
import { Block } from '../../styles/Block';
import { Text } from '../../styles/Text';
import {Button} from "../../styles/Button";

const chartConfig = {
    backgroundColor: '#fff',
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2,
    labelFontSize: 12,
    gridColor: 'rgba(0, 0, 0, 0.1)',
    gridOpacity: 1,
};

const HorizontalBarChart: FC<HorizontalBarChartProps> = ({ data }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [activeBar, setActiveBar] = useState<BarData | null>(null);

    const showBarInfo = useCallback((bar: BarData) => {
        setActiveBar(bar);
        setModalVisible(true);
    }, []);

    const renderModal = useCallback(() => (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <Block alignItems="center" justifyContent="center" marginTop={'22px'} flex={1}>
                <Block
                    marginHorizontal={'20px'}
                    marginVertical={'20px'}
                    bg="white"
                    borderRadius="20px"
                    paddingHorizontal={'35px'}
                    paddingVertical={'35px'}
                    alignItems="center"
                    shadowColor="#000"
                    shadowOpacity={0.25}
                    shadowRadius={4}
                >
                    <Text fontSize={16} marginBottom={15} textAlign="center">
                        {activeBar?.label}
                    </Text>
                    <Text fontSize={16} marginBottom={15} textAlign="center">
                        Value: {activeBar?.value}
                    </Text>
                    <Button
                        onPress={() => setModalVisible(false)}
                        bg="#2196F3"
                        borderRadius="20px"
                        paddingHorizontal="10px"
                        paddingVertical="10px"
                        elevation={2}
                        width="100px"
                    >
                        <Text color="white" fontWeight="bold" textAlign="center">
                            Close
                        </Text>
                    </Button>
                </Block>
            </Block>
        </Modal>
    ), [modalVisible, activeBar]);

    const chartData = useMemo(() => {
        return {
            labels: data.map((item) => item.label),
            datasets: [
                {
                    data: data.map((item) => item.value),
                },
            ],
        };
    }, [data]);

    return (
        <Block>
            <ScrollView horizontal>
                <Block position="relative" width={`${data.length * 100}px`} height="300px">
                    <BarChart
                        data={chartData}
                        width={data.length * 100}
                        height={300}
                        chartConfig={chartConfig}
                        fromZero
                        showBarTops={false}
                        showValuesOnTopOfBars
                        withHorizontalLabels={true}
                        withInnerLines={true}
                        withVerticalLabels={true}
                        yAxisLabel=" "
                        xAxisLabel=" "
                        yAxisSuffix="k"
                    />
                </Block>
                <Block position="absolute" top={'0'} left={'0'} height="300px" width={`${data.length * 100}px`}>
                    {data.map((item, index) => (
                        <Button
                            key={item.label}
                            onPress={() => showBarInfo(item)}
                            position="absolute"
                            left={`${index*100}`}
                            width={"100px"}
                            height={"300px"}
                        >
                        </Button>
                    ))}
                </Block>
            </ScrollView>

            {renderModal()}
        </Block>
    );
};

export default HorizontalBarChart;
