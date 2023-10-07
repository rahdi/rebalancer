import { Component, HostListener, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts';
import { AppState } from 'app.store';
import { Subscription } from 'rxjs';
import { sharedStore } from 'shared';

const LEGEND_MARGIN = 250;
const BLOCK_MARGIN = 200;

const apiCoreSelectors = sharedStore.selectors.apiCore;

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  // TODO: uncomment
  // styles: [
  //   `
  //     ::ng-deep .chart-legend > div > header.legend-title > .legend-title-text {
  //       max-width: ${LEGEND_MARGIN - 20}px;
  //     }

  //     ::ng-deep .chart-legend .legend-wrap .legend-label-text {
  //       max-width: ${LEGEND_MARGIN - 20}px;
  //     }
  //   `,
  // ],
})
export class ChartComponent implements OnDestroy {
  isLoading$ = this.store.select(apiCoreSelectors.selectIsLoading);
  chartData$ = this.store.select(apiCoreSelectors.selectChartData);
  totalAmountSub: Subscription;
  width = window.innerWidth - LEGEND_MARGIN;
  height = window.innerWidth;

  // options
  showLegend = true;
  isDoughnut = true;
  legendPosition = LegendPosition.Right;
  legendTitle = '';
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

  constructor(private store: Store<AppState>) {
    this.handleResize();
    this.totalAmountSub = this.store
      .select(apiCoreSelectors.selectTotalAmount)
      .subscribe((next) => {
        this.legendTitle = `Total: ${next} $ (100%)`;
      });
  }

  formatTooltip(tooltip: {
    data: { name: string; value: number; extra: string };
  }) {
    const {
      data: { name, value, extra },
    } = tooltip;

    return `<span class="tooltip-label">${name}</span>
    <span class="tooltip-val">${value} $ (${extra}%)</span>`;
  }

  onSelect(data: { name: string }): void {
    console.log(data.name);
  }

  @HostListener('window:resize')
  @HostListener('window:change')
  handleResize() {
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

  ngOnDestroy(): void {
    this.totalAmountSub.unsubscribe();
  }
}
