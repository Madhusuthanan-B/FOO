import { Injectable } from '@angular/core';
import { GridsterConfig, GridsterItem, GridType } from 'angular-gridster2';
import { UUID } from 'angular2-uuid';


const skillWidgetDefaultProps = {
  radius: 50,
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

export interface IWidget extends GridsterItem {
  config?: any;
}

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  public options: GridsterConfig = {
    draggable: {
      enabled: true,
      // ignoreContent: true,
      dropOverItems: true,
      // dropOverItems: false,
      dragHandleClass: 'drag-handler',
      ignoreContentClass: 'no-drag'
    },
    emptyCellDragMaxCols: 50,
    emptyCellDragMaxRows: 50,
    gridType: GridType.VerticalFixed,
    minCols: 10, // 6
    minRows: 3,  // 6
    pushDirections: { north: true, east: true, south: true, west: true },
    pushItems: true,
    itemChangeCallback: (change: any) => {
      console.log('item changed', change);
    }
  };
  public layout: IWidget[] = [];
  public components: IWidget[] = [];
  dropId: string;

  constructor() {
    this.layout = [{
      x: 0, y: 0, rows: 1, cols: 2,
      config: {
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
      }
    },
    {
      x: 2, y: 0, rows: 1, cols: 2,
      config: {
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
      }
    },
    {
      x: 4, y: 0, rows: 1, cols: 2, config: {
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
      }
    },
    {
      x: 6, y: 0, rows: 1, cols: 2, config: {
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
      }
    },
    {
      x: 6, y: 0, rows: 1, cols: 2, config: {
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
      }
    },
    {
      x: 6, y: 0, rows: 1, cols: 2, config: {
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
      }
    },
    {
      x: 6, y: 0, rows: 1, cols: 2, config: {
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
      }
    },
    {
      x: 6, y: 0, rows: 1, cols: 2, config: {
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
      }
    }];
  }

}
