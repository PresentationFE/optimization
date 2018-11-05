import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Profile } from '../profile';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.sass'],
  changeDetection: ChangeDetectionStrategy.Default // always detect changes
})
export class DefaultComponent implements OnInit {
  @Input() profile: Profile;

  constructor() { }

  ngOnInit() {
  }

}
