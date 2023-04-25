import React, {FC, useState} from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

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

type BarData = {
    label: string;
    value: number;
};

type HorizontalBarChartProps = {
    data: BarData[];
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
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>{activeBar?.label}</Text>
                    <Text style={styles.modalText}>Value: {activeBar?.value}</Text>
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={() => setModalVisible(false)}
                    >
                        <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
        <View>
            <ScrollView horizontal>
                <View style={{ position: 'relative', width: data.length * 100, height: 300 }}>
                    <BarChart
                        data={chartData}
                        width={data.length * 100}
                        height={300}
                        chartConfig={chartConfig}
                        fromZero
                        showBarTops={false}
                        showValuesOnTopOfBars
                        withHorizontalLabels={true} // Show horizontal labels
                        withInnerLines={true} // Show inner lines
                        withVerticalLabels={true} // Show vertical labels
                        yAxisLabel=" "
                        xAxisLabel=" "
                        yAxisSuffix="k"
                        style={{ marginVertical: 8 }}
                    />


                    {data.map((item, index) => (
                        <TouchableOpacity
                            key={item.label}
                            onPress={() => showBarInfo(item)}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: index * 100,
                                height: 300,
                                width: 100,
                            }}
                        />
                    ))}
                </View>
            </ScrollView>
            {renderModal()}
        </View>
    );
};


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 16,
    },
    closeButton: {
        backgroundColor: '#2196F3',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        width: 100,
    },
    closeButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default HorizontalBarChart;
