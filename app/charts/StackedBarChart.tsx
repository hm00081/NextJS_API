'use client';
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts/core';
import { TitleComponent, TooltipComponent, GridComponent, DatasetComponent, TransformComponent } from 'echarts/components';
import { BarChart, LineChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { EChartsType } from 'echarts';

echarts.use([TitleComponent, TooltipComponent, GridComponent, DatasetComponent, TransformComponent, BarChart, LineChart, CanvasRenderer]);

interface CrimeDataItem {
    [key: string]: number | string;
}

interface StackedBarChartProps {
    data: CrimeDataItem[];
}

const StackedBarChart: React.FC<StackedBarChartProps> = ({ data }) => {
    const chartRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const chartDom = document.getElementById('main');
        const myChart = echarts.init(chartDom);

        // Prepare the data for ECharts
        const series = Object.keys(data[0])
            .filter((key) => key !== 'crimeMain' && key !== 'crimeSub')
            .map((key) => {
                return {
                    name: key,
                    type: 'bar',
                    stack: 'total',
                    emphasis: {
                        focus: 'series',
                    },
                    //@ts-ignore
                    data: data.map((item) => item[key]),
                    markLine: {
                        data: [
                            { type: 'average', name: '평균값' },
                            // 기타 markLine 설정...
                        ],
                    },
                };
            });

        const option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                },
            },
            legend: {
                data: Object.keys(data[0]).filter((key) => key !== 'crimeMain' && key !== 'crimeSub'),
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true,
            },
            xAxis: {
                type: 'value',
            },
            yAxis: {
                type: 'category',
                //@ts-ignore
                data: data.map((item) => item.crimeSub),
            },
            series,
        };

        myChart.setOption(option);

        return () => {
            myChart.dispose();
        };
    }, [data]);

    return <div id="main" style={{ width: '100%', height: '500px' }}></div>;
};

export default StackedBarChart;
