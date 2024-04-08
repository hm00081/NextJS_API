'use client';
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts/core';
import { TitleComponent, TooltipComponent, GridComponent, DatasetComponent, TransformComponent } from 'echarts/components';
import { BarChart, LineChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { EChartsType } from 'echarts';
import { CrimeData } from '../types/index';

echarts.use([TitleComponent, TooltipComponent, GridComponent, DatasetComponent, TransformComponent, BarChart, LineChart, CanvasRenderer]);

interface StackedBarChartProps {
    data: CrimeData['crimes'];
}

const StackedBarChart: React.FC<StackedBarChartProps> = ({ data }) => {
    useEffect(() => {
        const chartDom = document.getElementById('main');
        const myChart = echarts.init(chartDom);
        const uniqueCategories = Array.from(new Set(data.map((item) => item.crimeSub as string)));
        console.log(uniqueCategories);
        const maxValue = data.reduce((acc, item) => {
            const itemValues = Object.keys(item)
                .filter((key) => key !== 'crimeMain' && key !== 'crimeSub')
                .map((key) => Number(item[key]));
            const maxItemValue = Math.max(...itemValues);
            return Math.max(acc, maxItemValue);
        }, 0);

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
                    data: data.map((item) => item[key]),
                    markLine: {
                        data: [
                            { type: 'average', name: '평균값' },
                            // 추후 기타 markLine 설정.
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
                //max: maxValue,
            },
            yAxis: {
                type: 'category',
                data: uniqueCategories,
            },
            series,
        };
        console.log(option.yAxis);
        myChart.setOption(option);

        return () => {
            myChart.dispose();
        };
    }, [data]);

    return <div id="main" style={{ width: '100%', height: '500px' }}></div>;
};

export default StackedBarChart;
