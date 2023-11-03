import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { PathParams } from 'shared';

@Component({
  selector: 'app-asset-group',
  templateUrl: './asset-group.component.html',
})
export class AssetGroupComponent implements OnInit, OnDestroy {
  groupName = '';
  params$?: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.params$ = this.route.params.subscribe((params) => {
      if (params[PathParams.Name]) this.groupName = params[PathParams.Name];
    });
  }

  ngOnDestroy(): void {
    this.params$?.unsubscribe();
  }
}
