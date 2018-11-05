import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Profile } from '../profile';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.sass']
})
export class ZoneComponent implements OnInit {
  @Input() profile: Profile;

  constructor() { }

  ngOnInit() {
    this.insideZone();
  }

  insideZone() {
    document.body.onclick = event => {
      this.profile = new Profile('Nate', 'Murray');
    };

    // http
    // Timer
    /* setInterval(req => {
      this.profile.lastChanged();
    }, 500); */
  }

  outsideZone() {
    // 3td party libs
    // immutable Data
    // Observable
  }

}
