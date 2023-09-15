import { Component, Input } from '@angular/core';
import { Path } from 'shared';

@Component({
  selector: 'app-asset-form',
  templateUrl: './asset-form.component.html',
})
export class AssetFormComponent {
  @Input() edit = false;
  path = Path;
}
