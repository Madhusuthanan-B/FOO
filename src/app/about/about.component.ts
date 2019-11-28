import { Component, OnInit } from '@angular/core';
import { RadialProgress } from '../radial-progress/radial-progress.model';

const skillWidgetDefaultProps = {
  radius: 55,
  fillTime: 10,
  label: '#adadad',
  frontEndColor: {
    start: '#19F2A1',
    end: '#0072ff'
  },
  backendColor: {
    start: '#8A4EF3',
    end: '#19F2A1'
  }
};

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  skills: RadialProgress[];
  constructor() { }

  ngOnInit() {

    this.skills = [
      {
        id: 'angular',
        radius: skillWidgetDefaultProps.radius,
        start: 0,
        end: 0.90,
        gradient: skillWidgetDefaultProps.frontEndColor,
        label: {
          name: '',
          color: skillWidgetDefaultProps.label,
          value: 'Angular 2+'
        },
        fillTime: 10
      },
      {
        id: 'typescript',
        radius: skillWidgetDefaultProps.radius,
        start: 0,
        end: 0.90,
        gradient: skillWidgetDefaultProps.frontEndColor,
        label: {
          name: '',
          color: skillWidgetDefaultProps.label,
          value: 'TypeScript'
        },
        fillTime: 10
      },
      {
        id: 'javascript',
        radius: skillWidgetDefaultProps.radius,
        start: 0,
        end: 0.75,
        gradient: skillWidgetDefaultProps.frontEndColor,
        label: {
          name: '',
          color: skillWidgetDefaultProps.label,
          value: 'JavaScript'
        },
        fillTime: 10
      },
      {
        id: 'css',
        radius: skillWidgetDefaultProps.radius,
        start: 0,
        end: 0.70,
        gradient: skillWidgetDefaultProps.frontEndColor,
        label: {
          name: '',
          color: skillWidgetDefaultProps.label,
          value: 'Css / Sass'
        },
        fillTime: 10
      },
      {
        id: 'html',
        radius: skillWidgetDefaultProps.radius,
        start: 0,
        end: 0.70,
        gradient: skillWidgetDefaultProps.frontEndColor,
        label: {
          name: '',
          color: skillWidgetDefaultProps.label,
          value: 'Html 5'
        },
        fillTime: 10
      },
      {
        id: 'D3',
        radius: skillWidgetDefaultProps.radius,
        start: 0,
        end: 0.50,
        gradient: skillWidgetDefaultProps.frontEndColor,
        label: {
          name: '',
          color: skillWidgetDefaultProps.label,
          value: 'D3'
        },
        fillTime: 10
      },
      {
        id: 'csharp',
        radius: skillWidgetDefaultProps.radius,
        start: 0,
        end: 0.65,
        gradient: skillWidgetDefaultProps.backendColor,
        label: {
          name: '',
          color: skillWidgetDefaultProps.label,
          value: 'C#'
        },
        fillTime: 10
      },
      {
        id: 'dotnetCore',
        radius: skillWidgetDefaultProps.radius,
        start: 0,
        end: 0.65,
        gradient: skillWidgetDefaultProps.backendColor,
        label: {
          name: '',
          color: skillWidgetDefaultProps.label,
          value: '.Net Core'
        },
        fillTime: 10
      },
      {
        id: 'unitTesting',
        radius: skillWidgetDefaultProps.radius,
        start: 0,
        end: 0.90,
        gradient: skillWidgetDefaultProps.backendColor,
        label: {
          name: '',
          color: skillWidgetDefaultProps.label,
          value: 'Unit Testing'
        },
        fillTime: 10
      },
      {
        id: 'tdd',
        radius: skillWidgetDefaultProps.radius,
        start: 0,
        end: 0.90,
        gradient: skillWidgetDefaultProps.backendColor,
        label: {
          name: '',
          color: skillWidgetDefaultProps.label,
          value: 'TDD'
        },
        fillTime: 10
      }];
  }

}
