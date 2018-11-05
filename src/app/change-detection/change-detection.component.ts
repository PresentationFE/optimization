import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { take } from 'rxjs/operators';

import { Profile } from './profile';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.sass']
})
export class ChangeDetectionComponent implements OnInit {
  profile1: Profile = new Profile('Felipe', 'Coury');
  profile2: Profile = new Profile('Nate', 'Murray');
  profile3: Profile = new Profile('Felix', 'Wang');
  itemObservable: Observable<number>;

  constructor() { }

  ngOnInit() {
    this.itemObservable = timer(100, 100).pipe(take(101));
  }

}
