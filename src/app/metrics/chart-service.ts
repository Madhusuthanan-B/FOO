import { scaleLinear } from 'd3-scale';
import { Injectable } from '@angular/core';

import * as d3 from 'd3';

@Injectable({
    providedIn: 'root'
})
export class ChartService {
    constructor() { }

    public select(selector: string) {
        return d3.select(selector);
    }

    public selectAll(selector: string) {
        return d3.selectAll(selector);
    }

    public style(attribute, value) {
        d3.style(attribute, value);
        return this;
    }

    public scaleLinear(data: { domain: number[], range: number[] }) {
        return d3.scaleLinear()
            .domain(data.domain)
            .range(data.range);
    }

    public scaleTime(data: { domain: number[], range: number[] }) {
        return d3.scaleTime()
            .domain(data.domain)
            .range(data.range);
    }

    public animateChartElement(selector: string) {
        const pathLen = this.select(selector).node().getTotalLength();

        this.select(selector).attr('stroke-dasharray', pathLen + ' ' + pathLen)
            .attr('stroke-dashoffset', pathLen)
            .transition()
            .duration(1500)
            .attr('stroke-dashoffset', 0);
    }

    public drawSvg(data: { element: any, width: number, height: number, class: string }) {

        if (!this.select(data.element).selectAll('svg').empty()) {
            this.select(data.element).selectAll('svg').remove();
        }

        return this.select(data.element).append('svg')
            .attr('width', data.width)
            .attr('height', data.height)
            .attr('class', data.class);
    }
}
