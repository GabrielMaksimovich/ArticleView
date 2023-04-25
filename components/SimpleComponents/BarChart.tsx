import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, View, Text } from 'react-native';
import { BarChart, Grid } from 'react-native-svg-charts';
import * as shape from 'd3-shape';

type BarData = {
    value: number;
    label: string;
    index: number;
};

type BarChartComponentProps = {
    data: BarData[];
};

const BarChartComponent: React.FC<BarChartComponentProps> = ({ data }) => {
    const [activeBar, setActiveBar] = useState<null | BarData>(null);

    const renderTooltip = () => {
        if (activeBar) {
            return (
                <View
                    style={{
                        position: 'absolute',
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        padding: 10,
                        borderRadius: 5,
                        left: 20,
                        top: activeBar.index * 50 + 10,
                    }}
                >
                    <Text style={{ color: 'black' }}>{activeBar.label}: {activeBar.value}</Text>
                </View>
            );
        }
        return null;
    };

    return (
        <View style={{ flex: 1 }}>
            <ScrollView horizontal>
                <BarChart
                    style={{ height: data.length * 50 }}
                    data={data.map((item) => item.value)}
                    svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
                    contentInset={{ top: 10, bottom: 10 }}
                    yAccessor={({ index }: any) => index}
                    spacingInner={0.05}
                    gridMin={0}
                    spacingOuter={0.05}
                    curve={shape.curveBasis}
                >
                    <Grid direction={Grid.Direction.VERTICAL} />
                </BarChart>
                {data.map((item) => (
                    <TouchableOpacity
                        key={item.index}
                        style={{
                            position: 'absolute',
                            height: 50,
                            width: item.value,
                            top: item.index * 50,
                        }}
                        onPress={() => setActiveBar(item)}
                    />
                ))}
                {renderTooltip()}
            </ScrollView>
        </View>
    );
};

export default BarChartComponent;
