import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Profile } from '../profile';

@Component({
  selector: 'app-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush // only detect changes when own input changes
})
export class OnPushComponent implements OnInit {
  @Input() profile: Profile;

  constructor() { }

  ngOnInit() {
  }

}
