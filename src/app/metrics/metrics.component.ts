import { ChartService } from './chart-service';
import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.scss']
})
export class MetricsComponent implements OnInit {
  margin = { top: 20, right: 20, bottom: 30, left: 50 };
  public containerWidth: number;
  public containerHeight: number;

  @ViewChild('lineChart', { static: true }) public chartContainer: ElementRef;
  id = '#securityHistory';
  svg: any;
  xAxis: any;
  yAxis: any;
  line: any;

  scales: {
    xAxisScale: any,
  } = null;
  constructor(private chartService: ChartService) { }

  ngOnInit() {
    this.containerWidth = this.chartContainer.nativeElement.offsetWidth;
    this.containerHeight = this.chartContainer.nativeElement.offsetHeight;

    // const x = d3.scaleTime().range([0, this.containerWidth]);
    // const y = d3.scaleLinear().range([this.containerHeight, 0]);

    this.initializeChart();
  }

  initializeChart() {
    this.initScales();
    this.initSvg();
    this.drawXAxis();
  }

  initSvg() {
    this.svg = this.chartService.drawSvg({
      element: this.chartContainer.nativeElement,
      height: this.containerHeight,
      width: this.containerWidth,
      class: 'security_scan_history'
    });
  }

  initScales() {
    const yAxisScaleRange = this.containerHeight - this.margin.top - this.margin.bottom;

    this.scales = {
      xAxisScale: this.chartService.scaleLinear({
        domain: [0, 5],
        range: [0, this.containerWidth - this.margin.left - this.margin.right]
      })
    };
  }

  drawXAxis() {
    if (this.xAxis) {
      this.chartService.select(`${this.id} .x-axis`).remove();
    }

    this.xAxis = d3.axisBottom(this.scales.xAxisScale).scale(this.scales.xAxisScale);
    this.xAxis.tickValues(Array.from(Array(5), (d, i) => i + 1));

    const xAxisTranslate = this.containerHeight - this.margin.bottom;

    this.svg.append('g').attr('transform', `translate(${this.margin.left}, ${xAxisTranslate})`)
      .attr('class', 'x-axis')
      .call(this.xAxis);

    this.chartService.select('.x-axis path').
      attr('stroke', '#3191ff');

    this.chartService.selectAll('.tick text')
      .attr('fill', '#fff');
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    console.log('Resixing');
    this.initScales();

    // UPDATE SVG WIDTH AND HEIGHT
    this.chartService.select(`${this.id} .security_scan_history`)
      .attr('width', this.containerWidth)
      .attr('height', this.containerHeight);

      // UPDATE X-AXIS ATTRIBUTES
      // const xAxisTranslate = this.containerHeight - this.margin.bottom;

      // this.xAxis = 
  }

}
