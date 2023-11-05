import { Component, Input } from '@angular/core';
import { Asset } from 'shared';

@Component({
  selector: 'app-asset-item',
  templateUrl: './asset-item.component.html',
  styleUrls: ['./asset-item.component.css'],
})
export class AssetItemComponent {
  @Input() asset?: Asset;
}
