import React, { FC, useState } from 'react';
import { TouchableOpacity, ScrollView, Modal } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { BarData } from '../../types/BarData';
import { HorizontalBarChartProps } from '../../types/HorizontalBarChartProps';
import { Block } from '../../styles/Block';
import { Text } from '../../styles/Text';

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

    const showBarInfo = (bar: BarData) => {
        setActiveBar(bar);
        setModalVisible(true);
    };

    const renderModal = () => (
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
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#2196F3',
                            borderRadius: 20,
                            padding: 10,
                            elevation: 2,
                            width: 100,
                        }}
                        onPress={() => setModalVisible(false)}
                    >
                        <Text color="white" fontWeight="bold" textAlign="center">
                            Close
                        </Text>
                    </TouchableOpacity>
                </Block>
            </Block>
        </Modal>
    );

    const chartData = {
        labels: data.map((item) => item.label),
        datasets: [
            {
                data: data.map((item) => item.value),
            },
        ],
    };

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
            </ScrollView>
            <Block position="absolute" top={'0'} left={'0'} height="300px">
                {data.map((item, index) => (
                    <TouchableOpacity
                        key={item.label}
                        onPress={() => showBarInfo(item)}
                        style={{
                            position: "absolute",
                            left: index * 100,
                            width: 100,
                            height: 300,
                        }}
                    />
                ))}
            </Block>
            {renderModal()}
        </Block>
    );

};

export default HorizontalBarChart;
