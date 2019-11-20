export class RadialProgress {
    id: string;
    radius: number;
    start: number;
    end: number;
    gradient: RadialGradient;
    fillTime: number;
    label?: RadialLabel;
}

export class RadialGradient {
    start: string;
    end: string;
}

export class RadialLabel {
    name: string;
    color: string;
    value?: string;
}
