import React from 'react';
import StackedBarChart from '../charts/StackedBarChart';
import policeData from '../data/police.json'; // 가정한 경로, 실제로 맞게 수정 필요

const ChartsPage = () => {
    return (
        <div>
            <h1>Crime Statistics</h1>
            <StackedBarChart data={policeData.crimes} />
        </div>
    );
};

export default ChartsPage;
