import { Component, HostListener } from '@angular/core';
import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts';

const LEGEND_MARGIN = 250;
const BLOCK_MARGIN = 200;

const single = [
  {
    name: 'Stocks (28%)',
    value: 8940000,
  },
  {
    name: 'Bonds (28%)',
    value: 5000000,
  },
  {
    name: 'Commodities (28%)',
    value: 7200000,
  },
  {
    name: 'ETFs (28%)',
    value: 6200000,
  },
  {
    name: 'Real Estates and some long random text to test ellipsis (28%)',
    value: 6200000,
  },
  {
    name: 'Real Estates1 (28%)',
    value: 6200000,
  },
  {
    name: 'Real Estates2 (28%)',
    value: 6200000,
  },
];

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  styles: [
    `
      ::ng-deep .chart-legend > div > header.legend-title > .legend-title-text {
        max-width: ${LEGEND_MARGIN - 20}px;
      }

      ::ng-deep .chart-legend .legend-wrap .legend-label-text {
        max-width: ${LEGEND_MARGIN - 20}px;
      }
    `,
  ],
})
export class ChartComponent {
  single: any[] = [];
  width = window.innerWidth - LEGEND_MARGIN;
  height = window.innerWidth;

  // options
  showLegend = true;
  isDoughnut = true;
  legendPosition = LegendPosition.Right;
  legendTitle = 'Total: 100 000 $ (100%)';
  maxLabelLength = 20;
  animations = false;

  colorScheme: string | Color = {
    name: '',
    selectable: true,
    group: ScaleType.Linear,
    domain: [
      'hsl(206, 62%, 72%)',
      'hsl(206, 88%, 20%)',
      'hsl(206, 63%, 51%)',
      'hsl(206, 37%, 89%)',
      'hsl(206, 93%, 33%)',
      'hsl(206, 88%, 16%)',
      'hsl(206, 63%, 41%)',
    ],
  };

  constructor() {
    Object.assign(this, { single });
    this.handleResize();
  }

  onSelect(data: any): void {
    // console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    // console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    // console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  @HostListener('window:resize')
  @HostListener('window:change')
  handleResize() {
    console.log('resize');
    if (window.innerWidth >= 1280) {
      this.height = window.innerHeight - BLOCK_MARGIN;
      this.width = window.innerWidth - 512 - LEGEND_MARGIN;
    } else if (window.innerWidth >= 768) {
      this.height = window.innerHeight - BLOCK_MARGIN / 2;
      this.width = window.innerWidth - LEGEND_MARGIN;
    } else {
      this.height = window.innerWidth;
      this.width = window.innerWidth - 50;
    }

    if (window.innerWidth >= 768) {
      this.legendPosition = LegendPosition.Right;
    } else {
      this.legendPosition = LegendPosition.Below;
    }
  }
}
