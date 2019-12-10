import { ChartService } from './chart-service';
import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.scss']
})
export class MetricsComponent implements OnInit {
  data: any[] = [
    { date: new Date('2010-01-01'), value: 80 },
    { date: new Date('2010-01-04'), value: 90 },
    { date: new Date('2010-01-05'), value: 95 },
    { date: new Date('2010-01-06'), value: 100 },
    { date: new Date('2010-01-07'), value: 110 },
    { date: new Date('2010-01-08'), value: 120 },
    { date: new Date('2010-01-09'), value: 130 },
    { date: new Date('2010-01-10'), value: 140 },
    { date: new Date('2010-01-11'), value: 150 },
  ];

  private margin = { top: 20, right: 20, bottom: 30, left: 50 };
  private width: number;
  private height: number;
  private x: any;
  private y: any;
  private svg: any;
  private line: d3Shape.Line<[number, number]>; // this is line defination

  constructor(private chartService: ChartService) {
    this.width = 960 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
  }

  ngOnInit() {
    this.buildSvg();
    this.addXandYAxis();
    this.drawLineAndPath();
  }

  private buildSvg() {
    this.svg = d3.select('svg')
      .append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
  }

  private addXandYAxis() {
    // range of data configuring
    this.x = d3Scale.scaleTime().range([0, this.width]);
    this.y = d3Scale.scaleLinear().range([this.height, 0]);
    this.x.domain(d3Array.extent(this.data, (d) => d.date));
    this.y.domain(d3Array.extent(this.data, (d) => d.value));

    // Configure the Y Axis
    this.svg.append('g')
      .attr('class', 'x-axis')
      .attr('transform', 'translate(0,' + this.height + ')')
      .attr('stroke', '#19F2A1')
      .attr('fill', '#3191ff')
      .call(d3Axis.axisBottom(this.x));

    this.chartService.select('.x-axis path').
      attr('stroke', '#3191ff');

    // Configure the Y Axis
    this.svg.append('g')
      .attr('class', 'axis axis--y')
      .attr('stroke', '#19F2A1')
      .attr('fill', '#3191ff')
      .call(d3Axis.axisLeft(this.y));

    this.chartService.select('.axis--y path').
      attr('stroke', '#3191ff');

    this.chartService.selectAll('.tick line')
      .attr('stroke', '#fff');
  }

  private drawLineAndPath() {
    this.line = d3Shape.line()
      .x((d: any) => this.x(d.date))
      .y((d: any) => this.y(d.value));
    // Configuring line path
    this.svg.append('path')
      .datum(this.data)
      .attr('class', 'line')
      .attr('d', this.line);

    this.chartService.select('.line')
      .attr('fill', 'none')
      .attr('stroke', '#19F2A1');
  }

}
