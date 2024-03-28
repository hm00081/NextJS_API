import { CrimeData } from '@/app/types/type';
import * as d3 from 'd3';

export const D3Drawer = (data: CrimeData) => {
    const width = 928;
    const height = width;
    const innerRadius = 180;
    const outerRadius = Math.min(width, height) / 2 - 6;
    console.log(data.crimes);
    // 범죄 유형을 기준으로 데이터를 스택
    // const stack = d3.stack()
    // //@ts-ignore
    //   .keys(crimeTypes)
    //   .order(d3.stackOrderNone)
    //   .offset(d3.stackOffsetExpand); // 데이터를 [0, 1] 범위로 정규화

    // // Calculate Stack Layout
    // // const series = stack(data);

    // // const x = d3.scaleBand()
    // //   .domain(data.map(d => d.crimeSub)) // 범죄 중분류를 도메인으로 설정
    // //   .range([0, 2 * Math.PI]) // 레이디얼 스케일에 맞게 범위 설정
    // //   .align(0);

    // const y = d3.scaleRadial()
    //   .range([innerRadius, outerRadius]);

    // const z = d3.scaleOrdinal()
    //   .domain(crimeTypes)
    //   .range(d3.schemeCategory10); // 색상 스케일을 설정합니다.

    const svg = d3
        .create('svg')
        .attr('viewBox', [-width / 2, -height / 2, width, height])
        .style('font', '10px sans-serif');

    // // 각 스택(범죄 대분류)에 대해 바를 그립니다.
    // svg.append("g")
    //   .selectAll("g")
    //   .data(series)
    //   .enter().append("g")
    //   .attr("fill", d => z(d.key))
    //   .selectAll("path")
    //   .data(d => d)
    //   .enter().append("path")
    //   .attr("d", d3.arc()
    //     .innerRadius(d => y(d[0]))
    //     .outerRadius(d => y(d[1]))
    //     .startAngle(d => x(d.data.crimeSub))
    //     .endAngle(d => x(d.data.crimeSub) + x.bandwidth())
    //     .padAngle(0.01)
    //     .padRadius(innerRadius));

    // // ... 이어서 나머지 축, 레전드, 툴팁 등을 추가합니다.

    return svg.node();
};
