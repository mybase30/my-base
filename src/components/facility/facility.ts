import {Component, Input} from '@angular/core';

/**
 * Generated class for the FacilityComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'facility',
  templateUrl: 'facility.html'
})
export class FacilityComponent {

  private _numOfUpdates : number;

  @Input()
  public iconName : string;

  @Input()
  public displayName : string;

  constructor() {

  }

  public onUpdate() : void {
    this._numOfUpdates++;
  }
}
